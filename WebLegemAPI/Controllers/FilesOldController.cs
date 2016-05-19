using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using WebLegemAPI.OCR;
using WebLegemDAL.Archivo;
using WebLegemDAL.DAL;
using WebLegemDAL.Models;

namespace WebLegemAPI.Controllers
{
    [EnableCorsAttribute("*", "*", "*")]
    public class FilesOldController : ApiController
    {
        IPdfToText ocr;
        IDataAccessObject<Archivo> archivoDAO;

        public FilesOldController(IDataAccessObject<Archivo> archivoDAO, IPdfToText ocr) : base()
        {
            this.archivoDAO = archivoDAO;
            this.ocr = ocr;
        }

        public Task<IHttpActionResult> Post()
        {         
            var rootUrl = @"c:\oraData\web_legem";
            if (Request.Content.IsMimeMultipartContent() )
            {
                var streamProvider = new CustomMultipartFormDataStreamProvider(rootUrl);
                var file = Request.Content.ReadAsMultipartAsync(streamProvider).ContinueWith<IHttpActionResult>(t =>
                {

                    if (t.IsFaulted || t.IsCanceled)
                    {
                        throw new HttpResponseException(HttpStatusCode.InternalServerError);
                    }                    

                    var fileInfo = streamProvider.FileData.Select(i => {
                        var info = new FileInfo(i.LocalFileName);
                        String resultado = ocr.Convertir(rootUrl, info.Name );

                        var test = rootUrl + @"\text\" + info.Name + ".txt";

                        var archivo = archivoDAO.Create( new Archivo() { Nombre = info.Name } );

                        File.WriteAllText( test, resultado );
                        return new FileDesc( archivo.Id.ToString(), rootUrl + @"\text" + @"\" + info.Name + ".txt", info.Length / 1024, resultado);
                    });
                                        
                    return Ok(fileInfo);
                });

                return file;
            }
            else
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotAcceptable, "This request is not properly formatted"));
            }
        } // end action method POST

        public HttpResponseMessage Get(int id)
        {
            if (id == 0)
                return Request.CreateResponse( HttpStatusCode.BadRequest );

            try
            {
                string fileName = archivoDAO.Get(id).Nombre;
                string localFilePath = @"c:\oradata\web_legem\";

                HttpResponseMessage response = new HttpResponseMessage( HttpStatusCode.OK );
                response.Content = new StreamContent( new FileStream( localFilePath + fileName, FileMode.Open, FileAccess.Read ) );
                response.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment");
                response.Content.Headers.ContentDisposition.FileName = fileName;                

                return response;
            }
            catch ( Exception exception )
            {
                return Request.CreateResponse( HttpStatusCode.InternalServerError );
            }
                                   
        } // end action method POST

        public class FileDesc
        {
            public string Name { get; set; }
            public string Path { get; set; }
            public long Size { get; set; }
            public string Result { get; set; }

            public FileDesc(string n, string p, long s, string r)
            {
                Name = n;
                Path = p;
                Size = s;
                Result = r;
            }
        } // public class FileDesc

        public class CustomMultipartFormDataStreamProvider : MultipartFormDataStreamProvider
        {            
            public CustomMultipartFormDataStreamProvider(string path) 
                : base(path)
            {                
            } // end constructor

            public override string GetLocalFileName(System.Net.Http.Headers.HttpContentHeaders headers)
            {
                var name = !string.IsNullOrWhiteSpace(headers.ContentDisposition.FileName) ? headers.ContentDisposition.FileName : "NoName";
                
                //this is here because Chrome submits files in quotation marks which get treated as part of the filename and get escaped
                return base.GetLocalFileName( headers ) + Path.GetExtension(name.Replace("\"", string.Empty)) ;
            }
        } // end class CustomMultipartFromDataStreamProvider
    } // end namespace
}