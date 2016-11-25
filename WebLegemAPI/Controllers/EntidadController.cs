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
    public class EntidadController : ApiController
    {
        private EntidadDao DAO;

        public EntidadController( EntidadDao dao ) : base()
        {
            this.DAO = dao;
        } // fin constructor

        public IQueryable<Entidad> Get()
        {
            return DAO.GetAll().AsQueryable();
        } // end GET Action Method

        public Entidad Put(Entidad entidad)
        {
            return DAO.Update( entidad).Value;
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