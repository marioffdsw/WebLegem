using Newtonsoft.Json;
using Oracle.DataAccess.Client;
using Oracle.DataAccess.Types;
using System;
using WebLegemDAL.Models;

namespace WebLegemDAL.Models
{
    public class Entidad : INullable, IOracleCustomType
    {
        private bool isNull;
        private int id;
        private string nombre;
        private TipoEntidad tipoEntidad;
        private OracleRef tipoEntidadRef;

        [JsonIgnore]
        public virtual bool IsNull
        {
            get {
                return isNull;
            }
        }

        // Person.Null is used to return a NULL Person object
        public static Entidad Null
        {
            get
            {
                Entidad e = new Entidad();
                e.isNull = true;
                return e;
            }
        } // end Null prop

        [OracleObjectMappingAttribute("NOMBRE")]
        public string Nombre
        {
            get
            {
                return nombre;
            }
            set
            {
                nombre = value;
            }
        } // end prop Nombre

        [OracleObjectMappingAttribute( "ID" )]
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

        public TipoEntidad TipoEntidad
        {
            get
            {
                return tipoEntidad;
            }
            set
            {
                tipoEntidad = value;
            }
        }

        [JsonIgnore]
        [OracleObjectMappingAttribute( "TIPO_ENTIDAD" )]
        public OracleRef TipoEntidadRef
        {
            get
            {
                return tipoEntidadRef;
            }
            set
            {
                tipoEntidadRef = value;
            }
        } // end prop TipoEntidadRef

        public virtual void FromCustomObject(OracleConnection con, IntPtr pUdt)
        {
            // Convierte de Custom Type a Oracle Object

            // establece el atributo "ID"
            // por defecto el atributo id sera establecido a NULL            
            OracleUdt.SetValue(con, pUdt, "ID", id);

            // establece el atributo "NOMBRE"
            // por defecto el atributo "NOMBRE" sera establecido a NULL             
            if (nombre != null)
            {
                OracleUdt.SetValue(con, pUdt, "NOMBRE", nombre);
            }

            if (tipoEntidadRef != null) {
                OracleUdt.SetValue( con, pUdt, "TIPO_ENTIDAD", tipoEntidadRef );
            }

        } // end method FromCustomObject

        public virtual void ToCustomObject(OracleConnection con, IntPtr pUdt)
        {
            // Convert from the Oracle Object to a Custom Type
            
            id = (Int32)OracleUdt.GetValue(con, pUdt, "ID");
            
            nombre = (string) OracleUdt.GetValue(con, pUdt, "NOMBRE");

            tipoEntidadRef = (OracleRef) OracleUdt.GetValue( con, pUdt, "TIPO_ENTIDAD" );

            TipoEntidad = (TipoEntidad) tipoEntidadRef.GetCustomObject(  OracleUdtFetchOption.Server );
        } // end ToCustomObject method

        public override string ToString()
        {
            return "Entidad( " + Id + ", " + Nombre + ", " + tipoEntidad + " )";
        } // end ToString method

    } // end Entidad class
} // end namespace