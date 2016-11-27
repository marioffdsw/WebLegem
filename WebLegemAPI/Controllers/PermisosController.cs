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
    public class PermisosController : ApiController
    {
        private IDataAccessObject<Permiso> DAO;

        public PermisosController(
                IDataAccessObject<Permiso> dao
            ) : base()
        {
            this.DAO = dao;
        } // end constructor

        public IQueryable<Permiso> Get()
        {
            var permiso = DAO.GetAll();
            return permiso;
        } // end GET Action Method    
    } // end class PermisosController
} // end namespace WebLegemAPI.Controllers