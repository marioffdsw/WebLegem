using Oracle.DataAccess.Types;
using WebLegemDAL.Models;

namespace WebLegemDAL.Factory
{ 
    [OracleCustomTypeMappingAttribute("WEB_LEGEM.ENTIDAD_TYP")]
    public class EntidadFactory : IOracleCustomTypeFactory
    {
        // Implementation of IOracleCustomTypeFactory.CreateObject()
        public IOracleCustomType CreateObject()
        {
            // Return a new custom object
            return new Entidad();
        } // end CreateObject method
    } // end TipoDocumentoFactory class
} // end namespace