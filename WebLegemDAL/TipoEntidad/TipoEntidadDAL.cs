﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Oracle.DataAccess.Client;
using WebLegemDAL.Models;
using System.Data;

namespace WebLegemDAL.DAL
{
    public class TipoEntidadDAO : BaseDAO<TipoEntidad>
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
         *   OVERRIDED METHODS
         *   
         **********************************************************************************/

        protected sealed override IQueryable<TipoEntidad> RetrieveAll()
        {
            queryString = $"SELECT * FROM {TableName} tev";

            OracleCommand cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            OracleDataReader reader = cmd.ExecuteReader();

            queryString = null;

            return reader.ToList<TipoEntidad>().AsQueryable();
        }

        protected sealed override TipoEntidad Retrieve(int id)
        {
            queryString = $"SELECT * FROM {TableName} te WHERE te.tipos_entidad.id = {id}";
            OracleCommand cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            OracleDataReader reader = cmd.ExecuteReader();

            queryString = null;

            return reader.ToList<TipoEntidad>().AsQueryable().First();
        }

        protected sealed override TipoEntidad Insert( TipoEntidad tipoEntidad )
        {
            OracleCommand cmd = new OracleCommand($"INSERT INTO {TableName} VALUES( :td )", connection);
            OracleParameter td = cmd.Parameters.Add(":td", OracleDbType.Object);
            td.UdtTypeName = UdtTypeName;
            td.Direction = ParameterDirection.InputOutput;
            td.Value = tipoEntidad;

            cmd.ExecuteNonQuery();

            return (TipoEntidad)td.Value;
        }

        protected sealed override TipoEntidad Modify(TipoEntidad tipoDocumento)
        {
            queryString = $"UPDATE {TableName} tev SET tev.tipos_entidad = :td WHERE tev.tipos_entidad.id = :id";

            OracleCommand cmd = new OracleCommand() { Connection = connection, CommandText = queryString };

            OracleParameter td = cmd.Parameters.Add(":td", OracleDbType.Object);
            td.UdtTypeName = UdtTypeName;
            td.Direction = ParameterDirection.InputOutput;
            td.Value = tipoDocumento;

            OracleParameter id = cmd.Parameters.Add(":td", OracleDbType.Int32);
            id.UdtTypeName = UdtTypeName;
            id.Value = tipoDocumento.Id;

            cmd.ExecuteNonQuery();

            return (TipoEntidad) td.Value;
        } // end UpdateTipoDocumento method


        protected sealed override void Remove(int id)
        {
            queryString = $"DELETE FROM {TableName} tev WHERE tev.tipos_entidad.id = {id}";

            OracleCommand cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            cmd.ExecuteNonQuery();
        }
    }
}
