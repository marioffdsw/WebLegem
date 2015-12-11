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
    }
}
