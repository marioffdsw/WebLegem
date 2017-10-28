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
    public class RecursoController : ApiController
    {
        RecursoDao dao;

        public RecursoController(RecursoDao dao) : base ()
        {
            this.dao = dao;
        } // end constructor

        public IQueryable<Recurso> Get()
        {
            return dao.GetAll().AsQueryable<Recurso>();
        } // end action GET
    } // end class RecursoController
} // end namespace WebLegemAPI.Controllers