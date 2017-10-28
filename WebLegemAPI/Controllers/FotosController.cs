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

namespace WebLegemAPI.Controllers
{
    
    public class FotosController : ApiController
    {
        public async Task<IHttpActionResult> Post()
        {
            if (!Request.Content.IsMimeMultipartContent())
                throw new HttpResponseException(
                    Request.CreateErrorResponse(
                        HttpStatusCode.NotAcceptable,
                        "this request is not properly formatted") );

            var picturesPath = ConfigurationManager.AppSettings["picturesDir"].ToString();
            var streamProvider = new MultipartFormDataStreamProvider( picturesPath );
            await Request.Content.ReadAsMultipartAsync(streamProvider);
                        
            return Ok( new { Nombre = streamProvider.FileData.Select( i => i.LocalFileName ) } );
        } // end action method POST

        [HttpGet]        
        public HttpResponseMessage Get(string photoName)
        {
            if (photoName == null || photoName.Equals(""))
                return Request.CreateResponse(HttpStatusCode.BadRequest);            

            try
            {
                var fileName = photoName;
                var picturesDir = ConfigurationManager.AppSettings["picturesDir"].ToString();

                HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
                response.Content = new StreamContent(new FileStream(Path.Combine(picturesDir, fileName), FileMode.Open, FileAccess.Read));
                response.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment");
                response.Content.Headers.ContentDisposition.FileName = "photo.png";

                return response;
            } // end if
            catch( Exception ex )
            {                
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            } // end lse            
        } // end action method POST
    }
}
