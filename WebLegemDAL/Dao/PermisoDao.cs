﻿using Oracle.DataAccess.Client;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Models;

namespace WebLegemDAL.Dao
{
    public class PermisoDao : BaseDao<Permiso>
    {
        public override string TableName
        {
            get
            {
                return "permisos_view";
            }
        }

        public string UdtTypeName
        {
            get { return "WEB_LEGEM.PERMISO_TYP"; }
        } // end prop UdtTypeName

        protected override Permiso Insert(Permiso registro)
        {
            throw new NotImplementedException();
        }

        protected override Permiso Modify(Permiso registro)
        {
            throw new NotImplementedException();
        }

        protected override void Remove(int id)
        {
            throw new NotImplementedException();
        }

        protected override Permiso Retrieve(int id)
        {
            throw new NotImplementedException();
        }

        protected override IQueryable<Permiso> RetrieveAll()
        {
            queryString = $"SELECT * FROM {TableName}";
            var cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            var reader = cmd.ExecuteReader();

            queryString = null;

            var dt = new DataTable();
            dt.Load(reader);

            return dt.CreateDataReader().AsEnumerable<Permiso>(connection).AsQueryable();
        }
    } // end class PermisoDAL
} // end namespace WebLegemDAL.DAL
