using Oracle.DataAccess.Client;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using WebLegemDAL.Models;
using WebLegemDAL.DAL;

namespace WebLegemAPI.Controllers
{
    [EnableCorsAttribute( "*", "*", "*" )]
    public class TipoDocumentoController : ApiController
    {
        public IQueryable<TipoDocumento> Get()
        {
            string constr = "user id=web_legem;password=web_legem;data source=ORCL";

            var tdDal = new TipoDocumentoDAL();
            tdDal.OpenConnection( constr );

            var tiposDocumento = tdDal.GetAllTipoDocumento();

            tdDal.CloseConnection();

            return tiposDocumento.AsQueryable<TipoDocumento>();
        } // end GET Action Method

        public TipoDocumento Put( TipoDocumento tipoDoc )
        {
            string constr = "user id=web_legem;password=web_legem;data source=ORCL";

            var tdDal = new TipoDocumentoDAL();
            tdDal.OpenConnection(constr);

            tdDal.UpdateTipoDocumento( ref tipoDoc );

            tdDal.CloseConnection();

            return tipoDoc;
        } // end GET Action Method

        public TipoDocumento Post( TipoDocumento tipoDoc )
        {
            string constr = "user id=web_legem;password=web_legem;data source=ORCL";

            var tdDal = new TipoDocumentoDAL();
            tdDal.OpenConnection(constr);

            tdDal.CreateTipoDocumento( ref tipoDoc );

            tdDal.CloseConnection();

            return tipoDoc;
        }

        public IHttpActionResult Delete( int id )
        {
            string constr = "user id=web_legem;password=web_legem;data source=ORCL";

            var tdDal = new TipoDocumentoDAL();
            tdDal.OpenConnection(constr);

            tdDal.DeleteTipoDocumento( id );

            tdDal.CloseConnection();

            return Ok();
        } // end DELETE Action Method
    }
}