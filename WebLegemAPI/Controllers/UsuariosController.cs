using System.Linq;
using System.Web.Http;
using WebLegemDAL.Models;
using WebLegemDAL.Dao;
using System.Web.Http.Cors;
using System.Web.OData;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;

namespace WebLegemAPI.Controllers
{
    [EnableCors("*", "*", "*")]
    public class UsuariosController : ApiController
    {
        private UsuarioDao dao;

        public UsuariosController(UsuarioDao dao)
            : base()
        {
            this.dao = dao;
        }    // end constructor    

        [EnableQuery()]
        public IQueryable<Usuario> Get()
        {
            return dao.GetAll().AsQueryable<Usuario>();
        }  // end action method GET

        public IHttpActionResult Get(int id)
        {
            var result = dao.Get(id);
            if (result.IsSuccess)
            {
                return Ok(result.Value);
            }
            else
            {
                return ResponseMessage(Request.CreateErrorResponse(HttpStatusCode.Conflict, result.Error));
            }
        }


        public IHttpActionResult Post(Usuario usuario)
        {
            MD5 md5provider = new MD5CryptoServiceProvider();

            byte[] bytes = md5provider.ComputeHash(new UTF8Encoding().GetBytes(usuario.Contrasena));
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < bytes.Length; i++)
            {
                sb.Append(bytes[i].ToString("x2"));
            }
            usuario.Contrasena = sb.ToString();
            string secretKey = "3u12f1Bdt0";

            usuario.Contrasena += secretKey;

            var result = dao.Create(usuario);
            if (result.IsSuccess)
            {
                return Ok(result.Value);
            }
            else
            {
                return ResponseMessage(Request.CreateErrorResponse(
                      HttpStatusCode.Conflict,
                      result.Error
                ));
            }
        }

        public IHttpActionResult Put(Usuario usuario)
        {
            var result = dao.Update(usuario);
            if (result.IsSuccess)
            {
                return Ok(result.Value);
            }
            else
            {
                return ResponseMessage(Request.CreateErrorResponse(
                      HttpStatusCode.Conflict,
                      result.Error
                ));
            }
        }

    } // end class UsuariosController
} // end namepsace WebLegemAPI.Controllers
