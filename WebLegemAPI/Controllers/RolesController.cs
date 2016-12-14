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
    public class RolController : ApiController
    {
        private RolDao dao;

        public RolController(
                RolDao dao
            ) : base()
        {
            this.dao = dao;
        } // end constructor

        public IQueryable<Rol> Get()
        {
            var roles = dao.GetAll();
            return roles.AsQueryable();
        } // end method Get

        public IHttpActionResult Post( Rol rol )
        {
            var result = dao.Create( rol );

            if (result.IsSuccess)
                return Ok(result.Value);
            
            return ResponseMessage(Request.CreateErrorResponse(
                      HttpStatusCode.Conflict,
                      result.Error
                ));
        } // end action POST

        public IHttpActionResult Put(Rol rol)
        {
            var result = dao.Update( rol );

            if (result.IsSuccess)
                return Ok(result.Value);

            return ResponseMessage(Request.CreateErrorResponse(
                      HttpStatusCode.Conflict,
                      result.Error
                ));
        } // end action PUT       

        public IHttpActionResult Delete( int id )
        {
            var result = dao.Delete(id);
            if (result.IsSuccess)            
                return Ok();            
            else            
                return ResponseMessage(Request.CreateErrorResponse(
                        HttpStatusCode.Conflict,
                        result.Error
                    ));            
        } // end action DELETE
    } // end class RolesController
} // end namespace WebLegemAPI.Controllers
