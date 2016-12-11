using Oracle.DataAccess.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Models;

namespace WebLegemDAL.Factories
{
    [OracleCustomTypeMapping(  "WEB_LEGEM.CONTENIDO_TYP" )]
    public class ContenidoFactory : IOracleCustomTypeFactory
    {
        public IOracleCustomType CreateObject()
        {
            return new ContenidoDocumento();
        } // end method CreateObject
    } // end class ContenidoFactory
} // end namespace WebLegemDAL.Factories