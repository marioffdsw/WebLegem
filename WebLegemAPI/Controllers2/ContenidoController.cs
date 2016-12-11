using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebLegemAPI.Models;
using WebLegemDAL.DAO2;
using WebLegemDAL.Models;

namespace WebLegemAPI.Controllers
{
    public class ContenidoController : ApiController
    {
        Dictionary<Guid, Archivo> archivoMap;
        Dictionary<Guid, Documento> documentoMap;
        ContenidoDao dao;

        public ContenidoController(
            Dictionary<Guid, Archivo> archivoMap, 
            Dictionary<Guid, Documento> documentoMap,
            ContenidoDao dao )
        {
            this.archivoMap = archivoMap;
            this.documentoMap = documentoMap;
            this.dao = dao;
        } // end constructor

        [HttpPost]
        [Route( "api/Contenido" )]
        public IHttpActionResult Post( ContenidoViewModel cd )
        {
            var result = dao.Create(
                cd.ToContenidoDocumento((Guid x) => this.archivoMap[x] )
            );

            if (result.IsSuccess)
            {
                return Ok(result.Value);
            }
            else
            {
                return ResponseMessage( Request.CreateErrorResponse(
                        HttpStatusCode.Conflict,
                        result.Error
                    ) );
            }
        } // end method Post
    } // end class ContenidoController
} // end namespace WebLegemAPI.Controllers