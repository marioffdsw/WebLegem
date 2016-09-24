using Oracle.DataAccess.Types;
using WebLegemDAL.Models;

namespace WebLegemDAL.Factory
{
    [OracleCustomTypeMappingAttribute("WEB_LEGEM.TIPO_DOCUMENTO_TYP")]
    public class TipoDocumentoFactory : IOracleCustomTypeFactory
    {
        // Implementation of IOracleCustomTypeFactory.CreateObject()
        public IOracleCustomType CreateObject()
        {
            // Return a new custom object
            return new TipoDocumento();
        } // end CreateObject method
    } // end TipoDocumentoFactory class
} // end namespace