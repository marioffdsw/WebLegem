using Oracle.DataAccess.Types;
using WebLegemDAL.Models;

namespace WebLegemDAL.Factory
{
    [OracleCustomTypeMapping("WEB_LEGEM.PERMISO_TYP")]
    public class PermisoFactory : IOracleCustomTypeFactory
    {
        public IOracleCustomType CreateObject()
        {
            return new Permiso();
        } // end method CreateObject
    } // end class RecursoFactory
} // end namespace WebLegemDAL.Factroy
