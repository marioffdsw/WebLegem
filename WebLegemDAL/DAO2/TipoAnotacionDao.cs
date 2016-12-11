﻿using CSharpFunctionalExtensions;
using Oracle.DataAccess.Client;
using Oracle.DataAccess.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Dao;
using WebLegemDAL.Models;

namespace WebLegemDAL.DAO2
{
    public class TipoAnotacionDao
    {
        private string UdtTypeName
        {
            get { return "WEB_LEGEM.TIPO_ANOTACION_TYP"; }
        }

        public IEnumerable<TipoAnotacion> GetAll()
        {
            using (OracleConnection conn = DB.GetOracleConnection())
            using (OracleCommand cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.GET_ALL_TA"))
            {
                var result = DB.AddRefCursorResult( cmd );
                cmd.ExecuteNonQuery();
                var reader = ((OracleRefCursor)result.Value).GetDataReader();
                return reader.AsEnumerable<TipoAnotacion>();
            } // end using cmd
        } // end method GetAll

        public Maybe<TipoAnotacion> Get(int id)
        {
            using (OracleConnection conn = DB.GetOracleConnection())
            using (OracleCommand cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.GET_TA"))
            {
                var result = DB.AddObjectResult( cmd, UdtTypeName );
                DB.AddIdParameter( cmd, id );

                cmd.ExecuteNonQuery();
                return (TipoAnotacion) result.Value;
            } // end using cmd
        } // end method Get

        public Result<TipoAnotacion> Create(TipoAnotacion ta)
        {
            try
            {
                using (OracleConnection conn = DB.GetOracleConnection())
                using (OracleCommand cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.CREATE_TA"))
                {
                    var result = DB.AddObjectResult(cmd, UdtTypeName);
                    DB.AddObjectParameter(cmd, "tipo_anotacion", UdtTypeName, ta);

                    cmd.ExecuteNonQuery();
                    return Result.Ok((TipoAnotacion) result.Value);
                } // end using cmd
            }
            catch (Exception ex)
            {
                // TODO - escribir un mensaje de error adecuado para los tipos de excepciones diferentes
                return Result.Fail<TipoAnotacion>( "mensaje de error" );
            } // end catch
        } // end method Create

        public Maybe<TipoAnotacion> Update(TipoAnotacion ta)
        {
            using (OracleConnection conn = DB.GetOracleConnection())
            using (OracleCommand cmd = DB.GetFuncionCommand(conn, "WEB_LEGEM.UPDATE_TA"))
            {
                var result = DB.AddObjectResult( cmd, UdtTypeName );
                DB.AddObjectParameter( cmd, "new_ta", UdtTypeName, ta );

                cmd.ExecuteNonQuery();
                return (TipoAnotacion) result.Value;
            } // end using cmd
        } // end method Update

        public void Delete(int id)
        {
            using (OracleConnection conn = DB.GetOracleConnection())
            using (OracleCommand cmd = DB.GetFuncionCommand(conn, @"WEB_LEGEM.DELETE_TA"))
            {
                DB.AddIdParameter(cmd, id);

                cmd.ExecuteNonQuery();
            } // end using cmd
        } // end method Delete
    } // end class TipoAnotacionDao
} // end namespace WebLegemDAL.DAO2
