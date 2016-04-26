using System.Linq;
using Oracle.DataAccess.Client;
using WebLegemDAL.Models;
using System.Data;
using WebLegemDAL.DAL;
using System;

namespace WebLegemDAL.DAO
{
    public class UsuarioDAO : BaseDAO<Usuario>
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
            throw new NotImplementedException();
        }

        protected override Usuario Modify(Usuario registro)
        {
            throw new NotImplementedException();
        }

        protected override void Remove(int id)
        {
            throw new NotImplementedException();
        }

        protected override Usuario Retrieve(int id)
        {
            queryString = $"SEELCT * FROM {TableName} uv WHERE uv.usuario.id == {id}";
            var cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            var reader = cmd.ExecuteReader();

            queryString = null;

            return reader.ToList<Usuario>().AsQueryable().First();
        }

        protected override IQueryable<Usuario> RetrieveAll()
        {
            queryString = $"SELECT * FROM {TableName}";
            var cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            var reader = cmd.ExecuteReader();

            queryString = null;

            return reader.ToList<Usuario>().AsQueryable();      
        }
    } // end class usuario DAO
} // end namespace WebLegemDAL.DAO