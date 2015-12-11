using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebLegemDAL.DAL;
using WebLegemDAL.Models;

namespace WebLegemAPI.Controllers
{
    public class EntidadController : ApiController
    {
        public IQueryable<Entidad> Get()
        {
            string constr = "user id=web_legem;password=web_legem;data source=ORCL";

            var tdDal = new EntidadDAL();
            tdDal.OpenConnection(constr);

            var entidades = tdDal.GetAllEntidad();

            tdDal.CloseConnection();

            return entidades.AsQueryable<Entidad>();
        } // end GET Action Method
    }
}
