using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.DAO2;
using WebLegemDAL.Models;

namespace TestDb
{
    public class ArchivoTest
    {
        public static void CreateAr()
        {
            var dao = new ArchivoDao();

            var a = dao.Create( new Archivo() { Ruta = @"C:\oradata\web_legem\BodyPart_7b7d83fc-5d6d-47ef-b429-b3f6288f7b23.pdf" } );
            Console.WriteLine( a );
        }

        public static void GetAr()
        {
            var dao = new ArchivoDao();
            Console.WriteLine( dao.Get(1).Value );
        }
    }
}
