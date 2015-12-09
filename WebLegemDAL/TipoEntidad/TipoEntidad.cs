using Newtonsoft.Json;
using Oracle.DataAccess.Client;
using Oracle.DataAccess.Types;
using System;

namespace WebLegemDAL.Models
{
    public class TipoEntidad : INullable, IOracleCustomType
    {
        private bool isNull; // implementacion de INUllable
        private int id; // atributo id del typ
        private string nombre; // atributo nombre del typ

        [JsonIgnore]        
        public virtual bool IsNull
        {
            get
            {
                return isNull;
            }
        } // end IsNull prop
        
        public static TipoEntidad Null
        {
            get
            {
                TipoEntidad p = new TipoEntidad();
                p.isNull = true;
                return p;
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

        }

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

        public virtual void FromCustomObject(OracleConnection con, IntPtr pUdt)
        {
            OracleUdt.SetValue(con, pUdt, "ID", id);

            if (nombre != null)
            {
                OracleUdt.SetValue(con, pUdt, "NOMBRE", nombre);
            }
        } // end method FromCustomObject

        public virtual void ToCustomObject(OracleConnection con, IntPtr pUdt)
        {
            // Convert from the Oracle Object to a Custom Type

            id = (Int32)OracleUdt.GetValue(con, pUdt, "ID");

            nombre = (string)OracleUdt.GetValue(con, pUdt, "NOMBRE");
        } // end ToCustomObject method

        public override string ToString()
        {
            return "TipoEntidad( " + Id + ", " + Nombre + " )";
        } // end ToString method
    } // end TipoEntidad class
} // end namespace