﻿using Oracle.DataAccess.Client;
using Oracle.DataAccess.Types;
using System.Collections.Generic;
using System.Data;

namespace FilesDal
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
