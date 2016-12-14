using System.Linq;
using System.Web.Http;
using WebLegemDAL.Models;
using WebLegemDAL.Dao;
using System.Web.Http.Cors;
using System.Web.OData;
using System.Net;
using System.Net.Http;

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
                return ResponseMessage(Request.CreateErrorResponse(
                      HttpStatusCode.Conflict,
                      result.Error
                ));
            }
        } // end action method GET


        public IHttpActionResult Post(Usuario usuario)
        {
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
        } // end action method POST

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
        } // end action method PUT

    } // end class UsuariosController
} // end namepsace WebLegemAPI.Controllers
