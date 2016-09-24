using System;
using WebLegemDAL.Models;

namespace WebLegemDAL.QueryObjects
{
    public class DocumentoConContenidoQueryObject : IQueryObject<DocumentoConContenido>
    {
        private DocumentoConContenido documentoConContenido;

        public DocumentoConContenido Return
        {
            get
            {
                return documentoConContenido;
            }

            set
            {
                documentoConContenido = value;
            }
        } // fin prop DocumentoConContenido

        private string palabrasABuscar;

        public String PalabrasABuscar
        {
            get
            {
                return palabrasABuscar;
            }

            set
            {
                palabrasABuscar = value;
            }
        }
    }
}
