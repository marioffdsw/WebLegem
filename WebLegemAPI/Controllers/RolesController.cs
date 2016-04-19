using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebLegemDAL.DAL;
using WebLegemDAL.Models;

namespace WebLegemAPI.Controllers
{
    [EnableCorsAttribute("*", "*", "*")]
    public class RolesController : ApiController
    {
        private IDataAccessObject<Rol> DAO;

        public RolesController(
                IDataAccessObject<Rol> dao
            ) : base()
        {
            this.DAO = dao;
        } // end constructor

        public IQueryable<Rol> Get()
        {
            var roles = DAO.GetAll();
            return roles;
        } // end method Get

    } // end class RolesController
} // end namespace WebLegemAPI.Controllers
