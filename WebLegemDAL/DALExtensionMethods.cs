using System.Collections.Generic;
using System.Data;

namespace WebLegemDAL.DAL
{
    public static class DALExtensionMethods
    {
        public static List<TRecord> ToList<TRecord>(
            this IDataReader reader)
        {
            var list = new List<TRecord>();

            while (reader.Read())
            {
                list.Add((TRecord)reader.GetValue(0));
            }

            return list;
        }
    }
}
