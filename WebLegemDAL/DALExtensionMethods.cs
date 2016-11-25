using Oracle.DataAccess.Client;
using Oracle.DataAccess.Types;
using System.Collections.Generic;
using System.Data;

namespace WebLegemDAL.Dao
{
    public static class DALExtensionMethods
    {
        public static IEnumerable<TRecord> AsEnumerable<TRecord>(
            this IDataReader reader)
        {
            if (reader == null)
                throw new NoNullAllowedException( "reader" );

            var list = new List<TRecord>();

            while (reader.Read())
            {
                list.Add((TRecord)reader.GetValue(0));
            }

            return list;
        }        
    }
}
