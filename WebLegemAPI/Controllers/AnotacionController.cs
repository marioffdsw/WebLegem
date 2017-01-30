using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.OData;
using WebLegemAPI.Models;
using WebLegemDAL.Dao;
using WebLegemDAL.Models;

namespace WebLegemAPI.Controllers
{
    public class AnotacionController : ApiController
    {
        AnotacionDao anotacionDao;        

        public AnotacionController( AnotacionDao anotacionDao ) 
            :base()
        {
            this.anotacionDao = anotacionDao;
        } // end constructor        

        public IHttpActionResult Post( Anotacion anotacion )
        {
            var result = anotacionDao.Create( anotacion );
            if (result.IsSuccess)
                return Ok(result.Value);
            else
                return ResponseMessage( 
                    Request.CreateErrorResponse(
                        HttpStatusCode.Conflict, 
                        result.Error) );
        } // end action method Post

        public IHttpActionResult Put(Anotacion anotacion)
        {
            var result = anotacionDao.ActualizarAnotacion( anotacion );
            if (result.IsSuccess)
                return Ok(result.Value);
            else
                return ResponseMessage( 
                    Request.CreateErrorResponse( 
                        HttpStatusCode.Conflict, 
                        result.Error ) );
        } // end action method Put

        public IHttpActionResult Delete(int id)
        {
            var result = anotacionDao.Delete(id);
            if (result.IsSuccess)
                return Ok();
            else
                return ResponseMessage( 
                    Request.CreateErrorResponse( 
                        HttpStatusCode.Conflict, 
                        result.Error ) );
        } // end action method Delete

        public IQueryable<Anotacion> Get(int docId)
        {
            var result = anotacionDao.TraerAnotacionesDeDocumento( docId );
            return result.AsQueryable();
        } // end action method Get
                
    } // end class AnotacionController
} // end namespace WebLegemAPI.Controllers