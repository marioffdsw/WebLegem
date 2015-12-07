using Oracle.DataAccess.Types;

namespace WebLegemAPI.Models
{
    [OracleCustomTypeMappingAttribute("WEB_LEGEM.TIPO_DOC_TYP")]
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