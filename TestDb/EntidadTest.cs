using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Dao;
using WebLegemDAL.Models;

namespace TestDb
{
    public class EntidadTest
    {
        public static void CreateE()
        {
            var dao = new EntidadDao();
            var daoTe = new TipoEntidadDao();

            var te = daoTe.Get(4).Value;
            Console.WriteLine( te );

            var e = dao.Create(new Entidad() {
                Nombre = "Rectoria",
                TipoEntidad = te
            } ).Value;

            Console.WriteLine( e );
        }

        public static void GetAllE()
        {
            var dao = new EntidadDao();
            dao.GetAll().ToList<Entidad>().ForEach( (x) => Console.WriteLine(x) );
        }

        public static void GetE()
        {
            var dao = new EntidadDao();
            Console.WriteLine( dao.Get( 3 ).Value );
        }

        public static void DeleteE()
        {
            var dao = new EntidadDao();
            dao.Delete(dao.Get(1).Value.Id);
        }

        public static void UpdateE()
        {
            var dao = new EntidadDao();
            var e = dao.Get( 3 ).Value;
            e.Nombre = "Rectorias";
            e.TipoEntidad = new TipoEntidadDao().Get( 6 ).Value;

            e = dao.Update( e ).Value;
            Console.WriteLine( e );
        }

        public static void DeleteAllE()
        {
            var dao = new EntidadDao();
            dao.GetAll()
                .ToList<Entidad>()
                .ForEach( x => dao.Delete( x.Id ) );
        }

        public static void PopulateE()
        {
            var dao = new EntidadDao();
            var daoTe = new TipoEntidadDao();

            dao.Create(new Entidad() {
                Nombre = "Rectoria",
                TipoEntidad = daoTe.Get(4).Value
            });

            dao.Create(new Entidad()
            {
                Nombre = "Facultad de Ingeniería",
                TipoEntidad = daoTe.Get(5).Value
            });


            dao.Create(new Entidad()
            {
                Nombre = "Facultad de Medicina",
                TipoEntidad = daoTe.Get(5).Value
            });

            dao.Create(new Entidad()
            {
                Nombre = "Ingenieria de Sistemas",
                TipoEntidad = daoTe.Get(6).Value
            });

            dao.Create(new Entidad()
            {
                Nombre = "Ingeniería Electronica",
                TipoEntidad = daoTe.Get(6).Value
            });

            dao.Create(new Entidad()
            {
                Nombre = "Derecho",
                TipoEntidad = daoTe.Get(6).Value
            });
        }

    }
}
