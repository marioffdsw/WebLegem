using Oracle.DataAccess.Types;
using WebLegemDAL.Models;

namespace WebLegemDAL.Factory
{
    [OracleCustomTypeMapping( "WEB_LEGEM.ACCION_TYP" )]
    public class AccionFactory : IOracleCustomTypeFactory
    {
        public IOracleCustomType CreateObject()
        {
            return new Accion();
        }
    } // end class ActionFactory
} // end namespace
