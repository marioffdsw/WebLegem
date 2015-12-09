using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Oracle.DataAccess.Client;
using WebLegemDAL.Models;
using System.Data;

namespace WebLegemDAL.Models
{
    public class TipoDocumentoDAL
    {
        private OracleConnection conn;

        public void OpenConnection(string connectionString)
        {
            conn = new OracleConnection() { ConnectionString = connectionString };
            conn.Open();
        } // end OpenConnection method

        public void CloseConnection()
        {
            conn.Close();
        } // end CloseConnection method

        public void CreateTipoDocumento( ref TipoDocumento tipoDocumento)
        {
            OracleCommand cmd = new OracleCommand("CREAR_TIPO_DOC_FROM_TD_PRO", conn);
            cmd.CommandType = CommandType.StoredProcedure;

            OracleParameter param = cmd.Parameters.Add("tipo_doc", OracleDbType.Object);
            param.Direction = ParameterDirection.InputOutput;
            param.UdtTypeName = "WEB_LEGEM.TIPO_DOC_TYP";
            param.Value = tipoDocumento;

            cmd.ExecuteNonQuery();
            
            tipoDocumento = (TipoDocumento) param.Value;
        }

        public List<TipoDocumento> GetAllTipoDocumento()
        {
            string sql = "select VALUE(td) from tipo_doc_obj_tab td";

            OracleCommand cmd = new OracleCommand() { Connection = conn, CommandText = sql };
            OracleDataReader reader = cmd.ExecuteReader();

            var listaTiposDocumento = new List<TipoDocumento>();            

            while (reader.Read())
            {
                TipoDocumento td;
                if (reader.IsDBNull(0))
                    td = TipoDocumento.Null;
                else
                    td = (TipoDocumento)reader.GetValue(0);

                listaTiposDocumento.Add(td);
            }

            return listaTiposDocumento;

        } // end method GetAllTipoDocumento

        public TipoDocumento GetTipoDocumento( int id )
        {
            string sql = "select VALUE(td) from tipo_doc_obj_tab td WHERE td.id = " + id;

            OracleCommand cmd = new OracleCommand() { Connection = conn, CommandText = sql };
            OracleDataReader reader = cmd.ExecuteReader();

            reader.Read();
            var tipoDoc = (TipoDocumento)reader.GetValue(0);

            return tipoDoc;
        } // end GetTipoDocumento method

        public TipoDocumento UpdateTipoDocumento( ref TipoDocumento tipoDoc )
        {
            string sql = "UPDATE tipo_doc_obj_tab td SET td.nombre = '" + tipoDoc.Nombre + "' where td.id = " + tipoDoc.Id;

            OracleCommand cmd = new OracleCommand() { Connection = conn, CommandText = sql };
            cmd.ExecuteNonQuery();

            tipoDoc = GetTipoDocumento(tipoDoc.Id);

            return tipoDoc;
        } // end UpdateTipoDocumento method

        public void DeleteTipoDocumento(int id)
        {
            string sql = "DELETE FROM tipo_doc_obj_tab td WHERE td.id = " + id;

            OracleCommand cmd = new OracleCommand() { Connection = conn, CommandText = sql };
            cmd.ExecuteNonQuery();
                        
        } // end DeleteTipoDocumento method

    }
}
