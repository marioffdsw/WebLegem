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
    [EnableCors( "*", "*", "*" )]
    public class TipoAnotacionController : ApiController
    {
        private TipoAnotacionDao DAO;

        public TipoAnotacionController( TipoAnotacionDao DAO ) : base()
        {
            this.DAO = DAO;
        } // end constructor

        public IQueryable<TipoAnotacion> Get()
        {
            return DAO.GetAll().AsQueryable();
        } // end action method Get

        public IHttpActionResult Put(TipoAnotacion tipoAnot)
        {
            var tipoAnotacion = DAO.Update(tipoAnot);
            if (tipoAnotacion.IsSuccess)
            {
                return Ok(tipoAnotacion.Value);
            }
            else
            {
                return ResponseMessage(Request.CreateErrorResponse(
                      HttpStatusCode.Conflict,
                      tipoAnotacion.Error
                ));
            }
        } // end action method Put

        public IHttpActionResult Post(TipoAnotacion tipoAnota)
        {
            var tipoAnotacion = DAO.Create(tipoAnota);

            if (tipoAnotacion.IsSuccess)
            {
                return Ok(tipoAnotacion.Value);
            }
            else
            {
                return ResponseMessage(Request.CreateErrorResponse(
                    HttpStatusCode.Conflict,
                    tipoAnotacion.Error
                    ));
            }

        } // end action method Post

        public IHttpActionResult Delete(int id)
        {
            var tipoAnotacion = DAO.Delete(id);
            if (tipoAnotacion.IsSuccess)
            {
                return Ok();
            }
            else
            {
                return ResponseMessage(Request.CreateErrorResponse(
                    HttpStatusCode.Conflict,
                    tipoAnotacion.Error
                    ));
            }

        } // end action method Delete


    } // end class TipoAnotacionController
} // end namespace WebLegemAPI.Controllers
