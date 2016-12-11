//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Net;
//using System.Net.Http;
//using System.Threading.Tasks;
//using System.Web.Http;
//using System.Web.Http.Cors;
//using WebLegemAPI.Models.FileHandlers;
//using static WebLegemCommon.Constants;

//namespace WebLegemAPI.Controllers
//{
//    [EnableCors( "*", "*", "*" )]
//    public class FilesController : ApiController
//    {      
//        public async Task<IHttpActionResult> Post()
//        {
//            if (!Request.Content.IsMimeMultipartContent())
//                throw new HttpResponseException( 
//                    Request.CreateErrorResponse( HttpStatusCode.NotAcceptable,
//                    "this requets is not properly formatted" ) );

//            var fileHandler = new FileHandlerFactory().getHandler( Request );

//            var fileName = await fileHandler.SaveFile( Request );

//            return Ok( new {
//                Nombre = fileName
//            });

//        } // end action method POST

//        public IHttpActionResult Get()
//        {
//            return Ok();
//        } // end action method Get
//    } // end class FilesController
//} // end namespace WebLegemAPI.Controllers


using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using WebLegemAPI.Models;
using WebLegemAPI.OCR;
using WebLegemDAL.Dao;
using WebLegemDAL.Models;

namespace WebLegemAPI.Controllers
{

    [EnableCorsAttribute("*", "*", "*")]
    public class FilesController : ApiController
    {

        private IPdfToText pdfToText;
        private ArchivoDao dao;
        private Dictionary<Guid, Archivo> map;

        public FilesController(IPdfToText pdfToText,
                Dictionary<Guid, Archivo> dictionary, ArchivoDao dao)
            : base()
        {
            this.pdfToText = pdfToText;
            map = dictionary;
            this.dao = dao;
        } // end constructor

        public HttpResponseMessage Get(int id)
        {
            if (id == 0)
                return Request.CreateResponse(HttpStatusCode.BadRequest);

            var maybe = dao.Get(id);

            if (maybe.HasValue)
            {
                var fileName = maybe.Value.Ruta;
                var localFilePath = ConfigurationManager.AppSettings["basePath"].ToString();

                HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
                response.Content = new StreamContent(new FileStream( Path.Combine(localFilePath, fileName), FileMode.Open, FileAccess.Read));
                response.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment");
                response.Content.Headers.ContentDisposition.FileName = "Descarga.pdf";

                return response;
            } // end if
            else
            {
                // TODO - enviar error
                return Request.CreateResponse( HttpStatusCode.BadRequest );
            } // end lse            
        } // end action method POST

        public Task<IHttpActionResult> Post()
        {
            var basePath = ConfigurationManager.AppSettings["basePath"].ToString();
            var textPath = ConfigurationManager.AppSettings["textPath"].ToString();


            if (Request.Content.IsMimeMultipartContent())
            {
                var streamProvider = new CustomMultipartFormDataStreamProvider(basePath);
                var file = Request.Content.ReadAsMultipartAsync(streamProvider).ContinueWith<IHttpActionResult>(t =>
                {

                    if (t.IsFaulted || t.IsCanceled)
                    {
                        throw new HttpResponseException(HttpStatusCode.InternalServerError);
                    }

                    var fileInfo = streamProvider.FileData.Select(i =>
                    {
                        var info = new FileInfo(i.LocalFileName);
                        string resultado = pdfToText.Convertir(basePath, info.Name);

                        var test = textPath + @"\" + info.Name + ".txt";

                        var archivo = new Archivo() { Ruta = info.Name };
                        var guid = Guid.NewGuid();

                        map.Add(guid, new Archivo() { Ruta = info.Name });

                        string asunto = new AnalizadorAsunto().ObtenerAsunto(resultado);

                        if (asunto.Length > 999)
                        {
                            asunto = asunto.Substring(0, 999);
                        }

                        File.WriteAllText(test, resultado);
                        return new FileDesc(archivo.Id.ToString(), basePath + @"\text" + @"\" + info.Name + ".txt", info.Length / 1024, asunto, guid);
                    });

                    return Ok(fileInfo);
                });

                return file;
            }
            else
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotAcceptable, "This request is not properly formatted"));
            }
        } // end action POST

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
                return base.GetLocalFileName(headers) + Path.GetExtension(name.Replace("\"", string.Empty));
            }
        } // end class CustomMultipartFromDataStreamProvider

        public class FileDesc
        {
            public string Name { get; set; }
            public string Path { get; set; }
            public long Size { get; set; }
            public string Result { get; set; }
            public Guid Guid { get; set; }

            public FileDesc(string n, string p, long s, string r, Guid g)
            {
                Name = n;
                Path = p;
                Size = s;
                Result = r;
                Guid = g;
            }
        } // public class FileDesc
    } // end class ArchivosController
}