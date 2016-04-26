using System.Linq;
using Oracle.DataAccess.Client;
using WebLegemDAL.Models;
using System.Data;

namespace WebLegemDAL.DAL
{
    public class EntidadDAO : BaseDAO<Entidad>
    {

        /**********************************************************************************
         **********************************************************************************
         *
         *   PROPERTIES
         *   
         **********************************************************************************/

        public override string TableName
        {
            get
            {
                return "entidades_view";
            }
        } // fin prop TableName

        public string UdtTypeName
        {
            get
            {
                return "WEB_LEGEM.ENTIDAD_TYP";
            }
        } // fin prop UdtTypeName



        /**********************************************************************************
         **********************************************************************************
         *
         *   OVERWRITTEN METHODS
         *   
         **********************************************************************************/

        protected sealed override IQueryable<Entidad> RetrieveAll()
        {
            queryString = $"SELECT * FROM {TableName} tev";

            OracleCommand cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            OracleDataReader reader = cmd.ExecuteReader();

            queryString = null;

            return reader.ToList<Entidad>().AsQueryable();
        }

        protected sealed override Entidad Retrieve(int id)
        {
            queryString = $"SELECT * FROM {TableName} te WHERE te.entidad.id = {id}";
            OracleCommand cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            OracleDataReader reader = cmd.ExecuteReader();

            queryString = null;

            return reader.ToList<Entidad>().AsQueryable().First();
        }

        protected sealed override Entidad Insert(Entidad entidad)
        {
            OracleCommand cmd = new OracleCommand($"INSERT INTO {TableName} VALUES( :td )", connection);
            OracleParameter td = cmd.Parameters.Add(":td", OracleDbType.Object);
            td.UdtTypeName = UdtTypeName;
            td.Direction = ParameterDirection.InputOutput;
            td.Value = entidad;

            cmd.ExecuteNonQuery();

            return (Entidad) td.Value;
        }

        protected sealed override Entidad Modify(Entidad entidad)
        {
            queryString = $"UPDATE {TableName} tev SET tev.entidad = :td WHERE tev.entidad.id = :id";

            OracleCommand cmd = new OracleCommand() { Connection = connection, CommandText = queryString };

            OracleParameter td = cmd.Parameters.Add(":td", OracleDbType.Object);
            td.UdtTypeName = UdtTypeName;
            td.Direction = ParameterDirection.InputOutput;
            td.Value = entidad;

            OracleParameter id = cmd.Parameters.Add(":td", OracleDbType.Int32);
            id.UdtTypeName = UdtTypeName;
            id.Value = entidad.Id;

            cmd.ExecuteNonQuery();

            return (Entidad) td.Value;
        } // end UpdateTipoDocumento method

        protected sealed override void Remove(int id)
        {
            queryString = $"DELETE FROM {TableName} tev WHERE tev.entidad.id = {id}";

            OracleCommand cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            cmd.ExecuteNonQuery();
        }
    }
}
