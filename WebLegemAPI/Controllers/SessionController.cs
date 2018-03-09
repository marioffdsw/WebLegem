using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
using System.Web.Http;
using System.Web.Http.Cors;
using WebLegemDAL.Dao;

namespace WebLegemAPI.Controllers
{

    [EnableCorsAttribute("*", "*", "*")]
    public class SessionController : ApiController
    {
        private UsuarioDao dao;

        public SessionController(UsuarioDao dao)
            : base()
        {
            this.dao = dao;
        } // end constructor

        [HttpGet]
        public IHttpActionResult IniciarSession(string usuario, string contrasena)
        {
            try
            {
                MD5 md5provider = new MD5CryptoServiceProvider();

                byte[] bytes = md5provider.ComputeHash(new UTF8Encoding().GetBytes(contrasena));
                StringBuilder sb = new StringBuilder();
                for (int i = 0; i < bytes.Length; i++)
                {
                    sb.Append(bytes[i].ToString("x2"));
                }
                contrasena = sb.ToString();
                contrasena += "3u12f1Bdt0";

                return Ok(dao.GetAll().Where(x => x.NombreUsuario == usuario && x.Contrasena == contrasena).First());
            }
            catch (Exception)
            {
                return ResponseMessage(Request.CreateErrorResponse(HttpStatusCode.Conflict,
                    "Usuario o contraseña incorrectos, intenta otra vez."));
            }

        }
    }
}