using Oracle.DataAccess.Types;
using WebLegemDAL.Models;

namespace WebLegemDAL.Factory
{
    [OracleCustomTypeMapping("WEB_LEGEM.RECURSO_TYP")]
    public class RecursoFactory : IOracleCustomTypeFactory
    {
        public IOracleCustomType CreateObject()
        {
            return new Recurso();
        } // end method CreateObject
    } // end class RecursoFactory
} // end namespace
