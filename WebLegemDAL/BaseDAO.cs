using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Oracle.DataAccess.Client;
using System.Data;
using Oracle.DataAccess.Types;

namespace WebLegemDAL.DAL
{
    public abstract class BaseDAO<T> : IDataAccessObject<T>
    {
        /**********************************************************************************
         *
         *   ATRIBUTES
         *   
         **********************************************************************************/

        const string connectionString =
            "user id = web_legem; password=web_legem;data source=ORCL";
        protected OracleConnection connection;
        protected static OracleCommand command;
        protected static string queryString;        



        /**********************************************************************************
         *
         *   PROPERTIES
         *   
         **********************************************************************************/

        public abstract string TableName{ get;  }                              

        public OracleConnection Connection
        {
            get
            {
                return connection;
            }

            set
            {
                value.ConnectionString = connectionString;
                connection = value;
            }
        }


        /**********************************************************************************
         *
         *   CONSTRUCTORS
         *   
         **********************************************************************************/
        public BaseDAO()
        {
            this.connection = new OracleConnection( connectionString );
        } // fin constructor



        /**********************************************************************************
         *
         *   OVERWRITTEN METHODS
         *   
         **********************************************************************************/

        public IQueryable<T> GetAll()
        {
            IQueryable<T> queryResult = DBOperation( RetrieveAll );
            return queryResult;
        }        

        public T Get(int id)
        {
            T queryResult = DBOperation<Int32, T>( Retrieve, id );
            return queryResult;
        }        

        public T Create(T registro )
        {
            T queryResult = DBOperation( Insert, registro );
            return queryResult;
        }
        
        public T Update( T registro )
        {
            T queryResult = DBOperation( Modify, registro );
            return queryResult;
        }
        
        public void Delete(int id)
        {
            DBOperation( Remove, id );
        }



        /**********************************************************************************
         *
         *   PRIVATE METHODS
         *   
         **********************************************************************************/

        private void OpenConnection()
        {
            connection = new OracleConnection(connectionString);
            connection.Open();
        }

        private void CloseConnection()
        {
            connection.Close();
            connection.Dispose();        
        }

        protected TResult DBOperation<TResult>(Func<TResult> operation)
        {
            OpenConnection();
            TResult result = operation();
            CloseConnection();
            return result;
        }

        protected TResult DBOperation<TParam, TResult>(Func<TParam, TResult> operation, TParam parametro)
        {
            OpenConnection();
            TResult result = operation(parametro);
            CloseConnection();
            return result;
        }

        protected void DBOperation<TParam>(Action<TParam> operation, TParam parametro)
        {
            OpenConnection();
            operation(parametro);
            CloseConnection();
            return;
        }



        /**********************************************************************************
         *
         *   PROTECTED METHODS
         *   
         **********************************************************************************/

        protected abstract T Retrieve(int id);
        protected abstract IQueryable<T> RetrieveAll();
        protected abstract T Insert(T registro);
        protected abstract T Modify(T registro);
        protected abstract void Remove(int id);        
    }    
}
