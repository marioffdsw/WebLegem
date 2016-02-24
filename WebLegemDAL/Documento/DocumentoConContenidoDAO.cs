﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Oracle.DataAccess.Client;
using WebLegemDAL.Models;
using WebLegemDAL.QueryObjects;
using System.Data;
using Oracle.DataAccess.Types;

namespace WebLegemDAL.DAL
{
    public class DocumentoConContenidoDAO: BaseDAO<DocumentoConContenido>,
        IGestorDeConsultas<DocumentoConContenidoQueryObject, DocumentoConContenido>
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
                return "documentos_contenido_view";
            }
        } // fin prop TableName

        public string UdtTypeName
        {
            get
            {
                return "WEB_LEGEM.DOCUMENTO_CONTENIDO_TYP";
            }
        } // fin prop UdtTypeName



        /**********************************************************************************
         **********************************************************************************
         *
         *   OVERWRITTEN METHODS
         *   
         **********************************************************************************/

        public DocumentoConContenidoDAO() : base() { }



        /**********************************************************************************
         **********************************************************************************
         *
         *   OVERWRITTEN METHODS
         *   
         **********************************************************************************/

        protected sealed override IQueryable<DocumentoConContenido> RetrieveAll()
        {
            queryString = $"SELECT * FROM {TableName} tev";

            OracleCommand cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            OracleDataReader reader = cmd.ExecuteReader();

            queryString = null;

            return reader.ToList<DocumentoConContenido>().AsQueryable();
        }

        protected sealed override DocumentoConContenido Retrieve(int id)
        {
            queryString = $"SELECT * FROM {TableName} te WHERE te.documento_contenido.id = {id}";
            OracleCommand cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            OracleDataReader reader = cmd.ExecuteReader();

            queryString = null;

            return reader.ToList<DocumentoConContenido>().AsQueryable().First();
        }

        protected sealed override DocumentoConContenido Insert(DocumentoConContenido documentoConContenido)
        {
            OracleCommand cmd = new OracleCommand($"INSERT INTO {TableName} VALUES( :td )", connection);

            if (documentoConContenido.Contenido == null)
                documentoConContenido.Contenido = new OracleBFile( connection, "CONTENIDOS_DIR", documentoConContenido.Archivo + ".txt"  );

            OracleParameter td = cmd.Parameters.Add(":td", OracleDbType.Object);
            td.UdtTypeName = UdtTypeName;
            td.Direction = ParameterDirection.InputOutput;
            td.Value = documentoConContenido;

            cmd.ExecuteNonQuery();

            return (DocumentoConContenido)td.Value;
        }

        protected sealed override DocumentoConContenido Modify(DocumentoConContenido documentoConContenido)
        {
            queryString = $"UPDATE {TableName} tev SET tev.documento_contenido = :td WHERE tev.documento_contenido.id = :id";

            OracleCommand cmd = new OracleCommand() { Connection = connection, CommandText = queryString };

            OracleParameter td = cmd.Parameters.Add(":td", OracleDbType.Object);
            td.UdtTypeName = UdtTypeName;
            td.Direction = ParameterDirection.InputOutput;
            td.Value = documentoConContenido;

            OracleParameter id = cmd.Parameters.Add(":td", OracleDbType.Int32);
            id.UdtTypeName = UdtTypeName;
            id.Value = documentoConContenido.Id;

            cmd.ExecuteNonQuery();

            return (DocumentoConContenido) td.Value;
        } // end UpdateTipoDocumento method

        protected sealed override void Remove(int id)
        {
            queryString = $"DELETE FROM {TableName} tev WHERE tev.documento_contenido.id = {id}";

            OracleCommand cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            cmd.ExecuteNonQuery();
        }
        
        public IQueryable<DocumentoConContenido> Consultar(DocumentoConContenidoQueryObject queryObject)
        {
            IQueryable<DocumentoConContenido> resultado = DBOperation( () => 
            {
                queryString = $@"
                    SELECT
                        documento_contenido_typ
                        (
                            ide.id,
                            (SELECT * FROM entidades_view ev WHERE ev.entidad.id = ide.entidad  ),
                          (SELECT * FROM tipos_documento_view tdv WHERE tdv.tipo_documento.id = ide.tipo_documento),
                            ide.numero,
                            ide.anio_publicacion,
                            ca.id,
                            ca.archivo,
                            ca.asunto,
                            ca.contenido
                        ) AS documento_con_contenido
                        FROM identificadores_documentos_tab ide JOIN
                            contenidos_archivos_tab ca ON ide.id = ca.identificador_documento
                        WHERE ca.estado LIKE '%A%'" + (queryObject.PalabrasABuscar != null && queryObject.PalabrasABuscar.Length != 0 ? $" AND CONTAINS( ca.contenido, '{queryObject.PalabrasABuscar}', 1 ) > 0 ORDER BY SCORE(1)" : "");

                OracleCommand cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
                OracleDataReader reader = cmd.ExecuteReader();

                queryString = null;

                return reader.ToList<DocumentoConContenido>().AsQueryable();                            
            } );

            return resultado;
        }        
    }
}