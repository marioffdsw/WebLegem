using Oracle.DataAccess.Types;

namespace WebLegemDAL.Factory
{
    [OracleCustomTypeMappingAttribute("WEB_LEGEM.DOC_TYP")]
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