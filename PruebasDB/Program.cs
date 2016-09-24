﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Models;
using WebLegemDAL.Dao;
using WebLegemDAL.QueryObjects;
using WebLegemDAL.DAO;

namespace PruebasDB
{
    class Program
    {                        
        static TipoDocumentoDao tipoDocumentoDal = new TipoDocumentoDao();
        static TipoEntidadDao tipoEntidadDal = new TipoEntidadDao();
        static RolDao rolDal = new RolDao();
        static PermisoDao permisoDao = new PermisoDao();
        static UsuarioDao usuarioDao = new UsuarioDao();        

        static EntidadDao entidadDal = new EntidadDao();
        static DocumentoConContenidoDao documentoDal = new DocumentoConContenidoDao();

        static void Main(string[] args)
        {
            // do work
            //ListarTiposDocumento();
            //ListarTiposEntidad();
            //ListarEntidades();
            //ListarDocumentos();
            ListarRoles();
            //ListarPermisos();
            //ListarUsuarios();

            //CrearTiposDocumento();
            //CrearTiposEntidad();
            //CrearEntidades();
            //Console.WriteLine( $"{tipoEntidadDal.Get(2)}" );            
            // ConsultarDocumentos();
            //CrearRol();
            //ListarRoles();

            //EliminarTiposDocumento();
            //EliminarUsuarios();
            //EliminarRol();

            //ActualizarTiposDocumento();
            ActualizarRol();
            ListarRoles();

            //listar resultados
            //ListarTiposDocumento();
            //ListarTiposEntidad();
            //ListarEntidades();


            //CrearDocumentos();
            //ListarDocumentos();  
            Console.ReadKey();       
        }

        private static void ActualizarRol()
        {
            var rol = rolDal.GetAll().Where(r => r.Id == 5).First();

            rol.PermisosAsignados = permisoDao
                .GetAll()
                .Where(p => p.Recurso.Nombre == "Usuarios")
                .ToArray();

            rolDal.Update( rol );
        }

        private static void EliminarRol()
        {
            rolDal.Delete( 4 );
        }

        private static void CrearRol()
        {
            var permisos = permisoDao.GetAll();

            var rol = new Rol() { Id = 0, Nombre = "Nuevo Rol" };
            rol.PermisosAsignados = permisos
                .Where(p => p.Recurso.Nombre == "Usuarios")
                .ToArray();

            rolDal.Create( rol );
        }

        private static void EliminarUsuarios()
        {
            usuarioDao.Delete( 1 );
        }

        private static void ListarUsuarios()
        {
            var lista = usuarioDao.GetAll();

            foreach (var u in lista)
                Console.WriteLine( u );

            Console.WriteLine(lista.Count() == 0 ? "No hay nada" : "Existen Usuarios");
        }

        private static void ListarPermisos()
        {
            var lista = permisoDao.GetAll();

            foreach (var td in lista)
            {
                Console.WriteLine(td);
            }
        }

        private static void ListarRoles()
        {

            var lista = rolDal.GetAll().OrderBy( x => x.Id );

            foreach (var td in lista)
            {
                Console.WriteLine(td);
            }
        }

        static void ConsultarDocumentos()
        {
            var documentoConContenido = new DocumentoConContenidoQueryObject() { PalabrasABuscar = "CONTROL INTERNO" };
            

            var lista = documentoDal.Consultar(documentoConContenido);
            
            foreach (var documento in lista)
            {
                Console.WriteLine( documento );
            }
        }

        static void CrearTiposDocumento()
        {            
            var lista = new List<TipoDocumento>();
            lista.Add( new TipoDocumento() { Id = 0, Nombre = "Tipo desde .NET" } );            
            
            for( int i = 0; i < lista.Count; i++ )
            {
                var td = lista.ElementAt(i);
                tipoDocumentoDal.Create( td );                
            } // end foreach                        
        }

        static void ListarTiposDocumento()
        {            
            var lista = tipoDocumentoDal.GetAll();

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
                tipoEntidadDal.Create( te );
            } // end foreach
        }

        static void ListarTiposEntidad()
        {
            var lista = tipoEntidadDal.GetAll();

            foreach (var te in lista)
            {
                Console.WriteLine(te);
            }
        }

        static void CrearEntidades()
        {
            var listaTipos = tipoEntidadDal.GetAll();

            var lista = new List<Entidad>();
            lista.Add(new Entidad() { Id = 0, Nombre = "Rectoria", TipoEntidad = listaTipos.ElementAt(0) } );
            lista.Add(new Entidad() { Id = 0, Nombre = "Facultad de Ingeniería", TipoEntidad = listaTipos.ElementAt(1) });
            lista.Add(new Entidad() { Id = 0, Nombre = "Departamento de Sistemas", TipoEntidad = listaTipos.ElementAt(2) });
            lista.Add(new Entidad() { Id = 0, Nombre = "ICFES", TipoEntidad = listaTipos.ElementAt(3) });

            for (int i = 0; i < lista.Count; i++)
            {
                var e = lista.ElementAt(i);
                entidadDal.Create( e );
            }
        }

        static void ListarEntidades()
        {
            var lista = entidadDal.GetAll();

            foreach (var e in lista)
            {
                Console.WriteLine( e );
            }
        }
        /*
        static void CrearDocumentos()
        {
            var listaTiposDoc = tipoDocumentoDal.GetAll();

            var listaEntidades = entidadDal.GetAll();

            var lista = new List<Documento>();

            lista.Add(
                new Documento() {
                    DocId = new IdDocumento() {
                        Entidad = listaEntidades.ElementAt(1).Id,
                        TipoDocumento = listaTiposDoc.ElementAt(2).Id,
                        Numero = "0004",
                        FechaPublicacion = "1995"
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
        */
        static void ListarDocumentos()
        {
            var lista = documentoDal.GetAll();

            foreach (var e in lista)
            {
                Console.WriteLine(e);
            }
        }

        static void ActualizarTiposDocumento()
        {
            var lista = new List<TipoDocumento>();
            lista.Add(new TipoDocumento() { Id = 5, Nombre = "Resolución" });

            for (int i = 0; i < lista.Count; i++)
            {
                var td = lista.ElementAt(i);
                tipoDocumentoDal.Update(td);
            } // end foreach                        
        }

        static void EliminarTiposDocumento()
        {
            tipoDocumentoDal.Delete( 7 );
        }
    }
}
