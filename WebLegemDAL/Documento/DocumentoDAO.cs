using Oracle.DataAccess.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Models;
using WebLegemDAL.QueryObjects;


namespace WebLegemDAL.DAL
{
    public class DocumentoDAO : BaseDAO<Documento>, IGestorDeConsultas<DocumentoQueryObject, Documento>
    {
        private const int VarcharMaxLenght = 4000;

        public override string TableName
        {
            get { return "documentos_view"; }
        } // end prop TableName

        public string UdtTypeName
        {
            get { return "WEB_LEGEM.DOCUMENTO_TYP"; }
        } // end prop UdtTypeName
            

        public DocumentoDAO() : base() {}

        public IQueryable<Documento> Consultar( DocumentoQueryObject queryObject )
        {
            IQueryable<Documento> resultado = DBOperation( () => {
                queryString = $@"
                    SELECT
                    documento_typ
                    (
                        ide.id,
                        (SELECT * FROM entidades_view ev WHERE ev.entidad.id = ide.entidad  ),
                        (SELECT * FROM tipos_documento_view tdv WHERE tdv.tipo_documento.id = ide.tipo_documento),
                        ide.numero,
                        ide.fecha_publicacion,
                    ) AS documento
                    FROM identificadores_documentos_tab 
                    WHERE CONTAINS( ca.contenido, '{queryObject.PalabrasABuscar}', 1 ) > 0 ORDER BY SCORE(1)";

                var cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
                var reader = cmd.ExecuteReader();

                queryString = null;

                return reader.ToList<Documento>().AsQueryable();
            });

            return resultado;            
        } // end method Consultar   

        protected override Documento Retrieve(int id)
        {
            throw new NotImplementedException();
        }

        protected override IQueryable<Documento> RetrieveAll()
        {
            queryString = $"SELECT * FROM {TableName} tev";

            OracleCommand cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            OracleDataReader reader = cmd.ExecuteReader();

            queryString = null;

            return reader.ToList<Documento>().AsQueryable();
        }

        protected override Documento Insert(Documento registro)
        {
            throw new NotImplementedException();
        }

        protected override Documento Modify(Documento registro)
        {
            throw new NotImplementedException();
        }

        protected override void Remove(int id)
        {
            throw new NotImplementedException();
        }
    } // end class DocumentoDAO
} // end namespace WebLegemDAL.DAL
