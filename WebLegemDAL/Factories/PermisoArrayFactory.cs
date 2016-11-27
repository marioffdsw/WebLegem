using Oracle.DataAccess.Types;
using System;
using WebLegemDAL.Models;


[OracleCustomTypeMapping("WEB_LEGEM.PERMISO_TAB_TYP")]
public class PermisoArrayFactory : IOracleArrayTypeFactory
{
    public Array CreateArray(int numElems)
    {
        return new Permiso[numElems];
    } // end method CreateArray

    public Array CreateStatusArray(int numElems)
    {
        return null;
    } // end method CreateStatusArray
} // end PermisoArrayFactory
