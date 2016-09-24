using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebLegemDAL.Dao;
using WebLegemDAL.Models;

namespace WebLegemAPI.Controllers
{
    [EnableCorsAttribute("*", "*", "*")]
    public class EntidadController : ApiController
    {
        private IDataAccessObject<Entidad> DAO;

        public EntidadController( IDataAccessObject<Entidad> dao ) : base()
        {
            this.DAO = dao;
        } // fin constructor

        public IQueryable<Entidad> Get()
        {
            return DAO.GetAll();
        } // end GET Action Method

        public Entidad Put(Entidad entidad)
        {
            return DAO.Update( entidad);
        } // end PUT Action Method

        public Entidad Post(Entidad entidad)
        {
            var resultado = DAO.Create( entidad );          

            return entidad;
        }

        public IHttpActionResult Delete(int id)
        {
            DAO.Delete( id );

            return Ok();
        } // end DELETE Action Method
    }
}