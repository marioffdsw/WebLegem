using Oracle.DataAccess.Client;
using Oracle.DataAccess.Types;
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

        public Documento CreateDocumento( ref Documento docu )
        {
            OracleCommand cmd = new OracleCommand("CREAR_DOCUMENTO_PRO", conn);
            cmd.CommandType = CommandType.StoredProcedure;

            OracleParameter entidadId = cmd.Parameters.Add("ENTIDAD_I", OracleDbType.Int32);
            entidadId.Direction = ParameterDirection.Input;
            entidadId.Value = docu.DocId.Entidad;

            OracleParameter tipoDocI = cmd.Parameters.Add("TIPO_DOC_I", OracleDbType.Int32);
            tipoDocI.Direction = ParameterDirection.Input;
            tipoDocI.Value = docu.DocId.TipoDocumento;

            OracleParameter numero = cmd.Parameters.Add("NUMERO_I", OracleDbType.Varchar2);
            numero.Direction = ParameterDirection.Input;
            numero.Value = docu.DocId.Numero;

            OracleParameter fechaPub = cmd.Parameters.Add("FECHA_PUBLICACION_I", OracleDbType.Varchar2, 4);
            fechaPub.Direction = ParameterDirection.Input;
            fechaPub.Value = docu.DocId.FechaPublicacion;

            int value = 0;
            OracleParameter val = cmd.Parameters.Add("VAL", OracleDbType.Int32);
            val.Direction = ParameterDirection.Output;
            val.Value = value;

            cmd.ExecuteNonQuery();

            value = int.Parse(cmd.Parameters["VAL"].Value.ToString());

            OracleCommand cmd2 = new OracleCommand( "CREAR_CONTENIDO_PRO", conn );
            cmd2.CommandType = CommandType.StoredProcedure;

            OracleParameter id_referencia = cmd2.Parameters.Add( "ID_REFERENCIA",  OracleDbType.Int32 );
            id_referencia.Direction = ParameterDirection.Input;
            id_referencia.Value = value;

            OracleParameter asunto = cmd2.Parameters.Add( "ASUNTO", OracleDbType.Varchar2 );
            asunto.Direction = ParameterDirection.Input;
            asunto.Value = docu.Asunto;

            OracleParameter fecha = cmd2.Parameters.Add( "FECHA", OracleDbType.Varchar2 );
            fecha.Direction = ParameterDirection.Input;
            fecha.Value = "1992/07/15";

            OracleParameter ruta = cmd2.Parameters.Add( "RUTA", OracleDbType.Varchar2 );
            ruta.Direction = ParameterDirection.Input;
            ruta.Value = docu.RutaAlArchivo;

            OracleParameter nombre = cmd2.Parameters.Add( "NOMBRE", OracleDbType.Varchar2 );
            nombre.Direction = ParameterDirection.Input;
            nombre.Value = docu.NombreDocumentoProcesado;

            cmd2.ExecuteNonQuery();

            docu = GetDocumento( value );

            return docu;
        } // end method CreateDocumento

        public List<Documento> GetAllDocumentos()
        {
            string sql = "select VALUE(d) from doc_contenido_obj_tab d";

            OracleCommand cmd = new OracleCommand() { Connection = conn, CommandText = sql };
            OracleDataReader reader = cmd.ExecuteReader();

            var listaDocumentos = new List<Documento>();

            while (reader.Read())
            {
                Documento d;
                if (reader.IsDBNull(0))
                    d = Documento.Null;
                else
                    d = (Documento)reader.GetValue(0);

                listaDocumentos.Add(d);
            }

            return listaDocumentos;

        } // end method GetAllEntidad

        public Documento GetDocumento( int id )
        {
            string sql = "select VALUE(d) from doc_contenido_obj_tab d WHERE DEREF(d.ref_id_documento).id = " + id;

            OracleCommand cmd = new OracleCommand() { Connection = conn, CommandText = sql };
            OracleDataReader reader = cmd.ExecuteReader();

            reader.Read();
            var doc = (Documento)reader.GetValue(0);

            return doc;
        } // end method GetDocumento

    } // end DocumentoDAL class
} // end namespace
