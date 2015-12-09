using Oracle.DataAccess.Types;
using System;

[OracleCustomTypeMappingAttribute("WEB_LEGEM.TIPO_DOC_REF_TAB_TYP")]
public class PersonArrayFactory : IOracleArrayTypeFactory
{
    // IOracleArrayTypeFactory Inteface
    public Array CreateArray(int numElems)
    {
        return new OracleRef[numElems];
    }

    public Array CreateStatusArray(int numElems)
    {
        // An OracleUdtStatus[] is not required to store null status information
        return null;
    }

}