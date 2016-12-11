using CSharpFunctionalExtensions;
using Oracle.DataAccess.Client;
using Oracle.DataAccess.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Models;
using WebLegemDAL.Dao;

namespace WebLegemDAL.DAO2
{
    public class DocumentoDao
    {
        private string UdtTypeName
        {
            get { return "WEB_LEGEM.DOCUMENTO_TYP"; }
        }

        public Result<Documento> Exist( Documento newDoc )
        {
            try
            {
                using (OracleConnection conn = DB.GetOracleConnection())
                using (OracleCommand cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.GET_ID_MATCH"))
                {
                    var result = DB.AddObjectResult(cmd, UdtTypeName);
                    DB.AddObjectParameter(cmd, "new_d", UdtTypeName, newDoc);

                    cmd.ExecuteNonQuery();
                    return Result.Ok( (Documento) result.Value);
                } // end using cmd
            }
            catch (OracleException ex) {
                if (ex.Number == 1403)
                    return Result.Fail<Documento>( "No existe un documento con esas caracteristicas" );
                throw ex;
            } // end method 
        } // end method Exist

        public IEnumerable<ContenidoDocumento> Search(String palabrasABuscar)
        {
            try
            {
                using (var conn = DB.GetOracleConnection())
                using (var cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.SEARCH_C"))
                {
                    var result = DB.AddRefCursorResult( cmd );
                    DB.AddStringParameter( cmd, "PALABRAS_A_BUSCAR", palabrasABuscar );

                    cmd.ExecuteNonQuery();

                    var reader = ((OracleRefCursor)result.Value).GetDataReader();
                    return reader.AsEnumerable<ContenidoDocumento>();
                } // end using cmd
            } // end try
            catch (Exception ex)
            {
                throw ex;
            } // end catch
        } // end method Search
    } // end class DocumentoDao
} // end namespace WebLegemAL.DAO2