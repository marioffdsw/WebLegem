
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebLegemAPI.Models;
using WebLegemDAL.Dao;
using WebLegemDAL.Models;

namespace WebLegemAPI.Controllers
{
    public class ContenidoController : ApiController
    {
        Dictionary<Guid, Archivo> archivoMap;
        Dictionary<Guid, Documento> documentoMap;
        ContenidoDao dao;
        TipoDocumentoDao tdDao;
        TipoAnotacionDao taDao;

        public ContenidoController(
            Dictionary<Guid, Archivo> archivoMap, 
            Dictionary<Guid, Documento> documentoMap,
            ContenidoDao dao,
            TipoDocumentoDao tdDao,
            TipoAnotacionDao taDao)
        {
            this.archivoMap = archivoMap;
            this.documentoMap = documentoMap;
            this.dao = dao;
            this.taDao = taDao;
            this.tdDao = tdDao;
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

        [HttpGet]
        [Route("api/Contenido/Anotaciones")]
        public IHttpActionResult BuscarPosiblesAnotaciones(int id)
        {
            var result = dao.Exist(id);
            if (result.IsSuccess)
            {
                var contenido = result.Value;
                var textPath = ConfigurationManager.AppSettings["textPath"].ToString();
                var filePath = Path.Combine(textPath, contenido.Archivo.Nombre + ".txt");
                var text = File.ReadAllText(filePath);
                var posiblesAnotaciones = new AnalizadorAnotaciones(tdDao, taDao).AnalizarPorPosiblesAnotaciones(text);
                return Ok(posiblesAnotaciones);
            }
            else
            {
                return Ok(new List<Anotacion>());
            }
        } // end action method BuscarTiposAnotaciones
    } // end class ContenidoController
} // end namespace WebLegemAPI.Controllers