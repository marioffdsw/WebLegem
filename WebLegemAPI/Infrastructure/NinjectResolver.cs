using System;
using System.Collections.Generic;
using System.Web.Http.Dependencies;
using Ninject;
using WebLegemDAL.DAL;
using WebLegemDAL.Models;
using Ninject.Web.Common;
using WebLegemDAL;
using WebLegemDAL.QueryObjects;
using WebLegemDAL.Archivo;
using WebLegemAPI.OCR;

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

        private void AddBindings(IKernel kernel)
        {
            kernel.Bind<IDataAccessObject<TipoDocumento>>().To<TipoDocumentoDAO>().InRequestScope();
            kernel.Bind<IDataAccessObject<TipoEntidad>>().To<TipoEntidadDAO>().InRequestScope();
            kernel.Bind<IDataAccessObject<Entidad>>().To<EntidadDAO>().InRequestScope();
            kernel.Bind<IDataAccessObject<Archivo>>().To<ArchivoDAO>().InRequestScope();
            kernel.Bind<IDataAccessObject<DocumentoConContenido>>().To<DocumentoConContenidoDAO>().InRequestScope();
            

            // bindings para gestor de consultas
            kernel.Bind<IGestorDeConsultas<DocumentoConContenidoQueryObject, DocumentoConContenido>>().To<DocumentoConContenidoDAO>().InRequestScope();

            // bindings para el servicio OCR
            kernel.Bind<IPdfToText>().To<NiconsoftOcr>().InRequestScope();
        }
    }
}
