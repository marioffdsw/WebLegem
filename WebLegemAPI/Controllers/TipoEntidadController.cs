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

        public IHttpActionResult Put(TipoEntidad tipoEnt)
        {
            var tipoEntidad = DAO.Update(tipoEnt);
            if (tipoEntidad.IsSuccess)
            {
                return Ok(tipoEntidad.Value);
            }
            else
            {
                return ResponseMessage(Request.CreateErrorResponse(
                      HttpStatusCode.Conflict,
                      tipoEntidad.Error
                ));
            }

        } // end PUT Action Method

        public IHttpActionResult Post(TipoEntidad tipoEnt)
        {

            var tipoEntidad = DAO.Create(tipoEnt);
            if (tipoEntidad.IsSuccess)
            {
                return Ok(tipoEntidad.Value);
            }
            else
            {
                return ResponseMessage(Request.CreateErrorResponse(
                    HttpStatusCode.Conflict,
                    tipoEntidad.Error
                    ));
            }

        }

        public IHttpActionResult Delete(int id)
        {
            var tipoEntidad = DAO.Delete(id);
            if (tipoEntidad.IsSuccess)
            {
                return Ok();
            }
            else
            {
                return ResponseMessage(Request.CreateErrorResponse(
                    HttpStatusCode.Conflict,
                    tipoEntidad.Error
                    ));
            }
        } // end DELETE Action Method
    }
}
