using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Models;

namespace WebLegemDAL.QueryObjects
{
    public class DocumentoQueryObject : IQueryObject<Documento>
    {
        public Documento Return{ get; set; }

        public String PalabrasABuscar { get; set; }

    } // end class DocumentoQueryObject
} // end namespace WebLegemDAL.QueryObjects