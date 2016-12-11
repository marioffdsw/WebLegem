using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebLegemDAL.Models;

namespace WebLegemAPI.Models
{
    public static class Extensions
    {
        public static ContenidoDocumento ToContenidoDocumento(this ContenidoViewModel cvm, Func<Guid,Archivo> func )
        {
            return new ContenidoDocumento()
            {
                Documento = new Documento()
                {
                    Entidad = cvm.Entidad,
                    FechaPublicacion = cvm.FechaPublicacion,
                    Numero = cvm.Numero,
                    TipoDocumento = cvm.TipoDocumento
                },
                Archivo = func( cvm.ArchivoGuid ),
                Asunto = cvm.Asunto        
            };            
        } // end extension method ToContenidoDocumento

        public static Documento ToDocumento(this ContenidoViewModel cvm)
        {
            return new Documento()
            {
                FechaPublicacion = cvm.FechaPublicacion,
                Entidad = cvm.Entidad,
                Numero = cvm.Numero,
                TipoDocumento = cvm.TipoDocumento
            };
        } // end extension method ToDocumento
    } // end class Extensions
} // end namespace WebLegemAPI.Models