using Oracle.DataAccess.Client;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Models;

namespace WebLegemDAL.DAL
{
    public class DocumentoDAL
    {
        /*
         * Fields
         */

        OracleConnection conn = new OracleConnection();


        /*
         * Public Interface
         */

        public void OpenConnection( string connStr )
        {
            conn.ConnectionString = connStr;
            conn.Open();
        } // end OpenConnection method 

        public void CloseConnection()
        {
            conn.Close();
        } // end CloseConnection method

        public Documento CreateDocumento( ref Documento doc )
        {
            OracleCommand cmd = new OracleCommand("CREAR_DOCUMENTO_PRO", conn);
            cmd.CommandType = CommandType.StoredProcedure;

            OracleParameter entidadId = cmd.Parameters.Add("ENTIDAD_I", OracleDbType.Int32);
            entidadId.Direction = ParameterDirection.Input;
            entidadId.Value = doc.DocId.Entidad.Id;

            OracleParameter tipoDocI = cmd.Parameters.Add("TIPO_DOC_I", OracleDbType.Int32);
            tipoDocI.Direction = ParameterDirection.Input;
            tipoDocI.Value = doc.DocId.TipoDocumento.Id;

            OracleParameter numero = cmd.Parameters.Add("NUMERO_I", OracleDbType.Varchar2);
            numero.Direction = ParameterDirection.Input;
            numero.Value = doc.DocId.Numero;

            OracleParameter fechaPub = cmd.Parameters.Add("FECHA_PUBLICACION_I", OracleDbType.Varchar2, 4);
            fechaPub.Direction = ParameterDirection.Input;
            fechaPub.Value = doc.DocId.FechaPublicacion;

            int value = 0;
            OracleParameter val = cmd.Parameters.Add("VAL", OracleDbType.Int32);
            val.Direction = ParameterDirection.Output;
            val.Value = value;

            cmd.ExecuteNonQuery();

            value = (int) val.Value;

            OracleCommand cmd2 = new OracleCommand( "CREAR_CONTENIDO_PRO", conn );
            cmd.CommandType = CommandType.StoredProcedure;

            OracleParameter idRef = cmd2.Parameters.Add( "ID_REFERENCIA", conn );
            idRef.Direction = ParameterDirection.Input;
            idRef.Value = value;

            OracleParameter asunto = cmd2.Parameters.Add( "ASUNTO", conn );
            asunto.Direction = ParameterDirection.Input;
            asunto.Value = doc.Asunto;

            OracleParameter fecha = cmd2.Parameters.Add( "FECHA", conn );
            fecha.Direction = ParameterDirection.Input;
            fecha.Value = doc.FechaExpedicion;

            OracleParameter ruta = cmd2.Parameters.Add( "RUTA", conn );
            ruta.Direction = ParameterDirection.Input;
            ruta.Value = doc.RutaAlArchivo;

            OracleParameter nombre = cmd2.Parameters.Add( "NOMBRE", conn );
            nombre.Direction = ParameterDirection.Input;
            nombre.Value = doc.NombreDocumentoProcesado;

            cmd2.ExecuteNonQuery();

            return new Documento();
        } // end method CreateDocumento

        public Documento GetDocumento( int id )
        {
            string sql = "select VALUE(d) from doc_obj_tab d WHERE (VALUE(d)).id = " + id;

            OracleCommand cmd = new OracleCommand() { Connection = conn, CommandText = sql };
            OracleDataReader reader = cmd.ExecuteReader();

            reader.Read();
            var tipoDoc = (Entidad)reader.GetValue(0);

            return tipoDoc;
        } // end method GetDocumento

    } // end DocumentoDAL class
} // end namespace
