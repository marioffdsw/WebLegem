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

namespace WebLegemAPI.Controllers
{
    [EnableCorsAttribute("*", "*", "*")]
    public class FilesController : ApiController
    {
        public Task<IHttpActionResult> Post()
        {
            //List<string> savedFilePath = new List<string>();
            //if (!Request.Content.IsMimeMultipartContent())           
            //    throw new HttpResponseException( HttpStatusCode.UnsupportedMediaType );            

            //string rootPath = @"C:/oraData/web_legem/";
            //var provider = new MultipartFileStreamProvider(rootPath);
            //return Request.Content.ReadAsMultipartAsync(provider);


            //var task = Request.Content.ReadAsMultipartAsync(provider).
            //    ContinueWith<HttpResponseMessage>(t =>
            //    {
            //        if (t.IsCanceled || t.IsFaulted)
            //        {
            //            Request.CreateErrorResponse(HttpStatusCode.InternalServerError, t.Exception);
            //        }
            //        foreach (MultipartFileData item in provider.FileData)
            //        {
            //            try
            //            {
            //                string name = item.Headers.ContentDisposition.FileName.Replace("\"", "");
            //                string newFileName = Guid.NewGuid() + Path.GetExtension(name);
            //                File.Move(item.LocalFileName, Path.Combine(rootPath, newFileName));

            //                Uri baseuri = new Uri(Request.RequestUri.AbsoluteUri.Replace(Request.RequestUri.PathAndQuery, string.Empty));
            //                string fileRelativePath = rootPath + newFileName;
            //                Uri fileFullPath = new Uri(baseuri, VirtualPathUtility.ToAbsolute(fileRelativePath));
            //                savedFilePath.Add(fileFullPath.ToString());
            //            }
            //            catch (Exception ex)
            //            {
            //                string message = ex.Message;
            //            }
            //        }

            //        return Request.CreateResponse(HttpStatusCode.Created, savedFilePath);
            //    });
            //return task;










            
            var rootUrl = "c:/oraData/web_legem";
            if (Request.Content.IsMimeMultipartContent())
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
                        return new FileDesc(info.Name, rootUrl + "/" + info.Name, info.Length / 1024);
                    });
                    return Ok(fileInfo);
                });

                return file;
            }
            else
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotAcceptable, "This request is not properly formatted"));
            }











        } // end class

        public class FileDesc
        {
            public string Name { get; set; }
            public string Path { get; set; }
            public long Size { get; set; }

            public FileDesc(string n, string p, long s)
            {
                Name = n;
                Path = p;
                Size = s;
            }
        }
    } // end namespace
}


public class CustomMultipartFormDataStreamProvider : MultipartFormDataStreamProvider
{
    public CustomMultipartFormDataStreamProvider(string path) : base(path)
    { }

    public override string GetLocalFileName(System.Net.Http.Headers.HttpContentHeaders headers)
    {
        var name = !string.IsNullOrWhiteSpace(headers.ContentDisposition.FileName) ? headers.ContentDisposition.FileName : "NoName";
        return name.Replace("\"",string.Empty); //this is here because Chrome submits files in quotation marks which get treated as part of the filename and get escaped
   }
}