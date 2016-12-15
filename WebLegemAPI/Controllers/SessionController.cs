using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebLegemDAL.Dao;

namespace WebLegemAPI.Controllers
{
    public class SessionController : ApiController
    {
        private UsuarioDao dao;

        public SessionController( UsuarioDao dao ) : base()
        {
            this.dao = dao;
        } // end constructor

        [HttpGet]        
        public IHttpActionResult IniciarSession( string usuario, string contrasena )
        {
            try
            {
                return Ok(dao.GetAll().Where(x =>
                x.NombreUsuario == usuario && x.Contrasena == contrasena).First().Rol.PermisosAsignados);
            } // end try
            catch (Exception)
            {
                return ResponseMessage(Request.CreateErrorResponse(
                      HttpStatusCode.Conflict,
                      "Usuario o contraseña incorrectos, intenta otra vez."
                ));
            } // end catch
            
        } // end method IniciarSession
    } // end class SessionController
} // end namespace WebLegemAPI.Controllers