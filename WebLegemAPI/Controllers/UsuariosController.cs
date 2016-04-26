using System.Linq;
using System.Web.Http;
using WebLegemDAL.Models;
using WebLegemDAL.DAL;
using System.Web.Http.Cors;
using WebLegemDAL;
using WebLegemDAL.QueryObjects;
using System.Web.OData;
using System.Web.Http.Description;
using System;

namespace WebLegemAPI.Controllers
{
    [EnableCors("*", "*", "*")]
    public class UsuariosController : ApiController
    {
        private IDataAccessObject<Usuario> DAO;

        public UsuariosController(IDataAccessObject<Usuario> dao)
            : base()
        {
            DAO = dao;
        }    // end constructor    

        [EnableQuery()]
        public IQueryable<Usuario> Get()
        {
            return DAO.GetAll();
        }  // end action method GET

        public Usuario Get( int id )
        {
            return DAO.Get( id );
        } // end action method GET

        
        public Usuario Post( Usuario usuario )
        {
            return DAO.Create( usuario );
        } // end action method POST

        public Usuario Put(Usuario usuario)
        {
            return DAO.Update( usuario );
        } // end action method PUT

    } // end class UsuariosController
} // end namepsace WebLegemAPI.Controllers
