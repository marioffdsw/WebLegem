using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebLegemAPI.Controllers
{
    [EnableCors("*", "*", "*")]
    public class FotosController : ApiController
    {
        public async Task<IHttpActionResult> Post()
        {
            if (!Request.Content.IsMimeMultipartContent())
                throw new HttpResponseException(
                    Request.CreateErrorResponse(
                        HttpStatusCode.NotAcceptable,
                        "this request is not properly formatted") );

            var streamProvider = new MultipartFormDataStreamProvider("C:/pruebas/img/");
            await Request.Content.ReadAsMultipartAsync(streamProvider);
                        
            return Ok( new { Nombre = streamProvider.FileData.Select( i => i.LocalFileName ) } );
        } // end action method POST
    }
}
