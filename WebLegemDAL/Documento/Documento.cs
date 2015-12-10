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
        /*
         * Private Fields
         */

        private OracleRef docIdRef;
        private IdDocumento docId;
        private string asunto;
        private DateTime fechaExpedicion;
        private string rutaAlArchivoOriginal;
        private OracleBFile contenidoDocumento;
        private bool isNull;
        private string nombreArchivoProcesado;

        /*
         * Properties 
         */

        [JsonIgnore]
        [OracleObjectMappingAttribute( "REF_ID_DOCUMENTO" )]
        public OracleRef DocIdRef
        {
            get
            {
                return docIdRef;
            }
            set
            {                
                docIdRef = value;
                DocId = (IdDocumento)value.GetCustomObject(OracleUdtFetchOption.Server);
            }
        } // end DocIdRef Property

        public IdDocumento DocId
        {
            get
            {
                return docId;
            }
            set
            {
                docId = value;
            }
        } // end DocId Prop

        [OracleObjectMappingAttribute("ASUNTO")]
        public string Asunto
        {
            get { return asunto; }
            set { asunto = value; }
        } // end Asunto Prop

        [OracleObjectMappingAttribute("FECHA_EXPEDICION")]
        public DateTime FechaExpedicion
        {
            get { return fechaExpedicion; }
            set { fechaExpedicion = value; }
        }

        [OracleObjectMappingAttribute("RUTA_AL_ARCHIVO")]
        public string RutaAlArchivo
        {
            get { return rutaAlArchivoOriginal; }
            set { rutaAlArchivoOriginal = value; }
        }

        [OracleObjectMappingAttribute("CONTENIDO_DOCUMENTO")]
        public OracleBFile ContenidoDocumento
        {
            get { return contenidoDocumento; }
            set { contenidoDocumento = value; }
        }

        public string NombreDocumentoProcesado
        {
            get { return nombreArchivoProcesado; }
            set { nombreArchivoProcesado = value; }
        }


        public bool IsNull
        {
            get
            {
                return isNull;
            }
        } // end property IsNull
        
        public static Documento Null
        {
            get
            {
                Documento doc = new Documento();
                doc.isNull = true;
                return doc;
            }
        } // end Null prop

        /*
         * Metodos
         */

        public virtual void FromCustomObject(OracleConnection con, IntPtr pUdt)
        {            
            if (docIdRef != null)            
                OracleUdt.SetValue(con, pUdt, "REF_ID_DOCUMENTO", docIdRef);                        

            if (fechaExpedicion != null)            
                OracleUdt.SetValue(con, pUdt, "FECHA_EXPEDICION", fechaExpedicion);            

            if (asunto != null)            
                OracleUdt.SetValue(con, pUdt, "ASUNTO", asunto);            

            if (RutaAlArchivo != null)            
                OracleUdt.SetValue( con, pUdt, "RUTA_AL_ARCHIVO", rutaAlArchivoOriginal );            

            if (contenidoDocumento != null)            
                OracleUdt.SetValue( con, pUdt, "CONTENIDO_DOCUMENTO", contenidoDocumento );            
        } // end method FromCustomObject

        public virtual void ToCustomObject(OracleConnection con, IntPtr pUdt)
        {
            // Convert from the Oracle Object to a Custom Type            

            asunto = (string)OracleUdt.GetValue(con, pUdt, "ASUNTO");

            DocIdRef = (OracleRef)OracleUdt.GetValue(con, pUdt, "REF_DOC_ID");
            DocId = (IdDocumento)docIdRef.GetCustomObject(OracleUdtFetchOption.Server);

            contenidoDocumento = (OracleBFile) OracleUdt.GetValue(con, pUdt, "CONTENIDO_DOCUMENTO");
            NombreDocumentoProcesado = contenidoDocumento.FileName;

            rutaAlArchivoOriginal = (string)OracleUdt.GetValue( con, pUdt, "RUTA_AL_ARCHIVO" );

            fechaExpedicion = (DateTime)OracleUdt.GetValue(con, pUdt, "FECHA_EXPEDICION");
        } // end ToCustomObject method

        public override string ToString()
        {
            return String.Format( "Documento( {0}\n{1}, {2}, {3}, {4}, {5} )",
                    DocId,
                    RutaAlArchivo,
                    Asunto,
                    FechaExpedicion,
                    ContenidoDocumento
                );
        }
    }
}
