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
    public class TipoEntidadDAL
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

        public void CreateTipoEntidad(ref TipoEntidad tipoEntidad)
        {
            OracleCommand cmd = new OracleCommand("CREAR_TIPO_ENTIDAD_PRO", conn);
            cmd.CommandType = CommandType.StoredProcedure;

            OracleParameter param = cmd.Parameters.Add("nombre", OracleDbType.Varchar2);
            param.Direction = ParameterDirection.Input;            
            param.Value = tipoEntidad.Nombre;

            cmd.ExecuteNonQuery();

            var te = GetTipoEntidad( tipoEntidad.Nombre );

            tipoEntidad = te;
        }

        public List<TipoEntidad> GetAllTipoEntidad()
        {
            string sql = "select VALUE(td) from tipo_entidad_obj_tab td";

            OracleCommand cmd = new OracleCommand() { Connection = conn, CommandText = sql };
            OracleDataReader reader = cmd.ExecuteReader();

            var listaTiposEntidad = new List<TipoEntidad>();

            while (reader.Read())
            {
                TipoEntidad te;
                if (reader.IsDBNull(0))
                    te = TipoEntidad.Null;
                else
                    te = (TipoEntidad)reader.GetValue(0);

                listaTiposEntidad.Add(te);
            }

            return listaTiposEntidad;

        } // end method GetAllTipoEntidad

        public TipoEntidad GetTipoEntidad(int id)
        {
            string sql = "select VALUE(te) from tipo_entidad_obj_tab te WHERE te.id = " + id;

            OracleCommand cmd = new OracleCommand() { Connection = conn, CommandText = sql };
            OracleDataReader reader = cmd.ExecuteReader();

            reader.Read();
            var tipoDoc = (TipoEntidad)reader.GetValue(0);

            return tipoDoc;
        } // end GetTipoEntidad method

        public TipoEntidad GetTipoEntidad(string nombre)
        {
            string sql = "select VALUE(te) from tipo_entidad_obj_tab te WHERE te.nombre = " + nombre;

            OracleCommand cmd = new OracleCommand() { Connection = conn, CommandText = sql };
            OracleDataReader reader = cmd.ExecuteReader();

            reader.Read();
            var tipoDoc = (TipoEntidad)reader.GetValue(0);

            return tipoDoc;
        } // end GetTipoEntidad method

        public TipoEntidad UpdateTipoEntidad(ref TipoEntidad tipoDoc)
        {
            string sql = "UPDATE tipo_doc_obj_tab td SET td.nombre = '" + tipoDoc.Nombre + "' where td.id = " + tipoDoc.Id;

            OracleCommand cmd = new OracleCommand() { Connection = conn, CommandText = sql };
            cmd.ExecuteNonQuery();

            tipoDoc = GetTipoEntidad(tipoDoc.Id);

            return tipoDoc;
        } // end UpdateTipoEntidad method

        public void DeleteTipoEntidad(int id)
        {
            string sql = "DELETE FROM tipo_doc_obj_tab td WHERE td.id = " + id;

            OracleCommand cmd = new OracleCommand() { Connection = conn, CommandText = sql };
            cmd.ExecuteNonQuery();

        } // end DeleteTipoEntidad method

    }
}
