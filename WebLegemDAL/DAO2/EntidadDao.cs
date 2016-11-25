using CSharpFunctionalExtensions;
using Oracle.DataAccess.Client;
using Oracle.DataAccess.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Dao;
using WebLegemDAL.Models;

namespace WebLegemDAL.DAO2
{
    public class EntidadDao
    {
        private string UdtTypeName
        {
            get { return "WEB_LEGEM.ENTIDAD_TYP"; }
        }

        public IEnumerable<Entidad> GetAll()
        {
            using (OracleConnection conn = DB.GetOracleConnection())
            using (OracleCommand cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.GET_ALL_E"))
            {
                var result = DB.AddRefCursorResult( cmd );
                cmd.ExecuteNonQuery();
                var reader = ((OracleRefCursor)result.Value).GetDataReader();
                return reader.AsEnumerable<Entidad>();
            } // end using cmd
        } // end method GetAll

        public Maybe<Entidad> Get( int id )
        {
            using (OracleConnection conn = DB.GetOracleConnection())
            using (OracleCommand cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.GET_E"))
            {
                var result = DB.AddObjectResult( cmd, UdtTypeName );
                DB.AddIdParameter( cmd, id );

                cmd.ExecuteNonQuery();
                return (Entidad) result.Value;
            } // end using cmd
        } // end method Get

        public Maybe<Entidad> Create(Entidad e)
        {
            using (OracleConnection conn = DB.GetOracleConnection())
            using (OracleCommand cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.CREATE_E"))
            {
                var result = DB.AddObjectResult( cmd, UdtTypeName );
                DB.AddObjectParameter( cmd, "entidad", UdtTypeName, e);

                cmd.ExecuteNonQuery();
                return (Entidad) result.Value;
            } // end usung cmd
        } // end method Create

        public Maybe<Entidad> Update( Entidad e )
        {
            using (OracleConnection conn = DB.GetOracleConnection())
            using (OracleCommand cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.UPDATE_E"))
            {
                var result = DB.AddObjectResult(cmd, UdtTypeName );
                DB.AddObjectParameter( cmd, "new_e", UdtTypeName, e);

                cmd.ExecuteNonQuery();
                return (Entidad)result.Value;
            } // end using cmd
        } // end method Update

        public void Delete(int id)
        {
            using (OracleConnection conn = DB.GetOracleConnection())
            using (OracleCommand cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.DELETE_E"))
            {
                DB.AddIdParameter( cmd, id );

                cmd.ExecuteNonQuery();
            } // end using cmd
        } // end method Delete
    } // end class EntidadDao
} // end namespace WebLegemDAL.DAO2
