using Oracle.DataAccess.Client;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using WebLegemDAL.Models;
using WebLegemDAL.Dao;
using WebLegemDAL;
using WebLegemDAL.QueryObjects;

namespace WebLegemAPI.Controllers
{
    [EnableCorsAttribute( "*", "*", "*" )]
    public class TipoDocumentoController : ApiController
    {
        private IDataAccessObject<TipoDocumento> DAO;        

        public TipoDocumentoController(
                IDataAccessObject<TipoDocumento> dao            
            ) : base()
        {
            this.DAO = dao;            
        }

        public IQueryable<TipoDocumento> Get()
        {                        
            var tiposDocumento = DAO.GetAll();
            return tiposDocumento;
        } // end GET Action Method

        public TipoDocumento Get(int id)
        {
            return DAO.Get( id );
        }

        public TipoDocumento Put( TipoDocumento tipoDoc )
        {
            return DAO.Update( tipoDoc );
        } // end GET Action Method

        public TipoDocumento Post( TipoDocumento tipoDoc )
        {                        
            return DAO.Create(tipoDoc);
        }

        public IHttpActionResult Delete( int id )
        {
            DAO.Delete( id );

            return Ok();
        } // fin action method DELETE 
    }
}