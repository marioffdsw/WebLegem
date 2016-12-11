using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebLegemDAL.Models;

namespace WebLegemAPI.Models
{
    public class ContenidoViewModel
    {
        public string Archivo { get; set; }
        public string Asunto { get; set; }
        public Entidad Entidad { get; set; }
        public DateTime FechaPublicacion { get; set; }
        public int Id { get; set; }
        public int IdContenido { get; set; }
        public string Numero { get; set; }
        public string Ruta { get; set; }
        public TipoDocumento TipoDocumento { get; set; }
        public Guid DocumentoGuid { get; set; }
        public Guid ArchivoGuid { get; set; }
    } // end class ContenidoViewModel
} // end namespace WebLegemAPI.Models