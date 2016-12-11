using Oracle.DataAccess.Client;
using Oracle.DataAccess.Types;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Models;
using WebLegemDAL.DAO;
using WebLegemDAL.Dao;
using CSharpFunctionalExtensions;

namespace WebLegemDAL.DAO
{
    public class TipoDocumentoDao
    {
        private string UdtTypeName
        {
            get { return "WEB_LEGEM.TIPO_DOCUMENTO_TYP"; }
        }

        public IEnumerable<TipoDocumento> GetAll()
        {            
            using (OracleConnection conn = DB.GetOracleConnection())            
            using (OracleCommand cmd = DB.GetFuncionCommand( conn, @"WEB_LEGEM.GET_ALL_TD") )
            {                    
                var result = DB.AddRefCursorResult( cmd );
                cmd.ExecuteNonQuery();
                var reader = ((OracleRefCursor) result.Value).GetDataReader();
                return reader.AsEnumerable<TipoDocumento>();
            } // end using cmd            
        } // end method GetAll        

        public Maybe<TipoDocumento> Get( int id )
        {
            using (OracleConnection conn = DB.GetOracleConnection())            
            using (OracleCommand cmd = DB.GetFuncionCommand( conn, @"WEB_LEGEM.GET_TD"))
            {
                var result = DB.AddObjectResult( cmd, UdtTypeName );
                DB.AddIdParameter( cmd, id );
                    
                cmd.ExecuteNonQuery();
                return (TipoDocumento) result.Value;                    
            } // end using cmd
        } // end method Get

        public Result<TipoDocumento> Create(TipoDocumento td)
        {
            try{
                using (OracleConnection conn = DB.GetOracleConnection())
                using (OracleCommand cmd = DB.GetFuncionCommand(conn, @"WEB_LEGEM.CREATE_TD"))
                {
                    var result = DB.AddObjectResult(cmd, UdtTypeName);
                    DB.AddObjectParameter(cmd, "tipo_documento", UdtTypeName, td);

                    cmd.ExecuteNonQuery();
                    return Result.Ok((TipoDocumento)result.Value);
                } 
            }
            catch (OracleException e)
            {
                return Result.Fail<TipoDocumento>("Registro existente con el mismo nombre");
            }                                              
        } // end method Create

        public Result<TipoDocumento> Update(TipoDocumento td)
        {
            try
            {
                using (OracleConnection conn = DB.GetOracleConnection())
                using (OracleCommand cmd = DB.GetFuncionCommand(conn, @"WEB_LEGEM.UPDATE_TD"))
                {
                    var result = DB.AddObjectResult(cmd, UdtTypeName);
                    DB.AddObjectParameter(cmd, "NEW_TD", UdtTypeName, td);

                    cmd.ExecuteNonQuery();
                    return Result.Ok((TipoDocumento)result.Value);
                } // end using cmd

            }
            catch(OracleException e)
            {
                return Result.Fail<TipoDocumento>("Registro existente con el mismo nombre");
            }
            
        } // end method Update

        public Result Delete(int id)
        {
            try
            {
                using (OracleConnection conn = DB.GetOracleConnection())
                using (OracleCommand cmd = DB.GetFuncionCommand(conn, @"WEB_LEGEM.DELETE_TD"))
                {
                    DB.AddIdParameter(cmd, id);
                    cmd.ExecuteNonQuery();
                    return Result.Ok();
                } // end using cmd
            }
            catch (OracleException e)
            {
                return Result.Fail("No se puede eliminar este registro");
            }
            
        } // end method Delete
    } // end class TipoDocumentoDao
} // end namespace WebLegemDAL.DAO2
