using Newtonsoft.Json;
using Oracle.DataAccess.Client;
using Oracle.DataAccess.Types;
using System;

namespace WebLegemDAL.Models
{
    public class IdDocumento : INullable, IOracleCustomType
    {
        private bool isNull;
        private int id;        
        private Entidad entidad;
        private TipoDocumento tipoDoc;
        private string numero;
        private string fechaPublicacion;

        private OracleRef entidadRef;
        private OracleRef tipoDocRef;

        [JsonIgnore]
        public virtual bool IsNull
        {
            get
            {
                return isNull;
            }
        }

        // Person.Null is used to return a NULL Person object
        public static IdDocumento Null
        {
            get
            {
                IdDocumento idDoc = new IdDocumento();
                idDoc.isNull = true;
                return idDoc;
            }
        } // end Null prop

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
        }

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
        }

        public Entidad Entidad
        {
            get
            {
                return entidad;
            }
            set
            {
                entidad = value;
            }
        }

        [JsonIgnore]
        [OracleObjectMappingAttribute("ENTIDAD")]
        public OracleRef TipoEntidadRef
        {
            get
            {
                return entidadRef;
            }
            set
            {
                entidadRef = value;
            }
        } // end prop TipoEntidadRef
        
        public TipoDocumento TipoDocumento
        {
            get
            {
                return tipoDoc;
            }
            set
            {
                tipoDoc = value;
            }
        }

        [JsonIgnore]
        [OracleObjectMappingAttribute("TIPO_DOC")]
        public OracleRef TipoDocRef
        {
            get
            {
                return tipoDocRef;
            }
            set
            {
                tipoDocRef = value;
            }
        } // end prop TipoEntidadRef

        [OracleObjectMappingAttribute("fecha_publicacion")]
        public string FechaPublicacion
        {
            get
            {
                return fechaPublicacion;
            }
            set
            {
                fechaPublicacion = value;
            }
        }


        public virtual void FromCustomObject(OracleConnection con, IntPtr pUdt)
        {
            // Convierte de Custom Type a Oracle Object

            // establece el atributo "ID"
            // por defecto el atributo id sera establecido a NULL            
            OracleUdt.SetValue(con, pUdt, "ID", id);

            // establece el atributo "NOMBRE"
            // por defecto el atributo "NOMBRE" sera establecido a NULL                         

            if (entidadRef != null)
            {
                OracleUdt.SetValue(con, pUdt, "ENTIDAD", entidadRef);
            }

            Entidad = (Entidad)entidadRef.GetCustomObject( OracleUdtFetchOption.Server );

            if (tipoDocRef != null)
            {
                OracleUdt.SetValue( con, pUdt, "TIPO_DOC", tipoDocRef );
            }

            TipoDocumento = (TipoDocumento)tipoDocRef.GetCustomObject( OracleUdtFetchOption.Server );

            if (fechaPublicacion != null)
            {
                OracleUdt.SetValue( con, pUdt, "FECHA_PUBLICACION", fechaPublicacion );
            }
        } // end method FromCustomObject

        public virtual void ToCustomObject(OracleConnection con, IntPtr pUdt)
        {
            // Convert from the Oracle Object to a Custom Type

            id = (Int32)OracleUdt.GetValue(con, pUdt, "ID");

            numero = (string)OracleUdt.GetValue(con, pUdt, "NUMERO");

            entidadRef = (OracleRef) OracleUdt.GetValue(con, pUdt, "ENTIDAD");
            Entidad = (Entidad) entidadRef.GetCustomObject(OracleUdtFetchOption.Server);

            tipoDocRef = (OracleRef) OracleUdt.GetValue( con, pUdt, "TIPO_DOC" );
            TipoDocumento = (TipoDocumento)tipoDocRef.GetCustomObject( OracleUdtFetchOption.Server );

            FechaPublicacion = (string)OracleUdt.GetValue( con, pUdt, "FECHA_PUBLICACION" );
        } // end ToCustomObject method

        public override string ToString()
        {
            return "Entidad( " + Id + ", " + TipoDocumento + ", " + Entidad + ", " + Numero + ", " + FechaPublicacion  + " )";
        } // end ToString method

    } // end Entidad class
} // end namespace