using Oracle.DataAccess.Types;
using WebLegemDAL.Models;

namespace WebLegemDAL.Factory
{
    [OracleCustomTypeMappingAttribute("WEB_LEGEM.DOCUMENTO_CONTENIDO_TYP")]
    public class DocumentoConContenidoFactory : IOracleCustomTypeFactory
    {
        // Implementation of IOracleCustomTypeFactory.CreateObject()
        public IOracleCustomType CreateObject()
        {
            // Return a new custom object
            return new DocumentoConContenido();
        } // end CreateObject method        
    }
}
