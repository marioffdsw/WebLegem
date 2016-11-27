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
    public class TipoEntidadDao
    {
        private string UdtTypeName
        {
            get { return "WEB_LEGEM.TIPO_ENTIDAD_TYP"; }
        }

        public IEnumerable<TipoEntidad> GetAll()
        {
            using (OracleConnection conn = DB.GetOracleConnection())
            using (OracleCommand cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.GET_ALL_TE"))
            {
                var result = DB.AddRefCursorResult( cmd );
                cmd.ExecuteNonQuery();
                var reader = ((OracleRefCursor)result.Value).GetDataReader();
                return reader.AsEnumerable<TipoEntidad>();
            } // end using cmd
        } // end method GetAll

        public Maybe<TipoEntidad> Get(int id)
        {
            using (OracleConnection conn = DB.GetOracleConnection())
            using (OracleCommand cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.GET_TE"))
            {
                var result = DB.AddObjectResult( cmd, UdtTypeName );
                DB.AddIdParameter( cmd, id );

                cmd.ExecuteNonQuery();
                return (TipoEntidad)result.Value;
            } // end using cmd
        } // end method Get

        public Maybe<TipoEntidad> Create(TipoEntidad te)
        {
            using (OracleConnection conn = DB.GetOracleConnection())
            using (OracleCommand cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.CREATE_TE"))
            {
                var result = DB.AddObjectResult( cmd, UdtTypeName );
                DB.AddObjectParameter( cmd, "tipo_entidad", UdtTypeName, te);

                cmd.ExecuteNonQuery();
                return (TipoEntidad) result.Value;
            } // end using cmd
        } // end method Create

        public Maybe<TipoEntidad> Update(TipoEntidad te)
        {
            using (OracleConnection conn = DB.GetOracleConnection())
            using (OracleCommand cmd = DB.GetFuncionCommand(conn, @"WEB_LEGEM.UPDATE_TE"))
            {
                var result = DB.AddObjectResult(cmd, UdtTypeName);
                DB.AddObjectParameter(cmd, "NEW_TE", UdtTypeName, te);

                cmd.ExecuteNonQuery();
                return (TipoEntidad) result.Value;
            } // end using cmd
        } // end method Update

        public void Delete(int id)
        {
            using (OracleConnection conn = DB.GetOracleConnection())
            using (OracleCommand cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.DELETE_TE"))
            {
                DB.AddIdParameter(cmd, id);

                cmd.ExecuteNonQuery();
            } // end using cmd
        } // end method Delete
    } // end class TipoEntidadDao
} // end namespace WebLegemDAL.DAO2