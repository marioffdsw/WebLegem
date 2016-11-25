using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebLegemDAL.DAO2;
using WebLegemDAL.Models;

namespace WebLegemAPI.Controllers
{
    [EnableCorsAttribute("*", "*", "*")]
    public class TipoEntidadController : ApiController
    {
        private TipoEntidadDao DAO;

        public TipoEntidadController( TipoEntidadDao dao ) : base()
        {
            this.DAO = dao;
        }

        public IQueryable<TipoEntidad> Get()
        {            
            return DAO.GetAll().AsQueryable();
        } // end GET Action Method

        public TipoEntidad Put(TipoEntidad tipoEntidad)
        {            
            return DAO.Update( tipoEntidad ).Value;
        } // end PUT Action Method

        public TipoEntidad Post(TipoEntidad tipoEntidad)
        {
            return DAO.Create( tipoEntidad ).Value;
        }

        public IHttpActionResult Delete(int id)
        {
            DAO.Delete( id );

            return Ok();
        } // end DELETE Action Method
    }
}
