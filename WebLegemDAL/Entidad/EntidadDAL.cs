using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Oracle.DataAccess.Client;
using WebLegemDAL.Models;
using System.Data;

namespace WebLegemDAL.DAL
{
    public class EntidadDAL
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

        public void CreateEntidad(ref Entidad Entidad)
        {
            OracleCommand cmd = new OracleCommand("CREAR_ENTIDAD_PRO", conn);
            cmd.CommandType = CommandType.StoredProcedure;

            OracleParameter param1 = cmd.Parameters.Add("NOMBRE", OracleDbType.Varchar2);
            param1.Direction = ParameterDirection.Input;            
            param1.Value = Entidad.Nombre;

            OracleParameter param2 = cmd.Parameters.Add( "ID_TIPO_ENTIDAD", OracleDbType.Int32 );
            param2.Direction = ParameterDirection.Input;
            param2.Value = Entidad.TipoEntidad.Id;

            cmd.ExecuteNonQuery();

            var entidad = GetEntidad( Entidad.Nombre );

            Entidad = entidad;
        }

        public List<Entidad> GetAllEntidad()
        {
            string sql = "select VALUE(e) from entidad_obj_tab e";

            OracleCommand cmd = new OracleCommand() { Connection = conn, CommandText = sql };
            OracleDataReader reader = cmd.ExecuteReader();

            var listaEntidades = new List<Entidad>();

            while (reader.Read())
            {
                Entidad e;
                if (reader.IsDBNull(0))
                    e = Entidad.Null;
                else
                    e = (Entidad)reader.GetValue(0);

                listaEntidades.Add(e);
            }

            return listaEntidades;

        } // end method GetAllEntidad

        public Entidad GetEntidad(int id)
        {
            string sql = "select VALUE(td) from entidad_obj_tab td WHERE td.id = " + id;

            OracleCommand cmd = new OracleCommand() { Connection = conn, CommandText = sql };
            OracleDataReader reader = cmd.ExecuteReader();

            reader.Read();
            var tipoDoc = (Entidad)reader.GetValue(0);

            return tipoDoc;
        } // end GetEntidad method

        public Entidad GetEntidad(string nombre)
        {
            string sql = "select VALUE(e) from entidad_obj_tab e WHERE e.nombre = '" + nombre + "'";

            OracleCommand cmd = new OracleCommand() { Connection = conn, CommandText = sql };
            OracleDataReader reader = cmd.ExecuteReader();

            reader.Read();
            var tipoDoc = (Entidad) reader.GetValue(0);

            return tipoDoc;
        } // end GetEntidad method

        public Entidad UpdateEntidad(ref Entidad entidad)
        {
            string sql = "UPDATE entidad_obj_tab td SET td.nombre = '" + entidad.Nombre +"', td.tipo_entidad = (SELECT REF(te) FROM tipo_entidad_obj_tab te WHERE te.id = " + entidad.TipoEntidad.Id + ")" + " where td.id = " + entidad.Id;

            OracleCommand cmd = new OracleCommand() { Connection = conn, CommandText = sql };
            cmd.ExecuteNonQuery();

            entidad = GetEntidad(entidad.Id);

            return entidad;
        } // end UpdateEntidad method

        public void DeleteEntidad(int id)
        {
            string sql = "DELETE FROM entidad_obj_tab td WHERE td.id = " + id;

            OracleCommand cmd = new OracleCommand() { Connection = conn, CommandText = sql };
            cmd.ExecuteNonQuery();

        } // end DeleteEntidad method

    }
}