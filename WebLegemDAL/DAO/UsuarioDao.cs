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
    public class UsuarioDao
    {
        public string UdtTypeName { get { return "WEB_LEGEM.USUARIO_TYP"; } }

        public Result<Usuario> Get(int id)
        {
            try
            {
                using (var conn = DB.GetOracleConnection())
                using (var cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.GET_U"))
                {
                    var result = DB.AddObjectResult(cmd, UdtTypeName);
                    DB.AddIdParameter(cmd, id);

                    cmd.ExecuteNonQuery();
                    return Result.Ok((Usuario)result.Value);
                } // end sugin cmd
            }
            catch (Exception ex)
            {
                return Result.Fail<Usuario>("No se pudo encontrar el usuario especificado");
            } // end catch
        } // end method Get

        public IEnumerable<Usuario> GetAll()
        {
            using (var conn = DB.GetOracleConnection())
            using (var cmd = DB.GetFuncionCommand( conn, "WEB_LEGEM.GET_ALL_U" ))
            {
                var result = DB.AddRefCursorResult(cmd);
                cmd.ExecuteNonQuery();
                var reader = ((OracleRefCursor)result.Value).GetDataReader();
                return reader.AsEnumerable<Usuario>();
            } // end using cmd             
        } // end method GetAll

        public Result<Usuario> Create(Usuario usuario)
        {
            try
            {
                using (var conn = DB.GetOracleConnection())
                using (var cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.CREATE_U"))
                {
                    var result = DB.AddObjectResult(cmd, UdtTypeName);
                    DB.AddObjectParameter(cmd, "NEW_U", UdtTypeName, usuario);

                    cmd.ExecuteNonQuery();
                    return Result.Ok( (Usuario) result.Value );
                } // end using cmd
            } // end try
            catch (Exception ex )
            {
                return Result.Fail<Usuario>( "Error al crear el usuario " + usuario.NombreUsuario );
            } // end catch
        } // end method Create

        public Result<Usuario> Update(Usuario usuario)
        {
            try
            {
                using (var conn = DB.GetOracleConnection())
                using (var cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.UPDATE_U"))
                {
                    var result = DB.AddObjectResult(cmd, UdtTypeName);
                    DB.AddObjectParameter(cmd, "NEW_U", UdtTypeName, usuario);

                    cmd.ExecuteNonQuery();
                    return Result.Ok((Usuario)result.Value);
                } // end using cmd
            } // end try
            catch (Exception ex)
            {
                return Result.Fail<Usuario>("Error al actualizar el usuario " + usuario.NombreUsuario + ", intente mas tarde");
            } // end catch
        } // end method Update
    } // end class UsuarioDao
} // end namespace WebLegemDAL.Dao