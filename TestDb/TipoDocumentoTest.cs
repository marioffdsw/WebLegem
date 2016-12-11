using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.DAO;
using WebLegemDAL.Models;

namespace TestDb
{
    public class TipoDocumentoTest
    {
        public static void Create()
        {
            var dao = new TipoDocumentoDao();
            var td = new TipoDocumento();

            td.Nombre = "Carta";

            td = dao.Create( td ).Value;
            Console.WriteLine( td );
        } // end method Create

        public static void Update() {
            var dao = new TipoDocumentoDao();
            var td = dao.Get( 15 ).Value;
            td.Nombre = "Cartas";
            dao.Update(td);
        } // end method Update

        public static void Get()
        {
            var dao = new TipoDocumentoDao();
            var td = dao.Get( 15 ).Value;

            Console.WriteLine( td );
        } // end method Get

        public static void GetAll()
        {
            var dao = new TipoDocumentoDao();
            var lista = dao.GetAll();

            lista.ToList<TipoDocumento>()
                .ForEach( x => Console.WriteLine(x) );
        } // method GetAll

        public static void Delete()
        {
            var dao = new TipoDocumentoDao();
            var td = dao.Get( 13 ).Value;

            dao.Delete( td.Id );
        } // end method Delete

        public static void Populate()
        {
            var dao = new TipoDocumentoDao();
            dao.Create( new TipoDocumento() { Nombre = "Acta" } );
            dao.Create(new TipoDocumento() { Nombre = "Resolución" });
            dao.Create(new TipoDocumento() { Nombre = "Circular" });
            dao.Create(new TipoDocumento() { Nombre = "Ley" });
            dao.Create(new TipoDocumento() { Nombre = "Acuerdo" });
        }

        public static void DeleteAll()
        {
            var dao = new TipoDocumentoDao();
            dao.GetAll()
                .ToList<TipoDocumento>()
                .ForEach( (x) => dao.Delete(x.Id) );
        }
    } // end class tipoDocumentoTest
} // end namespace TestDb
