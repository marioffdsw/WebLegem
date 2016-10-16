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
    public class RolDao : BaseDao<Rol>
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
                return "roles_view";
            }
        } // end prop Tableame

        public string UdtTypeName
        {
            get { return "WEB_LEGEM.ROL_TYP"; }
        } // end prop UdtTypeName




        /**********************************************************************************
         **********************************************************************************
         *
         *   OVERRITEN METHODS
         *   
         **********************************************************************************/

        protected sealed override IQueryable<Rol> RetrieveAll()
        {
            queryString = $"SELECT * FROM {TableName}";

            var cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            var reader = cmd.ExecuteReader();

            queryString = null;

            var dt = new DataTable();
            dt.Load(reader);

            return dt.CreateDataReader().AsEnumerable<Rol>(connection).AsQueryable();
        } // end method RetrieveAll

        protected sealed override Rol Retrieve(int id)
        {
            queryString = $"SELECT VALUE(r) FROM {TableName} r WHERE r.rol.id = {id}";
            var cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            var reader = cmd.ExecuteReader();

            queryString = null;

            var dt = new DataTable();
            dt.Load(reader);

            return dt.CreateDataReader().AsEnumerable<Rol>(connection).AsQueryable().First();
        } // end method Retrieve

        protected sealed override Rol Insert(Rol registro)
        {
            queryString = $"INSERT INTO {TableName} VALUES( :r )";
            var cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            var r = cmd.Parameters.Add( ":r", OracleDbType.Object );
            r.UdtTypeName = UdtTypeName;
            r.Direction = ParameterDirection.InputOutput;
            r.Value = registro;

            cmd.ExecuteNonQuery();

            return (Rol)r.Value;
        } // end method Insert

        protected sealed override Rol Modify(Rol registro)
        {
            queryString = $"UPDATE {TableName} rv SET rv.rol = :r WHERE rv.rol.id = :id";

            var cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            var r = cmd.Parameters.Add( ":r", OracleDbType.Object );
            r.UdtTypeName = UdtTypeName;
            r.Direction = ParameterDirection.InputOutput;
            r.Value = registro;

            var id = cmd.Parameters.Add( ":id", OracleDbType.Int32 );
            id.Value = registro.Id;

            cmd.ExecuteNonQuery();

            return (Rol)r.Value;
        } // end method Modify

        protected sealed override void Remove(int id)
        {
            queryString = $"DELETE FROM {TableName} rv WHERE rv.rol.id = {id}";
            var cmd = new OracleCommand() { Connection = connection, CommandText = queryString };

            cmd.ExecuteNonQuery();
        }
    } // end namespace RolDAO    
} // end namespace WebLegemDAL.DAL