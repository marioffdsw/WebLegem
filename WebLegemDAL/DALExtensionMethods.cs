using Oracle.DataAccess.Client;
using Oracle.DataAccess.Types;
using System.Collections.Generic;
using System.Data;

namespace WebLegemDAL.Dao
{
    public static class DALExtensionMethods
    {
        public static IEnumerable<TRecord> AsEnumerable<TRecord>(
            this IDataReader reader, OracleConnection con)
        {
            if (reader == null)
                throw new NoNullAllowedException( "reader" );
            
            con.Open();
            using (con) {
                using (reader) {
                    while (reader.Read())
                    {
                        yield return (TRecord)reader.GetValue(0);
                    }
                }
            }            
            
        }        
    }
}
