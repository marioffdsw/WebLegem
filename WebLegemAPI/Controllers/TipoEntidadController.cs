using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebLegemDAL.DAL;
using WebLegemDAL.Models;

namespace WebLegemAPI.Controllers
{
    [EnableCorsAttribute("*", "*", "*")]
    public class TipoEntidadController : ApiController
    {
        public IQueryable<TipoEntidad> Get()
        {
            string constr = "user id=web_legem;password=web_legem;data source=ORCL";

            var tdDal = new TipoEntidadDAL();
            tdDal.OpenConnection(constr);

            var tiposEntidad = tdDal.GetAllTipoEntidad();

            tdDal.CloseConnection();

            return tiposEntidad.AsQueryable<TipoEntidad>();
        } // end GET Action Method

        public TipoEntidad Put(TipoEntidad tipoEntidad)
        {
            string constr = "user id=web_legem;password=web_legem;data source=ORCL";

            var teDal = new TipoEntidadDAL();
            teDal.OpenConnection(constr);

            teDal.UpdateTipoEntidad(ref tipoEntidad);

            teDal.CloseConnection();

            return tipoEntidad;
        } // end PUT Action Method

        public TipoEntidad Post(TipoEntidad tipoEntidad)
        {
            string constr = "user id=web_legem;password=web_legem;data source=ORCL";

            var teDal = new TipoEntidadDAL();
            teDal.OpenConnection(constr);

            teDal.CreateTipoEntidad(ref tipoEntidad);

            teDal.CloseConnection();

            return tipoEntidad;
        }

        public IHttpActionResult Delete(int id)
        {
            string constr = "user id=web_legem;password=web_legem;data source=ORCL";

            var teDal = new TipoEntidadDAL();
            teDal.OpenConnection(constr);

            teDal.DeleteTipoEntidad(id);

            teDal.CloseConnection();

            return Ok();
        } // end DELETE Action Method
    }
}
