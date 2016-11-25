using Oracle.DataAccess.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Models;

namespace WebLegemDAL.Factories
{
    [OracleCustomTypeMapping("WEB_LEGEM.ARCHIVO_TYP")]
    public class ArchivoFactory : IOracleCustomTypeFactory
    {
        public IOracleCustomType CreateObject()
        {
            return new Archivo();
        } // end method CreateObject
    } // end class ArchivoFactory
} // end namespace WebLegemDAL.Factories
