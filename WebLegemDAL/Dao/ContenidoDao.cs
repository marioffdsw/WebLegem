using CSharpFunctionalExtensions;
using Oracle.DataAccess.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Models;
using Oracle.DataAccess.Types;
using System.Configuration;

namespace WebLegemDAL.Dao
{
    public class ContenidoDao
    {
        public string UdtTypeName
        {
            get { return "WEB_LEGEM.CONTENIDO_TYP"; }
        }// end prop UdtTypeName

        public Result<ContenidoDocumento> Exist(int id)
        {
            try
            {
                using (var conn = DB.GetOracleConnection())
                using (var cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.GET_C"))
                {
                    var result = DB.AddObjectResult(cmd, UdtTypeName);
                    DB.AddIdParameter(cmd, id);

                    cmd.ExecuteNonQuery();
                    return Result.Ok((ContenidoDocumento)result.Value);
                }
            } // end try
            catch (OracleException ex)
            {
                return Result.Fail<ContenidoDocumento>("No se encontro ningun contenido con ese id");
            } // end catch
        } // end method Exist

        public Result<ContenidoDocumento> Create( ContenidoDocumento contenidoDocumento )
        {
            try
            {
                using (var conn = DB.GetOracleConnection())
                using (var cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.CREATE_C"))
                {
                    if (contenidoDocumento.Contenido == null)
                    {
                        var oracleDirName = ConfigurationManager.AppSettings["oracleDir"].ToString();
                        contenidoDocumento.Contenido = new OracleBFile(conn, "WEB_LEGEM." + oracleDirName, contenidoDocumento.Archivo.Nombre + ".txt");
                    } // end if

                    var result = DB.AddObjectResult( cmd, UdtTypeName );
                    DB.AddObjectParameter( cmd, "NEW_C", UdtTypeName, contenidoDocumento );
                    DB.AddStringParameter( cmd, "FILE_NAME", contenidoDocumento.Archivo.Nombre + ".txt" );

                    cmd.ExecuteNonQuery();
                    return Result.Ok<ContenidoDocumento>( (ContenidoDocumento) result.Value );
                } // end using cmd
            } // end try
            catch ( OracleException ex )
            {
                return Result.Fail<ContenidoDocumento>( "Ha ocurrido un problema, intenta mas tarde." );
            } // end catch

        } // end method Create
    } // end class ContenidoDao
} // end namespace WebLegemDAL.DAO2