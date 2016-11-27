using Newtonsoft.Json;
using Oracle.DataAccess.Client;
using Oracle.DataAccess.Types;
using System;

namespace WebLegemDAL.Models
{
    public class Recurso : INullable, IOracleCustomType
    {
        private bool isNull; // implementacion de INullable
        private int id; // atributo id del typ
        private string nombre; // atributo nombre del typ
        private Modulo modulo;

        [JsonIgnore]
        public virtual bool IsNull
        {
            get
            {
                return isNull;
            }
        } // end IsNull prop

        public static Recurso Null
        {
            get
            {
                var r = new Recurso();
                r.isNull = true;
                return r;
            } // end get
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
        } // end Nombre prop

        [OracleObjectMapping("ID")]
        public int Id
        {
            get { return id; }
            set { id = value; }
        } // end Id prop

        [OracleObjectMapping("MODULO")]
        public Modulo Modulo
        {
            get { return modulo; }
            set { modulo = value; }
        } // end prop Modulo
        

        public void FromCustomObject(OracleConnection con, IntPtr pUdt)
        {
            OracleUdt.SetValue(con, pUdt, "NOMBRE", nombre);
            if (nombre != null)
                OracleUdt.SetValue(con, pUdt, "ID", id);

            if (modulo != null)
                OracleUdt.SetValue(con, pUdt, "MODULO", modulo);
        }

        public void ToCustomObject(OracleConnection con, IntPtr pUdt)
        {
            id = (Int32)OracleUdt.GetValue(con, pUdt, "ID");

            nombre = (string)OracleUdt.GetValue(con, pUdt, "NOMBRE");

            modulo = (Modulo)OracleUdt.GetValue( con, pUdt, "MODULO" );
        }

        public override string ToString()
        {
            return "Recurso( " + id + ", '" + nombre + "', " + modulo + " )";
        } // end method ToString
    } // end class Recurso
} // end namespace WebLegemDAL.Recurso
