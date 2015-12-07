using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Models;
using WebLegemDAL;

namespace PruebasDB
{
    class Program
    {
        static void Main(string[] args)
        {
            var tipoDocumentoDal = new TipoDocumentoDAL();
            string connStr = "user id=web_legem;password=web_legem;data source=ORCL";

            tipoDocumentoDal.OpenConnection(connStr);

            //var tipoDoc = new TipoDocumento() { Nombre = "Carta15" };

            //Console.WriteLine(tipoDoc);

            //tipoDocumentoDal.CreateTipoDocumento( ref tipoDoc);

            //Console.WriteLine(tipoDoc);

            var listaTipDoc = tipoDocumentoDal.GetAllTipoDocumento();

            foreach (var tipoDoc1 in listaTipDoc)
            {
                Console.WriteLine(tipoDoc1);
            }

            Console.WriteLine( "Introduce el id del tipoDocumento a modificar: " );
            int id = Convert.ToInt32( Console.ReadLine() );
            var tipoDoc = tipoDocumentoDal.GetTipoDocumento( id );
            Console.WriteLine( "Este es el tipoDoc seleccionado: {0}", tipoDoc );

            Console.WriteLine( "Digita el nuevo nombre: " );
            tipoDoc.Nombre = Console.ReadLine();

            tipoDocumentoDal.UpdateTipoDocumento(ref tipoDoc);

            Console.WriteLine( "Este es el resultado modificado: {0}", tipoDoc );

            listaTipDoc = tipoDocumentoDal.GetAllTipoDocumento();

            foreach (var tipoDoc1 in listaTipDoc)
            {
                Console.WriteLine(tipoDoc1);
            }

            tipoDocumentoDal.CloseConnection();
        }
    }
}
