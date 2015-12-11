﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebLegemDAL.Models;
using WebLegemDAL.DAL;
using System.Web.Http.Cors;

namespace WebLegemAPI.Controllers
{
    [EnableCorsAttribute("*", "*", "*")]
    public class DocumentoController : ApiController
    {
        public IQueryable<Documento> Get()
        {
            string constr = "user id=web_legem;password=web_legem;data source=ORCL";

            var tdDal = new DocumentoDAL();
            tdDal.OpenConnection(constr);

            var Documentos = tdDal.GetAllDocumentos();

            tdDal.CloseConnection();

            return Documentos.AsQueryable<Documento>();
        } // end GET Action Method     

        public Documento Post( Documento doc )
        {
            string constr = "user id=web_legem;password=web_legem;data source=ORCL";

            var dDal = new DocumentoDAL();
            dDal.OpenConnection(constr);

            dDal.CreateDocumento(ref doc);

            dDal.CloseConnection();

            return doc;
        }
    } // end class DocumentoController
} // end namespace
