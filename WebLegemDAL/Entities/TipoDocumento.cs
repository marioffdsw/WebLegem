﻿using Newtonsoft.Json;
using Oracle.DataAccess.Client;
using Oracle.DataAccess.Types;
using System;

namespace WebLegemDAL.Models
{
    public class TipoDocumento : INullable, IOracleCustomType
    {
        private bool isNull; // implementacion de INUllable
        private int id; // atributo id del typ
        private string nombre; // atributo nombre del typ
        private DateTime ultimaModificacion;

        [JsonIgnore]
        // Implementation of INullable.IsNull
        public virtual bool IsNull
        {
            get { return isNull; }
        } // end IsNull prop

        // Person.Null is used to return a NULL Person object
        public static TipoDocumento Null
        {
            get
            {
                TipoDocumento p = new TipoDocumento();
                p.isNull = true;
                return p;
            }
        } // end Null prop

        [OracleObjectMappingAttribute("NOMBRE")]
        public string Nombre
        {
            get { return nombre; }
            set { nombre = value; }
        }

        [OracleObjectMappingAttribute("ID")]
        public int Id
        {
            get { return id; }
            set { id = value; }
        }

        [OracleObjectMapping("ULTIMA_MODIFICACION")]
        public DateTime UltimaModificacion
        {
            get { return ultimaModificacion; }
            set { ultimaModificacion = value; }                
        }

        public virtual void FromCustomObject(OracleConnection con, IntPtr pUdt)
        {
            // Convierte de Custom Type a Oracle Object

            // establece el atributo "ID"
            // por defecto el atributo id sera establecido a NULL            
            OracleUdt.SetValue(con, pUdt, "ID", Id);
            OracleUdt.SetValue(con, pUdt, "ULTIMA_MODIFICACION", UltimaModificacion);

            // establece el atributo "NOMBRE"
            // por defecto el atributo "NOMBRE" sera establecido a NULL             
            if (nombre != null)
            {
                OracleUdt.SetValue(con, pUdt, "NOMBRE", Nombre);
            }
        } // end method FromCustomObject

        // Implementation of IOracleCustomType.ToCustomObject()
        public virtual void ToCustomObject(OracleConnection con, IntPtr pUdt)
        {
            // Convert from the Oracle Object to a Custom Type

            // Get the "ADDRESS" attribute
            // If the "ADDRESS" attribute is NULL, then OracleString.Null will be returned
            Id = (Int32)OracleUdt.GetValue(con, pUdt, "ID");

            // Get the "NAME" attribute
            // If the "NAME" attribute is NULL, then null will be returned
            Nombre = (string)OracleUdt.GetValue(con, pUdt, "NOMBRE");
            UltimaModificacion = (DateTime)OracleUdt.GetValue( con,pUdt, "ULTIMA_MODIFICACION" );
        } // end ToCustomObject method

        public override string ToString()
        {
            return "TipoDocumento( " + Id + ", '" + Nombre + "' + " + UltimaModificacion + " )";
        } // end ToString method
    } // end TipoDocumento class
} // end namespace