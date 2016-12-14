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
    public class RolDao
    {

        public string UdtTypeName { get { return "WEB_LEGEM.ROL_TYP"; } }

        public Result<Rol> Get( int id )
        {
            try
            {
                using (var conn = DB.GetOracleConnection())
                using (var cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.GET_R"))
                {
                    var result = DB.AddObjectResult(cmd, UdtTypeName);
                    DB.AddIdParameter(cmd, id);

                    cmd.ExecuteNonQuery();
                    return Result.Ok((Rol)result.Value);
                } // end sugin cmd
            }
            catch (Exception ex)
            {
                return Result.Fail<Rol>( "No se pudo encontrar el rol especificado" );
            } // end catch
        } // end method Get

        public IEnumerable<Rol> GetAll()
        {
            using (var conn = DB.GetOracleConnection())
            using (var cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.GET_ALL_R"))
            {
                var result = DB.AddRefCursorResult( cmd );


                cmd.ExecuteNonQuery();
                var reader = ((OracleRefCursor)result.Value).GetDataReader();
                return reader.AsEnumerable<Rol>();
            } // end using cmd
        } // end method GetAll

        public Result<Rol> Create( Rol rol )
        {
            try
            {
                using (var conn = DB.GetOracleConnection())
                using (var cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.CREATE_R"))
                {
                    var result = DB.AddObjectResult(cmd, UdtTypeName);
                    DB.AddObjectParameter(cmd, "NEW_R", UdtTypeName, rol);

                    cmd.ExecuteNonQuery();
                    return Result.Ok((Rol)result.Value);
                } // end using cmd
            } // end try
            catch (Exception ex)
            {
                return Result.Fail<Rol>( "Error al crear el rol " + rol.Nombre +", intente mas tarde" );
            } // end catch            
        } // end method Create

        public Result<Rol> Update( Rol rol )
        {
            try
            {
                using (var conn = DB.GetOracleConnection())
                using (var cmd = DB.GetFuncionCommand( conn, "WEB_LEGEM.UPDATE_R" ))
                {
                    var result = DB.AddObjectResult( cmd, UdtTypeName );
                    DB.AddObjectParameter( cmd, "NEW_R", UdtTypeName, rol );

                    cmd.ExecuteNonQuery();
                    return Result.Ok( (Rol) result.Value );
                } // end using cmd
            } // end try
            catch (Exception ex)
            {
                return Result.Fail<Rol>( "Error al actualizar el rol " + rol.Nombre + ", intente mas tarde" );                
            } // end catch
        } // end method Update

        public Result Delete(int id)
        {
            try
            {
                using (var conn = DB.GetOracleConnection())
                using (var cmd = DB.GetFuncionCommand( conn, "WEB_LEGEM.DELETE_R" ))
                {
                    DB.AddIdParameter(cmd, id);
                    cmd.ExecuteNonQuery();

                    return Result.Ok();
                } // end using cmd
            } // end try
            catch (Exception)
            {
                return Result.Fail("No se puede eliminar este registro");
            } // end catch
        } // end method Delete
        

    } // end class RolDao
} // end namespace WebLegemDAL.Dao