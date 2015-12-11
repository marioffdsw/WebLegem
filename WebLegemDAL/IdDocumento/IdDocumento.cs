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
        private int entidad;
        private int tipoDoc;
        private string numero;
        private string fechaPublicacion;        

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

        [OracleObjectMappingAttribute( "ENTIDAD" )]
        public int Entidad
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
        
        [OracleObjectMappingAttribute( "TIPO_DOC" )]
        public int TipoDocumento
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

        [OracleObjectMappingAttribute("FECHA_PUBLICACION")]
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
            
            OracleUdt.SetValue(con, pUdt, "ENTIDAD", entidad);                  

            OracleUdt.SetValue( con, pUdt, "TIPO_DOC", tipoDoc );

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

            entidad = (int) OracleUdt.GetValue(con, pUdt, "ENTIDAD");            

            tipoDoc = (int) OracleUdt.GetValue( con, pUdt, "TIPO_DOC" );            

            FechaPublicacion = (string)OracleUdt.GetValue( con, pUdt, "FECHA_PUBLICACION" );
        } // end ToCustomObject method

        public override string ToString()
        {
            return "IdDocumento( " + Id + ", " + TipoDocumento + ", " + Entidad + ", " + Numero + ", " + FechaPublicacion  + " )";
        } // end ToString method

    } // end Entidad class
} // end namespace