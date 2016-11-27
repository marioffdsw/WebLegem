using CSharpFunctionalExtensions;
using Oracle.DataAccess.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Models;

namespace WebLegemDAL.DAO2
{
    public class ArchivoDao
    {
        private string UdtTypeName
        {
            get { return "WEB_LEGEM.ARCHIVO_TYP"; }
        }

        public Maybe<Archivo> Get(int id)
        {
            using (OracleConnection conn = DB.GetOracleConnection())
            using (OracleCommand cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.GET_AR"))
            {
                var result = DB.AddObjectResult( cmd, UdtTypeName );
                DB.AddIdParameter( cmd, id );

                cmd.ExecuteNonQuery();
                return (Archivo) result.Value;
            } // end using cmd
        } // end method Get

        public Maybe<Archivo> Create( Archivo ar )
        {
            using (OracleConnection conn = DB.GetOracleConnection())
            using (OracleCommand cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.CREATE_AR"))
            {
                var result = DB.AddObjectResult( cmd, UdtTypeName );
                DB.AddObjectParameter( cmd, "archivo", UdtTypeName, ar );

                cmd.ExecuteNonQuery();

                return (Archivo) result.Value;
            } // end using cmd
        } // end method Create
    } // end class ArchivoDao
} // end namespace WebLegemDAL.DAO2