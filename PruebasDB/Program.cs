using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Models;
using WebLegemDAL.DAL;

namespace PruebasDB
{
    class Program
    {
        static string connStr = "user id=web_legem;password=web_legem;data source=ORCL";
        static TipoEntidadDAL tipoEntidadDal = new TipoEntidadDAL();
        static TipoDocumentoDAL tipoDocumentoDal = new TipoDocumentoDAL();
        static EntidadDAL entidadDal = new EntidadDAL();
        static DocumentoDAL documentoDal = new DocumentoDAL();

        static void Main(string[] args)
        {
            // open Connection
            tipoDocumentoDal.OpenConnection( connStr  );
            tipoEntidadDal.OpenConnection( connStr );
            entidadDal.OpenConnection( connStr );
            documentoDal.OpenConnection( connStr );

            // do work
            //CrearTiposDocumento();
            //CrearTiposEntidad();
            //CrearEntidades();
           

            //listar resultados
            ListarTiposDocumento();
            ListarTiposEntidad();
            ListarEntidades();
            
            CrearDocumentos();
            ListarDocumentos();
            // close connections
            tipoDocumentoDal.CloseConnection();
            tipoEntidadDal.CloseConnection();
            entidadDal.CloseConnection();
            documentoDal.CloseConnection();
        }

        static void CrearTiposDocumento()
        {            
            var lista = new List<TipoDocumento>();
            lista.Add( new TipoDocumento() { Id = 0, Nombre = "Resolución" } );
            lista.Add(new TipoDocumento() { Id = 0, Nombre = "Carta" });
            lista.Add(new TipoDocumento() { Id = 0, Nombre = "Acuerdo" });
            lista.Add(new TipoDocumento() { Id = 0, Nombre = "Ley" });
            lista.Add(new TipoDocumento() { Id = 0, Nombre = "Circular" });
            
            for( int i = 0; i < lista.Count; i++ )
            {
                var td = lista.ElementAt(i);
                tipoDocumentoDal.CreateTipoDocumento( ref td );                
            } // end foreach                        
        }

        static void ListarTiposDocumento()
        {            
            var lista = tipoDocumentoDal.GetAllTipoDocumento();

            foreach (var td in lista)
            {
                Console.WriteLine( td );
            }
        }

        static void CrearTiposEntidad()
        {            
            var lista = new List<TipoEntidad>();
            lista.Add(new TipoEntidad() { Id = 0, Nombre = "Rectoria" });
            lista.Add(new TipoEntidad() { Id = 0, Nombre = "Facultad" });
            lista.Add(new TipoEntidad() { Id = 0, Nombre = "Departamento" });
            lista.Add(new TipoEntidad() { Id = 0, Nombre = "ICFES" });

            for (int i = 0; i < lista.Count; i++)
            {
                var te = lista.ElementAt(i);
                tipoEntidadDal.CreateTipoEntidad(ref te);
            } // end foreach
        }

        static void ListarTiposEntidad()
        {
            var lista = tipoEntidadDal.GetAllTipoEntidad();

            foreach (var te in lista)
            {
                Console.WriteLine(te);
            }
        }

        static void CrearEntidades()
        {
            var listaTipos = tipoEntidadDal.GetAllTipoEntidad();

            var lista = new List<Entidad>();
            lista.Add(new Entidad() { Id = 0, Nombre = "Rectoria", TipoEntidad = listaTipos.ElementAt(0) } );
            lista.Add(new Entidad() { Id = 0, Nombre = "Facultad de Ingeniería", TipoEntidad = listaTipos.ElementAt(1) });
            lista.Add(new Entidad() { Id = 0, Nombre = "Departamento de Sistemas", TipoEntidad = listaTipos.ElementAt(2) });
            lista.Add(new Entidad() { Id = 0, Nombre = "ICFES", TipoEntidad = listaTipos.ElementAt(3) });

            for (int i = 0; i < lista.Count; i++)
            {
                var e = lista.ElementAt(i);
                entidadDal.CreateEntidad( ref e );
            }
        }

        static void ListarEntidades()
        {
            var lista = entidadDal.GetAllEntidad();

            foreach (var e in lista)
            {
                Console.WriteLine( e );
            }
        }

        static void CrearDocumentos()
        {
            var listaTiposDoc = tipoDocumentoDal.GetAllTipoDocumento();

            var listaEntidades = entidadDal.GetAllEntidad();

            var lista = new List<Documento>();

            lista.Add(
                new Documento() {
                    DocId = new IdDocumento() {
                        Entidad = listaEntidades.ElementAt(1).Id,
                        TipoDocumento = listaTiposDoc.ElementAt(2).Id,
                        Numero = "0003",
                        FechaPublicacion = "1993"
                    },
                    Asunto = "Asunto del Doc 1",
                    NombreDocumentoProcesado = "1.txt",
                    //FechaExpedicion = new DateTime(),
                    RutaAlArchivo = @"C:/oradata/web_legem" + @"/1.txt"

                }                     
            );

            for (int i = 0; i < lista.Count; i++)
            {
                var te = lista.ElementAt(i);
                documentoDal.CreateDocumento(ref te);
            } // end foreach
        }

        static void ListarDocumentos()
        {
            var lista = documentoDal.GetAllDocumentos();

            foreach (var e in lista)
            {
                Console.WriteLine(e);
            }
        }
    }
}
