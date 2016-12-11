using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebLegemDAL.DAO;
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

        public IHttpActionResult Put(Entidad ent)
        {
            var entidad = DAO.Update(ent);
            if (entidad.IsSuccess)
            {
                return Ok(entidad.Value);
            }
            else
            {
                return ResponseMessage(Request.CreateErrorResponse(
                      HttpStatusCode.Conflict,
                      entidad.Error
                ));
            }
        } // end PUT Action Method

        public IHttpActionResult Post(Entidad entidad)
        {
            var resultado = DAO.Create( entidad );


            if (resultado.IsSuccess)
            {
                return Ok(resultado.Value);
            }
            else
            {
                return ResponseMessage(Request.CreateErrorResponse(
                    HttpStatusCode.Conflict,
                    resultado.Error
                    ));
            }

        }

        public IHttpActionResult Delete(int id)
        {
            var entidadController = DAO.Delete(id);
            if (entidadController.IsSuccess)
            {
                return Ok();
            }
            else
            {
                return ResponseMessage(Request.CreateErrorResponse(
                    HttpStatusCode.Conflict,
                    entidadController.Error
                    ));
            }
        } // end DELETE Action Method
    }
}