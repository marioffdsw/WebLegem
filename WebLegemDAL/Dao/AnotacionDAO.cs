using Oracle.DataAccess.Client;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Models;

namespace WebLegemDAL.Dao
{
    public class AnotacionDao : BaseDao<Anotacion>
    {

        public override string TableName
        {
            get { return "anotaciones_view"; }
        }

        public string UdtTypeName
        {
            get { return "WEB_LEGEM.ANOTACION_TYP"; }
        }

        protected override Anotacion Insert(Anotacion registro)
        {
            queryString = $"INSERT INTO {TableName} VALUES( :an )";
            var cmd = new OracleCommand( queryString, connection ) ;

            var anotacionParam = cmd.Parameters.Add( ":an", OracleDbType.Object );           
            anotacionParam.Direction = ParameterDirection.InputOutput;
            anotacionParam.UdtTypeName = UdtTypeName;
            anotacionParam.Value = registro;
            

            cmd.ExecuteNonQuery();

            return (Anotacion) anotacionParam.Value;

        }

        protected override Anotacion Modify(Anotacion registro)
        {
            queryString = $"UPDATE {TableName} anv SET anv.anotacion = :an WHERE anv.anotacion.id = :id";

            var cmd = new OracleCommand() { Connection = connection, CommandText = queryString };

            var an = cmd.Parameters.Add( ":an", OracleDbType.Object );
            an.Direction = ParameterDirection.InputOutput;
            an.UdtTypeName = UdtTypeName;            
            an.Value = registro;

            var id = cmd.Parameters.Add( ":id", OracleDbType.Int32 );
            id.Direction = ParameterDirection.Input;
            id.Value = registro.Id;

            cmd.ExecuteNonQuery();

            return (Anotacion) an.Value;
        }

        protected override void Remove(int id)
        {
            queryString = $"DELETE FROM {TableName} anv WHERE anv.anotacion.id = :id";

            var cmd = new OracleCommand() { Connection = connection, CommandText = queryString };

            var idParam = cmd.Parameters.Add(":id", OracleDbType.Int32);
            idParam.Direction = ParameterDirection.Input;
            idParam.Value = id;

            cmd.ExecuteNonQuery();
        }

        protected override Anotacion Retrieve(int id)
        {
            queryString = $"SELECT * FROM {TableName} anv WHERE anv.anotacion.id = :id";

            var cmd = new OracleCommand() { Connection = connection, CommandText = queryString };

            var idParam = cmd.Parameters.Add(":id", OracleDbType.Int32);
            idParam.Direction = ParameterDirection.Input;
            idParam.Value = id;

            var reader = cmd.ExecuteReader();

            queryString = null;

            var dt = new DataTable();
            dt.Load(reader);

            return dt.CreateDataReader().AsEnumerable<Anotacion>(connection).AsQueryable().First();
        }

        protected override IQueryable<Anotacion> RetrieveAll()
        {
            queryString = $"SELECT * FROM {TableName} anv";

            var cmd = new OracleCommand() { Connection = connection, CommandText = queryString };

            var reader = cmd.ExecuteReader();

            queryString = null;

            var dt = new DataTable();
            dt.Load(reader);

            return dt.CreateDataReader().AsEnumerable<Anotacion>(connection).AsQueryable();
        }
    }
} // end namespace WebLegemDAL.DAL