using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using WebLegemAPI.Models.FileHandlers;
using static WebLegemCommon.Constants;

namespace WebLegemAPI.Controllers
{
    [EnableCors( "*", "*", "*" )]
    public class FilesController : ApiController
    {      
        public async Task<IHttpActionResult> Post()
        {
            if (!Request.Content.IsMimeMultipartContent())
                throw new HttpResponseException( 
                    Request.CreateErrorResponse( HttpStatusCode.NotAcceptable,
                    "this requets is not properly formatted" ) );

            var fileHandler = new FileHandlerFactory().getHandler( Request );

            var fileName = await fileHandler.SaveFile( Request );

            return Ok( new {
                Nombre = fileName
            });

        } // end action method POST

        public IHttpActionResult Get()
        {
            return Ok();
        } // end action method Get
    } // end class FilesController
} // end namespace WebLegemAPI.Controllers