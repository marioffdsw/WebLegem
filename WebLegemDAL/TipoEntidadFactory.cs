using Oracle.DataAccess.Types;

namespace WebLegemDAL.Models
{
    [OracleCustomTypeMappingAttribute("WEB_LEGEM.TIPO_ENTIDAD_TYP")]
    public class TipoEntidadFactory : IOracleCustomTypeFactory
    {
        // Implementation of IOracleCustomTypeFactory.CreateObject()
        public IOracleCustomType CreateObject()
        {
            // Return a new custom object
            return new TipoEntidad();
        } // end CreateObject method
    } // end TipoDocumentoFactory class
} // end namespace