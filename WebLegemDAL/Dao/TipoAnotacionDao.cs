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
    public class TipoAnotacionDao : BaseDao<TipoAnotacion>
    {

        /**********************************************************************************
         **********************************************************************************
         *
         *   PROPERTIES
         *   
         **********************************************************************************/

        public override string TableName
        {
            get { return "tipos_anotacion_view"; }
        } // fin prop TableName
        
        public string UdtTypeName
        {
            get { return "WEB_LEGEM.TIPO_ANOTACION_TYP"; }
        } // fin prop UdtTypeName



        /**********************************************************************************
         **********************************************************************************
         *
         *   OVERWRITTEN METHODS
         *   
         **********************************************************************************/

        protected sealed override IQueryable<TipoAnotacion> RetrieveAll()
        {
            queryString = $"SELECT * FROM {TableName} tav";

            OracleCommand cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            OracleDataReader reader = cmd.ExecuteReader();

            queryString = null;

            var dt = new DataTable();
            dt.Load(reader);

            return dt.CreateDataReader().AsEnumerable<TipoAnotacion>().AsQueryable();
        } // fin method RetrieveAll

        protected sealed override TipoAnotacion Retrieve(int id)
        {
            queryString = $"SELECT * FROM {TableName} te WHERE te.entidad.id = :id";

            OracleCommand cmd = new OracleCommand() { Connection = connection, CommandText = queryString };

            OracleParameter idParam = cmd.Parameters.Add( ":id", id );
            idParam.Direction = ParameterDirection.Input;

            OracleDataReader reader = cmd.ExecuteReader();

            queryString = null;

            var dt = new DataTable();
            dt.Load(reader);

            return dt.CreateDataReader().AsEnumerable<TipoAnotacion>().AsQueryable().First();
        }

        protected sealed override TipoAnotacion Insert(TipoAnotacion registro)
        {
            OracleCommand cmd = new OracleCommand($"INSERT INTO {TableName} VALUES( :td )", connection);
            OracleParameter td = cmd.Parameters.Add(":td", OracleDbType.Object);
            td.UdtTypeName = UdtTypeName;
            td.Direction = ParameterDirection.InputOutput;
            td.Value = registro;

            cmd.ExecuteNonQuery();

            return (TipoAnotacion) td.Value;
        } // fin method Insert

        protected sealed override TipoAnotacion Modify(TipoAnotacion registro)
        {
            queryString = $"UPDATE {TableName} tav SET tav.tipo_anotacion = :ta WHERE tav.tipo_anotacion.id = :id";

            var cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            var ta = cmd.Parameters.Add( ":ta", OracleDbType.Object );
            ta.UdtTypeName = UdtTypeName;
            ta.Direction = ParameterDirection.InputOutput;
            ta.Value = registro;

            var id = cmd.Parameters.Add( ":id", OracleDbType.Int32 );
            id.Direction = ParameterDirection.Input;
            id.Value = registro.Id;

            cmd.ExecuteNonQuery();

            return (TipoAnotacion) ta.Value;
        } // end method Modify

        protected sealed override void Remove(int id)
        {
            queryString = $"DELETE FROM {TableName} tav WHERE tav.tipo_anotacion.id = :id";

            var cmd = new OracleCommand( queryString, connection );

            var idParam = cmd.Parameters.Add( ":id", OracleDbType.Int32 );
            idParam.Direction = ParameterDirection.Input;
            idParam.Value = id;

            cmd.ExecuteNonQuery();
        } // fin method Remove

    } // fin class TipoAnotacionDao
} // fin namespace WebLegemDAL.DAL
