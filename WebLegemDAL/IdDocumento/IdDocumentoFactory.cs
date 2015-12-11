using Oracle.DataAccess.Types;
using WebLegemDAL.Models;

namespace WebLegemDAL.Factory
{
    [OracleCustomTypeMappingAttribute("WEB_LEGEM.DOC_ID_TYP")]
    public class IdDocumentoFactory : IOracleCustomTypeFactory
    {
        // Implementation of IOracleCustomTypeFactory.CreateObject()
        public IOracleCustomType CreateObject()
        {
            // Return a new custom object
            return new IdDocumento();
        } // end CreateObject method
    } // end TipoDocumentoFactory class
} // end namespace