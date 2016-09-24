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
        private IDataAccessObject<TipoAnotacion> DAO;

        public TipoAnotacionController( IDataAccessObject<TipoAnotacion> DAO ) : base()
        {
            this.DAO = DAO;
        } // end constructor

        public IQueryable<TipoAnotacion> Get()
        {
            return DAO.GetAll();
        } // end action method Get

        public TipoAnotacion Put(TipoAnotacion tipoAnotacion)
        {
            return DAO.Update(tipoAnotacion);
        } // end action method Put

        public TipoAnotacion Post(TipoAnotacion tipoAnotacion)
        {
            return DAO.Create( tipoAnotacion );
        } // end action method Post

        public IHttpActionResult Delete(int id)
        {
            DAO.Delete( id );

            return Ok();
        } // end action method Delete


    } // end class TipoAnotacionController
} // end namespace WebLegemAPI.Controllers
