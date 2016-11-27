using Oracle.DataAccess.Types;
using WebLegemDAL.Models;

namespace WebLegemDAL.Factory
{
    [OracleCustomTypeMapping("WEB_LEGEM.ANOTACION_TYP")]
    public class AnotacionFactory
    {
        public IOracleCustomType CreateObject()
        {
            return new Anotacion();
        } // end method CreateObject
    } // end class AnotacionFactory
} // end namespace WebLegemDAL.Factory