using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Dao;
using WebLegemDAL.Models;

namespace TestDb
{
    public class RecursosTest
    {
        public static void GetAll()
        {
            var dao = new RecursoDao();
            dao.GetAll()
                .ToList<Recurso>()
                .ForEach( x => Console.WriteLine(x) );
        } // endm method GetAllRec
    } // end class RecursosTest
} // end namespace TestDb
