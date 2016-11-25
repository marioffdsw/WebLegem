using Oracle.DataAccess.Client;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebLegemDAL.DAO2
{
    public class DB
    {
        public static string ConnectionString
        {
            get
            {
                return ConfigurationManager.ConnectionStrings["WLConnection"].ToString();
            }
        } // end static property ConnectionString

        public static OracleConnection GetOracleConnection()
        {
            OracleConnection conn = new OracleConnection( ConnectionString );
            conn.Open();

            return conn;
        } // end static method GetOracleConnection

        public static OracleCommand GetFuncionCommand(OracleConnection conn, string functionName)
        {
            OracleCommand cmd = conn.CreateCommand();
            cmd.CommandText = functionName;
            cmd.BindByName = true;
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Connection = conn;

            return cmd;
        }

        public static OracleParameter AddRefCursorResult( OracleCommand cmd )
        {
            if (cmd.Parameters.Count > 0)
                throw new InvalidOperationException( "Count ya tiene parametros, el resultado debe ser el primer parametro en adicionarse" );
           
            var result = new OracleParameter();
            result.OracleDbType = OracleDbType.RefCursor;
            result.Direction = ParameterDirection.ReturnValue;
            cmd.Parameters.Add( result );

            return result;
        } // end method AddRefCursorResultParameter

        public static OracleParameter AddObjectResult(OracleCommand cmd, string udtTypeName )
        {
            if (cmd.Parameters.Count > 0)
                throw new InvalidOperationException("Count ya tiene parametros, el resultado debe ser el primer parametro en adicionarse");           

            // get result from oracle function
            var result = new OracleParameter();
            result.OracleDbType = OracleDbType.Object;
            result.UdtTypeName = udtTypeName;
            result.Direction = ParameterDirection.ReturnValue;
            result.OracleDbTypeEx = OracleDbType.Object;
            cmd.Parameters.Add(result);

            return result;
        } // end method AddObjectResultParameter

        public static void AddIdParameter(OracleCommand cmd, int id)
        {
            var prm = new OracleParameter();
            prm.OracleDbType = OracleDbType.Int32;
            prm.Direction = ParameterDirection.Input;
            prm.ParameterName = "id_";
            prm.Value = id;
            cmd.Parameters.Add( prm );
        } // end method AddIdParameter

        public static void AddObjectParameter(OracleCommand cmd,
            string parameterName, 
            string udtTypeName, 
            Object value)
        {
            OracleParameter prm = new OracleParameter();
            prm.OracleDbType = OracleDbType.Object;
            prm.UdtTypeName = udtTypeName;
            prm.Direction = ParameterDirection.Input;            
            prm.ParameterName = parameterName;
            prm.Value = value;
            cmd.Parameters.Add(prm);
        } // end method AddObjectParameter
                        
    } // end class DB
} // end namespace WebLegemDAL.DAO2
