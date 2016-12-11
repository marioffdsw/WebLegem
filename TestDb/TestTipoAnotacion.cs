using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Dao;
using WebLegemDAL.Models;

namespace TestDb
{
    public class TestTipoAnotacion
    {
        public static void CreateTa()
        {
            var dao = new TipoAnotacionDao();
            var ta = new TipoAnotacion();
            ta.Nombre = "Deroga";
            ta.Raiz = "Derog";
            dao.Create( ta );
        }

        public static void GetAllTa() {
            var dao = new TipoAnotacionDao();
            dao.GetAll()
                .ToList<TipoAnotacion>()
                .ForEach( (x) => Console.WriteLine(x) );
        }

        public static void GetTa()
        {
            var dao = new TipoAnotacionDao();
            Console.WriteLine(dao.Get( 3 ).Value);
        }

        public static void UpdateTa()
        {
            var dao = new TipoAnotacionDao();
            var ta = dao.Get(3).Value;
            ta.Nombre = "Modificacion";
            ta.Raiz = "Modific";
            ta = dao.Update( ta ).Value;
            Console.WriteLine( ta );
        }

        public static void DeleteTa()
        {
            var dao = new TipoAnotacionDao();
            dao.Delete(dao.Get( 3 ).Value.Id );
        }

        public static void DeleteAll()
        {
            var dao = new TipoAnotacionDao();
            dao.GetAll()
                .ToList<TipoAnotacion>()
                .ForEach( x => dao.Delete( x.Id ) );
        }

        public static void PopulateTa()
        {
            var dao = new TipoAnotacionDao();

            dao.Create( new TipoAnotacion() { Nombre = "Deroga", Raiz = "Derog" } );
            dao.Create(new TipoAnotacion() { Nombre = "Modifica", Raiz = "Modific" });
            dao.Create(new TipoAnotacion() { Nombre = "Reglamenta", Raiz = "Reglament" });
        }
    }
}
