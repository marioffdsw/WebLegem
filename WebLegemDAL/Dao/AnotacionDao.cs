using CSharpFunctionalExtensions;
using Oracle.DataAccess.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Models;

namespace WebLegemDAL.Dao
{
    public class AnotacionDao
    {
        public string UdtTypeName { get { return "WEB_LEGEM.ANOTACION_TYP"; } }

        public Result<Anotacion> Create( Anotacion anotacion )
        {
            try
            {
                using (var conn = DB.GetOracleConnection())
                using (var cmd = DB.GetFuncionCommand( conn, "WEB_LEGEM.CREATE_A" ))
                {
                    var result = DB.AddObjectResult( cmd, UdtTypeName );
                    DB.AddObjectParameter( cmd, "NEW_A", UdtTypeName, anotacion );

                    cmd.ExecuteNonQuery();
                    return Result.Ok( (Anotacion) result.Value );
                } // end using cmd
            } // end try
            catch (Exception ex)
            {
                return Result.Fail<Anotacion>( "No se pudo crear la anotacion" );                
            } // end catch
        } // end method Create

        public IEnumerable<Anotacion> TraerAnotacionesDeDocumento( int id )
        {
            try
            {
                using (var conn = DB.GetOracleConnection())
                using (var cmd = DB.GetFuncionCommand( conn, "WEB_LEGEM.GET_A_FROM_ID" ))
                {
                    var result = DB.AddRefCursorResult( cmd );
                    DB.AddIdParameter( cmd, id );

                    cmd.ExecuteNonQuery();

                    var reader = ((OracleRefCursor)result.Value).GetDataReader();
                    return reader.AsEnumerable<Anotacion>();
                } // end using cmd
            }
            catch (Exception ex)
            {
                return null;
            }
        } // end GetAnotacionesDeDocumentoId

        public Result<Anotacion> ActualizarAnotacion( Anotacion anotacion )
        {
            try
            {
                using (var conn = DB.GetOracleConnection())
                using (var cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.UPDATE_A"))
                {
                    var result = DB.AddObjectResult(cmd, UdtTypeName);
                    DB.AddObjectParameter(cmd, "NEW_A", UdtTypeName, anotacion);

                    cmd.ExecuteNonQuery();
                    return Result.Ok( (Anotacion) result.Value );
                } // end using cmd
            } // end try
            catch (Exception ex)
            {
                return Result.Fail<Anotacion>("No existe la anotación");
            } // end catch
        } // end method ActualizarAnotaciones

        public Result Delete(int id)
        {
            try
            {
                using (var conn = DB.GetOracleConnection())
                using (var cmd = DB.GetFuncionCommand( conn, "WEB_LEGEM.DELETE_A" ))
                {
                    DB.AddIdParameter( cmd, id );
                    cmd.ExecuteNonQuery();
                    return Result.Ok();
                } // end using cmd
            }
            catch (Exception ex)
            {
                return Result.Fail( "No existe la anotación" );                
            }
        } // end method Delete
    } // end class AnotacionDao
} // end namespace WebLegemDAL.Dao
