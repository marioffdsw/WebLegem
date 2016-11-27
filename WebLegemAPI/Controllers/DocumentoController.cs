using System.Linq;
using System.Web.Http;
using WebLegemDAL.Models;
using WebLegemDAL.Dao;
using System.Web.Http.Cors;
using WebLegemDAL;
using WebLegemDAL.QueryObjects;
using System.Web.OData;
using System.Web.Http.Description;
using System;

namespace WebLegemAPI.Controllers
{
    [EnableCorsAttribute("*", "*", "*")]
    public class DocumentoController : ApiController
    {
        private IDataAccessObject<DocumentoConContenido> documentoConContenidoDao;
        private IDataAccessObject<Documento> documentosDao;
        private IGestorDeConsultas<DocumentoConContenidoQueryObject, DocumentoConContenido> gestorConsultas;

        public DocumentoController( IDataAccessObject<DocumentoConContenido> dao,
            IGestorDeConsultas<DocumentoConContenidoQueryObject, DocumentoConContenido> gestor,
            IDataAccessObject<Documento> documentosDao) : base()
        {
            this.documentosDao = documentosDao;
            this.documentoConContenidoDao = dao;
            this.gestorConsultas = gestor;
        } // fin contructor
        
        [EnableQuery()]       
        public IQueryable<DocumentoConContenido> Get()
        {            
            return documentoConContenidoDao.GetAll();
        } // end GET Action Method     

        [EnableQuery()]
        [ResponseType(typeof ( DocumentoConContenido ) )]
        public IHttpActionResult Get( string palabrasABuscar )
        {
            try
            {
                return Ok(gestorConsultas.Consultar(new DocumentoConContenidoQueryObject() { PalabrasABuscar = palabrasABuscar }));
            }
            catch ( Exception exception )
            {
                return InternalServerError( exception );
            }
        }

        public DocumentoConContenido Post( DocumentoConContenido doc )
        {
            return documentoConContenidoDao.Create( doc );
        } // fin action method POST

        [HttpGet]
        [EnableQuery]
        [ResponseType( typeof(Documento) )]
        [Route("api/Identificadores")]
        public IHttpActionResult BuscarEnTodosLosIdentificadores()
        {
            try
            {
                return Ok( documentosDao.GetAll() );
            }
            catch (Exception exception)
            {

                return InternalServerError( exception );
            }            
        } // end action method Get
    } // fin class DocumentoController
} // fin namespace
