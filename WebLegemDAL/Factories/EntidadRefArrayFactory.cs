using Oracle.DataAccess.Types;
using System;
using WebLegemDAL.Models;

[OracleCustomTypeMappingAttribute("WEB_LEGEM.TIPO_DOCUMENTO_TAB_TYP")]
public class TipoDocumentoArrayFactory : IOracleArrayTypeFactory
{
    // IOracleArrayTypeFactory Inteface
    public Array CreateArray(int numElems)
    {
        return new TipoDocumento[numElems];
    } // end method CreateArray

    public Array CreateStatusArray(int numElems)
    {
        // An OracleUdtStatus[] is not required to store null status information
        return null;
    } // end method CreateStatusArray

} // end class TipoDocumentoArrayFactory