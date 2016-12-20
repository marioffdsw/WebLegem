using CSharpFunctionalExtensions;
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
    } // end class AnotacionDao
} // end namespace WebLegemDAL.Dao
