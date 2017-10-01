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

namespace WebLegemDAL.Dao
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

        public Result<Entidad> Create(Entidad e)
        {
            try
            {
                using (OracleConnection conn = DB.GetOracleConnection())
                using (OracleCommand cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.CREATE_E"))
                {
                    var result = DB.AddObjectResult(cmd, UdtTypeName);
                    DB.AddObjectParameter(cmd, "entidad", UdtTypeName, e);

                    cmd.ExecuteNonQuery();
                    return Result.Ok((Entidad)result.Value);
                }                 
            }
            catch (OracleException ex)
            {
                return Result.Fail<Entidad>("Registro existente con el mismo nombre");
            }
        
        } // end method Create

        public Result<Entidad> Update(Entidad e)
        {
            
            try{
                using (OracleConnection conn = DB.GetOracleConnection())
                using (OracleCommand cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.UPDATE_E"))
                {
                    var result = DB.AddObjectResult(cmd, UdtTypeName);
                    DB.AddObjectParameter(cmd, "new_e", UdtTypeName, e);

                    cmd.ExecuteNonQuery();
                    return Result.Ok((Entidad)result.Value);
                } // end using cmd
            }
            catch (OracleException ex)
            {
                return Result.Fail<Entidad>("Registro existente con el mismo nombre");
            }
            
        } // end method Update

        public Result Delete(int id)
        {
            try
            {
                using (OracleConnection conn = DB.GetOracleConnection())
                using (OracleCommand cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.DELETE_E"))
                {
                    DB.AddIdParameter(cmd, id);
                    cmd.ExecuteNonQuery();
                    return Result.Ok();
                } // end using cmd
            }
            catch
            {
                return Result.Fail("No se puede eliminar este registro");
            }
            
        } // end method Delete
    } // end class EntidadDao
} // end namespace WebLegemDAL.DAO2
