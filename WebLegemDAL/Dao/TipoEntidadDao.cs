using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Oracle.DataAccess.Client;
using WebLegemDAL.Models;
using System.Data;

namespace WebLegemDAL.Dao
{
    public class TipoEntidadDao : BaseDao<TipoEntidad>
    {

        /**********************************************************************************
         *
         *   PROPERTIES
         *   
         **********************************************************************************/

        public override string TableName
        {
            get
            {
                return "tipos_entidad_view";
            }
        }

        public string UdtTypeName
        {
            get
            {
                return "WEB_LEGEM.TIPO_ENTIDAD_TYP";
            }
        }
        
        

        /**********************************************************************************
         *
         *   OVERWRITTEN METHODS
         *   
         **********************************************************************************/

        protected sealed override IQueryable<TipoEntidad> RetrieveAll()
        {
            queryString = $"SELECT * FROM {TableName} tev";

            OracleCommand cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            OracleDataReader reader = cmd.ExecuteReader();

            queryString = null;

            var dt = new DataTable();
            dt.Load(reader);            

            return dt.CreateDataReader().AsEnumerable<TipoEntidad>().AsQueryable();
        }

        protected sealed override TipoEntidad Retrieve(int id)
        {
            queryString = $"SELECT * FROM {TableName} te WHERE te.tipo_entidad.id = {id}";
            OracleCommand cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            OracleDataReader reader = cmd.ExecuteReader();

            queryString = null;

            var dt = new DataTable();
            dt.Load(reader);

            return dt.CreateDataReader().AsEnumerable<TipoEntidad>().AsQueryable().First();
        }

        protected sealed override TipoEntidad Insert( TipoEntidad tipoEntidad )
        {            
            var cmd = new OracleCommand( "WEB_LEGEM.CREAR_TIPO_ENTIDAD_FUN" );
            cmd.BindByName = true;
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Connection = connection;

            // get result from oracle function
            var result = new OracleParameter();
            result.OracleDbType = OracleDbType.Object;
            result.UdtTypeName = UdtTypeName;
            result.Direction = ParameterDirection.ReturnValue;
            result.OracleDbTypeEx = OracleDbType.Object;
            cmd.Parameters.Add(result);

            OracleParameter prm1 = cmd.Parameters.Add("tipo_entidad", OracleDbType.Object);
            prm1.UdtTypeName = UdtTypeName;
            prm1.Direction = ParameterDirection.InputOutput;
            prm1.Value = tipoEntidad;            

            cmd.ExecuteNonQuery();
            var aux = (TipoEntidad)prm1.Value;

            return aux;
        }

        protected sealed override TipoEntidad Modify(TipoEntidad tipoEntidad)
        {
            var cmd = new OracleCommand("WEB_LEGEM.ACTUALIZAR_TIPO_ENTIDAD_FUN");
            cmd.BindByName = true;
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Connection = connection;

            // get result from oracle function
            var result = new OracleParameter();
            result.OracleDbType = OracleDbType.Object;
            result.UdtTypeName = UdtTypeName;
            result.Direction = ParameterDirection.ReturnValue;
            result.OracleDbTypeEx = OracleDbType.Object;
            cmd.Parameters.Add(result);

            OracleParameter prm1 = cmd.Parameters.Add("tipo_entidad", OracleDbType.Object);
            prm1.UdtTypeName = UdtTypeName;
            prm1.Direction = ParameterDirection.InputOutput;
            prm1.Value = tipoEntidad;

            cmd.ExecuteNonQuery();
            var aux = (TipoEntidad)prm1.Value;

            return aux;
        } // end UpdateTipoDocumento method

        protected sealed override void Remove(int id)
        {
            queryString = $"DELETE FROM {TableName} tev WHERE tev.tipo_entidad.id = {id}";

            OracleCommand cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            cmd.ExecuteNonQuery();
        }
    }
}
