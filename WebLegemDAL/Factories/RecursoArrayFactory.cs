using System;
using Oracle.DataAccess.Types;
using WebLegemDAL.Models;

namespace WebLegemDAL.Factory
{
    [OracleCustomTypeMapping("WEB_LEGEM.PERMISO_TAB_TYP")]
    public class RecursoArrayFactory : IOracleArrayTypeFactory
    {
        public Array CreateArray(int numElems)
        {
            return new Recurso[numElems];
        } // end method CreateArray

        public Array CreateStatusArray(int numElems)
        {
            return null;
        } // end method CreateStatusArray
    } // end class RecursoFactory
} // end namespace WebLegemDAL.Factroy
