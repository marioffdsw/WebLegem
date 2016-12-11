using Oracle.DataAccess.Client;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebLegemDAL.Models;
using WebLegemDAL.DAO;
using CSharpFunctionalExtensions;
using System.Net;

namespace WebLegemAPI.Controllers
{
    [EnableCorsAttribute("*", "*", "*")]
    public class TipoDocumentoController : ApiController
    {
        private TipoDocumentoDao DAO;

        public TipoDocumentoController(
                TipoDocumentoDao dao
            )
            : base()
        {
            this.DAO = dao;
        }

        public IQueryable<TipoDocumento> Get()
        {
            var tiposDocumento = DAO.GetAll();
            return tiposDocumento.AsQueryable();
        } // end GET Action Method

        public TipoDocumento Get(int id)
        {
            return DAO.Get(id).Value;
        }

        public IHttpActionResult Put(TipoDocumento tipoDoc)
        {
            var tipoDocumento = DAO.Update(tipoDoc);
            if (tipoDocumento.IsSuccess)
            {
                return Ok(tipoDocumento.Value);
            }
            else
            {
                return ResponseMessage(Request.CreateErrorResponse(
                      HttpStatusCode.Conflict,
                      tipoDocumento.Error
                ));
            }
        } // end GET Action Method

        public IHttpActionResult Post(TipoDocumento tipoDoc)
        {
            var tipoDocumento = DAO.Create(tipoDoc);

            if (tipoDocumento.IsSuccess)
            {
                return Ok(tipoDocumento.Value);
            }
            else
            {
                return ResponseMessage(Request.CreateErrorResponse(
                    HttpStatusCode.Conflict,
                    tipoDocumento.Error
                    ));
            }
        }

        public IHttpActionResult Delete(int id)
        {
            var tipoDocumento = DAO.Delete(id);
            if (tipoDocumento.IsSuccess)
            {
                return Ok();
            }
            else
            {
                return ResponseMessage(Request.CreateErrorResponse(
                    HttpStatusCode.Conflict,
                    tipoDocumento.Error
                    ));
            }

        } // fin action method DELETE 
    }
}