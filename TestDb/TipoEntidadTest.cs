using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Dao;
using WebLegemDAL.Models;

namespace TestDb
{
    public class TipoEntidadTest
    {
        public static void CreateTE()
        {
            var dao = new TipoEntidadDao();
            var daoTd = new TipoDocumentoDao();
            var te = new TipoEntidad();
            te.Nombre = "Rectoria";
            te.DocumentosSoportados = new TipoDocumento[] {
                daoTd.Get(26).Value,
                daoTd.Get(27 ).Value,
                daoTd.Get(28).Value,
                daoTd.Get( 29).Value,
                daoTd.Get( 30 ).Value
            };

            te = dao.Create( te ).Value;
            Console.WriteLine( te );
        }

        public static void PrintTE()
        {
            var dao = new TipoEntidadDao();
            Console.WriteLine(dao.Get( 3 ).Value);
        }

        public static void PrintAllTe()
        {
            var dao = new TipoEntidadDao();
            dao.GetAll().ToList<TipoEntidad>().ForEach( (x) => Console.WriteLine(x) );
        }

        public static void UpdateTe()
        {
            var dao = new TipoEntidadDao();
            var daoTd = new TipoDocumentoDao();
            var te = dao.Get( 3 ).Value;

            te.DocumentosSoportados = new TipoDocumento[] {
                daoTd.Get( 26 ).Value,
                daoTd.Get( 30).Value
            };

            te = dao.Update( te ).Value;

            Console.WriteLine( te );
        }

        public static void DeleteTe()
        {
            var dao = new TipoEntidadDao();
            dao.Delete( dao.Get(3).Value.Id );
        }

        public static void DeleteAllTe()
        {
            var dao = new TipoEntidadDao();
            dao.GetAll()
                .ToList<TipoEntidad>()
                .ForEach( (x) => dao.Delete( x.Id ) );
        }

        public static void PopulateTe()
        {
            var dao = new TipoEntidadDao();
            var daoTd = new TipoDocumentoDao();

            dao.Create(new TipoEntidad() {
                Nombre = "Rectoria",
                DocumentosSoportados = new TipoDocumento[] {
                    daoTd.Get(1).Value,
                    daoTd.Get(2).Value,
                    daoTd.Get(3).Value,
                    daoTd.Get(4).Value,
                    daoTd.Get(5).Value
                }
            } );


            dao.Create(new TipoEntidad()
            {
                Nombre = "Facultad",
                DocumentosSoportados = new TipoDocumento[] {
                    daoTd.Get(1).Value,
                    daoTd.Get(2).Value,
                    daoTd.Get(3).Value,
                    daoTd.Get(4).Value
                }
            });


            dao.Create(new TipoEntidad()
            {
                Nombre = "Programa",
                DocumentosSoportados = new TipoDocumento[] {
                    daoTd.Get(1).Value,
                    daoTd.Get(2).Value,
                    daoTd.Get(3).Value,
                }
            });


            dao.Create(new TipoEntidad()
            {
                Nombre = "Secretaría",
                DocumentosSoportados = new TipoDocumento[] {
                    daoTd.Get(1).Value,
                    daoTd.Get(2).Value
                }
            });
        }
    }
}
