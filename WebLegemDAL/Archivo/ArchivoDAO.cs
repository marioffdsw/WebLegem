using Oracle.DataAccess.Client;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.DAL;

namespace WebLegemDAL.Archivo
{
    public class ArchivoDAO : BaseDAO<Archivo>
    {
        public override string TableName
        {
            get
            {
                return "archivos_tab";
            }
        }

        protected sealed override Archivo Insert(Archivo registro)
        {

            // TODO - recibir el archivo .pdf o .docx, almacenarlo en disco duro, antes de guardar en base de datos

            queryString = "WEB_LEGEM.OBTENER_ARCHIVO_SEQ_FUN";
            var cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            cmd.CommandType = CommandType.StoredProcedure;

            var param = new OracleParameter( "secuencia", OracleDbType.Int32 );
            param.Direction = ParameterDirection.ReturnValue;

            cmd.Parameters.Add( param );
            cmd.ExecuteNonQuery();

            queryString = $"INSERT INTO archivos_tab VALUES( {(int)param.Value}, '{(int)param.Value + registro.Extension}' );";
            var cmd2 = new OracleCommand() { Connection = connection, CommandText = queryString };
            cmd.ExecuteNonQuery();

            return new Archivo { Id = (int)param.Value, Nombre = (int) param.Value + registro.Extension };
        }

        protected override Archivo Modify(Archivo registro)
        {
            throw new NotImplementedException();
        }

        protected override void Remove(int id)
        {
            throw new NotImplementedException();
        }

        protected override Archivo Retrieve(int id)
        {
            queryString = $"SELECT * FROM archivos_tab WHERE id = {id}";
            var cmd = new OracleCommand() { Connection = connection, CommandText = queryString };
            var reader = cmd.ExecuteReader();

            return new Archivo { Id = (int)reader.GetValue(0), Nombre = (string) reader.GetValue(1) };
        }

        protected override IQueryable<Archivo> RetrieveAll()
        {
            throw new NotImplementedException();
        }
    }
}
