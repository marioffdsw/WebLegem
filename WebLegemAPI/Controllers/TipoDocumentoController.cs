using Oracle.DataAccess.Client;
using System.Collections.Generic;
using System.Data;
using System.Web.Http;
using System.Web.Http.Cors;
using WebLegemDAL.Models;

namespace WebLegemAPI.Controllers
{
    [EnableCorsAttribute( "*", "*", "*" )]
    public class TipoDocumentoController : ApiController
    {
        public List<TipoDocumento> Get()
        {
            string constr = "user id=web_legem;password=web_legem;data source=ORCL";
            string sql = "select VALUE(td) from tipo_doc_obj_tab td";

            OracleConnection con = new OracleConnection() { ConnectionString = constr };

            con.Open();

            OracleCommand cmd = new OracleCommand(sql, con);
            cmd.CommandType = System.Data.CommandType.Text;

            OracleDataReader reader = cmd.ExecuteReader();

            var documentList = new List<TipoDocumento>();            

            while (reader.Read())
            {
                TipoDocumento td;
                if (reader.IsDBNull(0)) 
                    td = TipoDocumento.Null;
                else
                    td = (TipoDocumento)reader.GetValue(0);

                documentList.Add( td ); 
            }

            reader.Dispose();
            cmd.Dispose();
            con.Close();
            con.Dispose();

            return documentList;
        }
    }
}