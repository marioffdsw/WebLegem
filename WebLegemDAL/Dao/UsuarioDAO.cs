using System.Linq;
using Oracle.DataAccess.Client;
using WebLegemDAL.Models;
using System.Data;
using WebLegemDAL.Dao;
using System;

namespace WebLegemDAL.DAO
{
    public class UsuarioDao : BaseDao<Usuario>
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
                return "usuarios_view";
            }
        } // end prop TableName

        public string UdtTypeName
        {
            get { return "WEB_LEGEM.USUARIO_TYP"; }
        } // end prop UdtTypeName

        protected override Usuario Insert(Usuario registro)
        {
            queryString = $"INSERT INTO {TableName} uv values ( :usuario )";
            var cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            var usuarioParam = cmd.Parameters.Add( ":usuario", OracleDbType.Object );
            usuarioParam.Direction = ParameterDirection.InputOutput;
            usuarioParam.UdtTypeName = UdtTypeName;
            usuarioParam.Value = registro;

            cmd.ExecuteNonQuery();

            return (Usuario) usuarioParam.Value;
        }

        protected override Usuario Modify(Usuario registro)
        {
            throw new NotImplementedException();
        }

        protected override void Remove(int id)
        {
            queryString = $"DELETE FROM {TableName} uv WHERE uv.usuario.id = {id}";
            var cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            cmd.ExecuteNonQuery();
        }

        protected override Usuario Retrieve(int id)
        {
            queryString = $"SELECT * FROM {TableName} uv WHERE uv.usuario.id == {id}";
            var cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            var reader = cmd.ExecuteReader();

            queryString = null;

            var dt = new DataTable();
            dt.Load(reader);

            return dt.CreateDataReader().AsEnumerable<Usuario>(connection).AsQueryable().First();
        }

        protected override IQueryable<Usuario> RetrieveAll()
        {
            queryString = $"SELECT * FROM {TableName}";
            var cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            var reader = cmd.ExecuteReader();

            queryString = null;

            var dt = new DataTable();
            dt.Load(reader);

            return dt.CreateDataReader().AsEnumerable<Usuario>(connection).AsQueryable();      
        }
    } // end class usuario DAO
} // end namespace WebLegemDAL.DAO