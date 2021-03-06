﻿using System;
using System.Collections.Generic;
using System.Web.Http.Dependencies;
using Ninject;
using WebLegemDAL.Models;
using Ninject.Web.Common;
using WebLegemDAL;
//using WebLegemDAL.QueryObjects;
using WebLegemAPI.OCR;
using WebLegemDAL.Dao;
using WebLegemAPI.Models;

namespace WebLegemAPI.Infrastructure
{
    public class NinjectResolver : System.Web.Http.Dependencies.IDependencyResolver,
        System.Web.Mvc.IDependencyResolver
    {
        private IKernel kernel;

        public NinjectResolver() : this(new StandardKernel()) { }

        public NinjectResolver(IKernel ninjectKernel, bool scope = false)
        {
            kernel = ninjectKernel;
            AddBindings(kernel);
        }

        public IDependencyScope BeginScope()
        {
            return this;
        }

        public object GetService(Type serviceType)
        {
            return kernel.TryGet(serviceType);
        }

        public IEnumerable<object> GetServices(Type serviceType)
        {
            return kernel.GetAll(serviceType);
        }

        public void Dispose()
        {
            // do nothing
        }

        //private void AddBindings(IKernel kernel)
        //{
        //    kernel.Bind<IDataAccessObject<TipoDocumento>>().To<TipoDocumentoDao>().InRequestScope();
        //    kernel.Bind<IDataAccessObject<TipoEntidad>>().To<TipoEntidadDao>().InRequestScope();
        //    kernel.Bind<IDataAccessObject<Entidad>>().To<EntidadDao>().InRequestScope();
        //    kernel.Bind<IDataAccessObject<Archivo>>().To<ArchivoDao>().InRequestScope();
        //    kernel.Bind<IDataAccessObject<DocumentoConContenido>>().To<DocumentoConContenidoDao>().InRequestScope();
        //    kernel.Bind<IDataAccessObject<Permiso>>().To<PermisoDao>().InRequestScope();
        //    kernel.Bind<IDataAccessObject<Rol>>().To<RolDao>().InRequestScope();
        //    kernel.Bind<IDataAccessObject<Usuario>>().To<UsuarioDao>().InRequestScope();
        //    kernel.Bind<IDataAccessObject<TipoAnotacion>>().To<TipoAnotacionDao>().InRequestScope();
        //    kernel.Bind<IDataAccessObject<Documento>>().To<DocumentoDao>().InRequestScope();
        //    kernel.Bind<IDataAccessObject<Anotacion>>().To<AnotacionDao>().InRequestScope();

        //    // bindings para gestor de consultas
        //    kernel.Bind<IGestorDeConsultas<DocumentoConContenidoQueryObject, DocumentoConContenido>>().To<DocumentoConContenidoDao>().InRequestScope();

        //    // bindings para el servicio OCR
        //    kernel.Bind<IPdfToText>().To<NiconsoftOcr>().InRequestScope();
        //}

        private void AddBindings(IKernel kernel)
        {
            kernel.Bind<Dictionary<Guid, Archivo>>().To<Dictionary<Guid, Archivo>>().InSingletonScope();
            kernel.Bind<Dictionary<Guid, Documento>>().To<Dictionary<Guid, Documento>>().InSingletonScope();
            kernel.Bind<TipoDocumentoDao>().To<TipoDocumentoDao>().InRequestScope();
            kernel.Bind<TipoEntidadDao>().To<TipoEntidadDao>().InRequestScope();
            kernel.Bind<EntidadDao>().To<EntidadDao>().InRequestScope();
            kernel.Bind<TipoAnotacionDao>().To<TipoAnotacionDao>().InRequestScope();
            kernel.Bind<ArchivoDao>().To<ArchivoDao>().InRequestScope();
            kernel.Bind<DocumentoDao>().To<DocumentoDao>().InRequestScope();
            kernel.Bind<RecursoDao>().To<RecursoDao>().InRequestScope();
            kernel.Bind<RolDao>().To<RolDao>().InRequestScope();
            kernel.Bind<AnotacionDao>().To<AnotacionDao>().InRequestScope();
            kernel.Bind<AnalizadorAnotaciones>().To<AnalizadorAnotaciones>().InRequestScope();

            kernel.Bind<IPdfToText>().To<NiconsoftOcr>().InRequestScope();
        }
    }
}
