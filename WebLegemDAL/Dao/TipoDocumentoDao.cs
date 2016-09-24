using System.Linq;
using Oracle.DataAccess.Client;
using WebLegemDAL.Models;
using System.Data;

namespace WebLegemDAL.Dao
{
    public class TipoDocumentoDao : BaseDao<TipoDocumento>
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
                return "tipos_documento_view";
            }
        } // fin prop TableName
        
        public string UdtTypeName
        {
            get
            {
                return "WEB_LEGEM.TIPO_DOCUMENTO_TYP";
            }
        } // fin prop UdtTypeName



        /**********************************************************************************
         **********************************************************************************
         *
         *   OVERRITEN METHODS
         *   
         **********************************************************************************/

        protected sealed override IQueryable<TipoDocumento> RetrieveAll()
        {
            queryString = $"SELECT * FROM {TableName} tdv";

            OracleCommand cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            OracleDataReader reader = cmd.ExecuteReader();

            queryString = null;
            
            return reader.ToList<TipoDocumento>().AsQueryable();
        }

        protected sealed override TipoDocumento Retrieve(int id)
        {
            queryString = $"SELECT VALUE(td) FROM {TableName} td WHERE td.tipo_documento.id = {id}";
            OracleCommand cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            OracleDataReader reader = cmd.ExecuteReader();

            queryString = null;

            return reader.ToList<TipoDocumento>().AsQueryable().First();
        }

        protected sealed override TipoDocumento Insert( TipoDocumento tipoDocumento)
        {
            OracleCommand cmd = new OracleCommand( $"INSERT INTO {TableName} VALUES( :td )", connection);
            OracleParameter td = cmd.Parameters.Add(":td", OracleDbType.Object);
            td.UdtTypeName = UdtTypeName;
            td.Direction = ParameterDirection.InputOutput;            
            td.Value = tipoDocumento;

            cmd.ExecuteNonQuery();
            
            return (TipoDocumento) td.Value;
        }             

        protected sealed override TipoDocumento Modify( TipoDocumento tipoDocumento )
        {            
            queryString = $"UPDATE {TableName} tdv SET tdv.tipo_documento = :td WHERE tdv.tipo_documento.id = :id";

            OracleCommand cmd = new OracleCommand() { Connection = connection, CommandText = queryString };

            OracleParameter td = cmd.Parameters.Add(":td", OracleDbType.Object);            
            td.UdtTypeName = UdtTypeName;
            td.Direction = ParameterDirection.InputOutput;
            td.Value = tipoDocumento;

            OracleParameter id = cmd.Parameters.Add(":td", OracleDbType.Int32);            
            id.Value = tipoDocumento.Id;

            cmd.ExecuteNonQuery();            

            return (TipoDocumento) td.Value;
        } // end UpdateTipoDocumento method

        protected sealed override void Remove(int id)
        {
            queryString = $"DELETE FROM {TableName} tdv WHERE tdv.tipo_documento.id = {id}";

            OracleCommand cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            cmd.ExecuteNonQuery();
        }       
    }    
}
