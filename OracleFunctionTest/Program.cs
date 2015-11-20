using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Oracle.ManagedDataAccess.Client;
using Oracle.ManagedDataAccess.Types;
using System.Data;

namespace OracleFunctionTest
{
    class Program
    {
        static void Main(string[] args)
        {
            string connectionString = "User Id=web_legem;Password=web_legem;data source=ORCL";
            OracleConnection connection = new OracleConnection { ConnectionString = connectionString };
            connection.Open();

            OracleCommand cmd = new OracleCommand();
            cmd.CommandText = "duplicar";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Connection = connection;

            OracleParameter retval = new OracleParameter("myretval", OracleDbType.Int32, 50);
            retval.Direction = ParameterDirection.ReturnValue;
            cmd.Parameters.Add(retval);

            cmd.Parameters.Add(new OracleParameter("number", OracleDbType.Int32)).Value = 55;
            cmd.ExecuteNonQuery();
            Console.WriteLine("Return value is {0}", retval.Value);
            connection.Close();
            connection.Dispose();
        }
    }
}
