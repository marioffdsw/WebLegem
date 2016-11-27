using Oracle.DataAccess.Client;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using WebLegemDAL.Models;
using WebLegemDAL.DAO2;

namespace WebLegemAPI.Controllers
{
    [EnableCorsAttribute( "*", "*", "*" )]
    public class TipoDocumentoController : ApiController
    {
        private TipoDocumentoDao DAO;        

        public TipoDocumentoController(
                TipoDocumentoDao dao            
            ) : base()
        {
            this.DAO = dao;            
        }

        public IQueryable<TipoDocumento> Get()
        {                        
            var tiposDocumento = DAO.GetAll();
            return tiposDocumento.AsQueryable();
        } // end GET Action Method

        public TipoDocumento Get(int id)
        {
            return DAO.Get( id ).Value;
        }

        public TipoDocumento Put( TipoDocumento tipoDoc )
        {
            return DAO.Update( tipoDoc ).Value;
        } // end GET Action Method

        public TipoDocumento Post( TipoDocumento tipoDoc )
        {                        
            return DAO.Create(tipoDoc).Value;
        }

        public IHttpActionResult Delete( int id )
        {
            DAO.Delete( id );

            return Ok();
        } // fin action method DELETE 
    }
}