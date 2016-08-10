using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.OData;
using WebLegemDAL.DAL;
using WebLegemDAL.Models;

namespace WebLegemAPI.Controllers
{
    public class AnotacionController : ApiController
    {
        public IDataAccessObject<Anotacion> AnotacionDao { get; set; }

        public AnotacionController(IDataAccessObject<Anotacion> anotacionDao)
        {
            this.AnotacionDao = anotacionDao;
        } // end constructor

        public List<Anotacion> Get()
        {
            return null;
        } // end action method GET


        [ResponseType(typeof(Anotacion))]
        public IHttpActionResult Post(Anotacion anotacion)
        {
            try
            {
                return Ok( AnotacionDao.Create( anotacion ) );
            } // end try
            catch (Exception exception)
            {
                return InternalServerError( exception );
            } // end catch

        } // end actin method Post
                
        [ResponseType( typeof( Anotacion ) )]
        public IHttpActionResult Put( Anotacion anotacion )
        {
            try
            {                
                return Ok( AnotacionDao.Update( anotacion ) );
            }
            catch ( Exception exception )
            {
                return InternalServerError( exception );
            } // end catch
            
        } // end action method Put
        
        public IHttpActionResult Delete( int id )
        {
            try
            {
                AnotacionDao.Delete(id);

                return Ok();
            } // end try
            catch (Exception exception)
            {
                return InternalServerError( exception );
            } // end catch            
        } // end action method delete

    } // end class AnotacionController
} // end namespace WebLegemAPI.Controllers