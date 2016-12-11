using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.OData;
using WebLegemAPI.Models;
using WebLegemDAL.Dao;
using WebLegemDAL.Models;

namespace WebLegemAPI.Controllers
{
    public class DocumentoController : ApiController
    {
        private Dictionary<Guid, Documento> map;
        private DocumentoDao dao;

        public DocumentoController(DocumentoDao dao, Dictionary<Guid, Documento> dictionary)
        {
            map = dictionary;
            this.dao = dao;
        } // end constructor


        [HttpGet]
        [EnableQuery()]
        [ResponseType(typeof(ContenidoDocumento))]
        public IHttpActionResult Get( string palabrasABuscar )
        {
            try
            {
                return Ok( dao.Search( palabrasABuscar ).AsQueryable() );
            } // end try
            catch (Exception ex)
            {
                return InternalServerError( ex );
            } // end catch
        } // end action Get

        
        [HttpPost]
        [Route("api/Documento/Identificador")]
        public IHttpActionResult BuscarPorCaracteristicas
            ( Documento documento )
        {            
            var result = dao.Exist(documento);
            var guid = Guid.NewGuid();

            if (result.IsFailure)
            {                                
                map.Add( guid, documento );

                return Ok(guid);
            } // end if
            else
            {                
                map.Add( guid, result.Value );
                
                return ResponseMessage(
                    Request.CreateResponse(
                        HttpStatusCode.Conflict,
                        new HttpErrorMessage<Guid>() {
                            StatusCode = HttpStatusCode.Conflict,
                            ErrorMessage = "Un documento con esa descripcion ya existe",
                            Value = guid
                        }));
            } // end else
        } // end method Post
    } // end class DocumentoController
} // end namespace WebLegemAPI.Controllers2