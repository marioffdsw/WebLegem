using Oracle.DataAccess.Client;
using Oracle.DataAccess.Types;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Dao;

namespace WebLegemDAL.Dao
{
    public class ArchivoDao : BaseDao<Archivo>
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

            var param = new OracleParameter( "secuencia", OracleDbType.Decimal );
            param.Direction = ParameterDirection.ReturnValue;

            cmd.Parameters.Add( param );
            cmd.ExecuteNonQuery();

            queryString = $"INSERT INTO archivos_tab VALUES( {((OracleDecimal) param.Value).ToInt32()}, '{registro.Nombre}' )";
            var cmd2 = new OracleCommand() { Connection = connection, CommandText = queryString };
            cmd2.ExecuteNonQuery();

            return new Archivo { Id = ((OracleDecimal)param.Value).ToInt32(), Nombre = registro.Nombre };
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

            reader.Read();

            return new Archivo { Id = reader.GetInt32(0), Nombre = reader.GetString(1) };                        
        }

        protected override IQueryable<Archivo> RetrieveAll()
        {
            throw new NotImplementedException();
        }
    }
}
