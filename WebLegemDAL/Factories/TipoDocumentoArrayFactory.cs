using Oracle.DataAccess.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Models;

namespace WebLegemDAL.Factories
{
    [OracleCustomTypeMapping("WEB_LEGEM.TIPO_DOCUMENTO_TAB_TYP")]
    public class TipoDocumentoArrayFactory : IOracleArrayTypeFactory
    {
        public Array CreateArray(int numElems)
        {
            return new TipoDocumento[numElems];
        }

        public Array CreateStatusArray(int numElems)
        {
            return null;
        }
    }
}
