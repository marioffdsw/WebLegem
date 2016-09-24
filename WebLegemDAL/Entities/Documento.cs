using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Oracle.DataAccess.Types;
using Newtonsoft.Json;
using Oracle.DataAccess.Client;

namespace WebLegemDAL.Models
{
    public class Documento : INullable, IOracleCustomType
    {
        /**********************************************************************************
         **********************************************************************************
         *
         *   ATRIBUTES
         *            
         **********************************************************************************/
        
        private int id;
        private Entidad entidad;
        private TipoDocumento tipoDocumento;
        private string numero;
        private DateTime fechaPublicacion;                       

        protected bool isNull;



        /**********************************************************************************
         **********************************************************************************
         *
         *   PROPERTIES
         *            
         **********************************************************************************/

        [OracleObjectMappingAttribute("ID")]
        public int Id
        {
            get
            {
                return id;
            }
            set
            {
                id = value;
            }
        } // fin prop Id
        
        [OracleObjectMappingAttribute( "TIPO_DOCUMENTO" )]
        public TipoDocumento TipoDocumento
        {
            get
            {
                return tipoDocumento;
            }
            set
            {                
                tipoDocumento = value;
                //DocId = (IdDocumento)value.GetCustomObject(OracleUdtFetchOption.Server);
            }
        } // fin prop TipoDocumento

        [OracleObjectMappingAttribute("ENTIDAD")]
        public Entidad Entidad
        {
            get
            {
                return entidad;
            }
            set
            {
                entidad = value;
                //DocId = (IdDocumento)value.GetCustomObject(OracleUdtFetchOption.Server);
            }
        } // fin prop Entidad

        [OracleObjectMappingAttribute("NUMERO")]
        public string Numero
        {
            get
            {
                return numero;
            }

            set
            {
                numero = value;
            }
        } // fin prop Numero

        [OracleObjectMappingAttribute( "FECHA_PUBLICACION" )]
        public DateTime FechaPublicacion
        {
            get
            {
                return fechaPublicacion;
            }

            set
            {
                // TODO - modificar la excepcion, a un nombre significativo
                // TODO - validar que sean todos numeros                
                
                fechaPublicacion = value;
            }
        } // fin prop AñoPublicacion
             
        [JsonIgnore]
        public bool IsNull
        {
            get
            {
                return isNull;
            }
        } // fin prop IsNull
        
        public static Documento Null
        {
            get
            {
                Documento doc = new Documento();
                doc.isNull = true;
                return doc;
            }
        } // fin Null prop



        /**********************************************************************************
         **********************************************************************************
         *
         *   OVERWRITTEN METHODS
         *            
         **********************************************************************************/

        public virtual void FromCustomObject(OracleConnection con, IntPtr pUdt)
        {
            OracleUdt.SetValue( con, pUdt, "ID", id );

            if (entidad != null)
                OracleUdt.SetValue( con, pUdt, "ENTIDAD", entidad );

            if (tipoDocumento != null)            
                OracleUdt.SetValue(con, pUdt, "TIPO_DOCUMENTO", tipoDocumento);

            if (numero != null)
                OracleUdt.SetValue( con, pUdt, "NUMERO", numero );

            if (fechaPublicacion != null)
                OracleUdt.SetValue( con, pUdt, "FECHA_PUBLICACION", fechaPublicacion );
            
        } // end method FromCustomObject

        public virtual void ToCustomObject(OracleConnection con, IntPtr pUdt)
        {
            // Convert from the Oracle Object to a Custom Type   

            Id = (int) OracleUdt.GetValue( con, pUdt, "ID" );
            Entidad = (Entidad) OracleUdt.GetValue( con, pUdt, "ENTIDAD" );
            TipoDocumento = (TipoDocumento) OracleUdt.GetValue( con, pUdt, "TIPO_DOCUMENTO" );
            Numero = (string) OracleUdt.GetValue( con, pUdt, "NUMERO" );
            FechaPublicacion = (DateTime) OracleUdt.GetValue( con, pUdt, "FECHA_PUBLICACION" );            
        } // fin method ToCustomObject

        public override string ToString()
        {
            return String
                .Format( "Documento(Id: {0}, {1},\n{2}, Numero: {3}, FechaPublicacion: {4} )",
                    Id,
                    Entidad,
                    TipoDocumento,
                    Numero,
                    FechaPublicacion
                );
        }
    }
}
