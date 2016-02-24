using System.Linq;
using System.Web.Http;
using WebLegemDAL.Models;
using WebLegemDAL.DAL;
using System.Web.Http.Cors;
using WebLegemDAL;
using WebLegemDAL.QueryObjects;
using System.Collections.Generic;
using System.Web.OData;
using Oracle.DataAccess.Types;

namespace WebLegemAPI.Controllers
{
    [EnableCorsAttribute("*", "*", "*")]
    public class DocumentoController : ApiController
    {
        private IDataAccessObject<DocumentoConContenido> DAO;
        private IGestorDeConsultas<DocumentoConContenidoQueryObject, DocumentoConContenido> gestorConsultas;

        public DocumentoController( IDataAccessObject<DocumentoConContenido> dao,
            IGestorDeConsultas<DocumentoConContenidoQueryObject, DocumentoConContenido> gestor ) : base()
        {
            this.DAO = dao;
            this.gestorConsultas = gestor;
        } // fin contructor
        
        [EnableQuery()]       
        public IQueryable<DocumentoConContenido> Get()
        {            
            return DAO.GetAll();
        } // end GET Action Method     

        [EnableQuery()]
        public IQueryable<DocumentoConContenido> Get( string palabrasABuscar )
        {
            return gestorConsultas.Consultar( new DocumentoConContenidoQueryObject() { PalabrasABuscar = palabrasABuscar } );
        }

        public DocumentoConContenido Post( DocumentoConContenido doc )
        {
            return DAO.Create( doc );
        } // fin action method POST
    } // fin class DocumentoController
} // fin namespace
