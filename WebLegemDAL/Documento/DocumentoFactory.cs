using Oracle.DataAccess.Types;
using WebLegemDAL.Models;

namespace WebLegemDAL.Factory
{
    [OracleCustomTypeMappingAttribute("WEB_LEGEM.DOCUMENTO_TYP")]
    public class DocumentoFactory : IOracleCustomTypeFactory
    {
        // Implementation of IOracleCustomTypeFactory.CreateObject()
        public IOracleCustomType CreateObject()
        {
            // Return a new custom object
            return new Documento();
        } // end CreateObject method
    } // end DocumentoFactory class
} // end namespace