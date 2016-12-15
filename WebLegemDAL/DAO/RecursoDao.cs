using Oracle.DataAccess.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Models;

namespace WebLegemDAL.Dao
{
    public class RecursoDao
    {
        public string UdtTypeName
        {
            get { return "WEB_LEGEM.RECURSO_TYP"; }
        }

        public IEnumerable<Recurso> GetAll()
        {
            using (var conn = DB.GetOracleConnection())
            using (var cmd = DB.GetFuncionCommand( conn, "WEB_LEGEM.GET_ALL_RE" ))
            {
                var result = DB.AddRefCursorResult( cmd );

                cmd.ExecuteNonQuery();
                var reader = ((OracleRefCursor)result.Value).GetDataReader();
                return reader.AsEnumerable<Recurso>();
            } // end using cmd
        } // end method GetAll
    } // end class RecursoDao
} // end namespace WebLegemDAL.Dao
