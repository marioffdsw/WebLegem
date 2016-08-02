using Oracle.DataAccess.Types;
using WebLegemDAL.Models;

namespace WebLegemDAL.Factory
{
    [OracleCustomTypeMapping("WEB_LEGEM.TIPO_ANOTACION_TYP")]
    public class TipoAnotacionFactory : IOracleCustomTypeFactory
    {
        public IOracleCustomType CreateObject()
        {
            return new TipoAnotacion();
        } // end method CreateObject
    } // end class TipoAnotacionFactory
} // end namespace WebLegemDAL.Factory