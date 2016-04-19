using Newtonsoft.Json;
using Oracle.DataAccess.Client;
using Oracle.DataAccess.Types;
using System;

namespace WebLegemDAL.Models
{
    public class Modulo : INullable, IOracleCustomType
    {
        private bool isNull;
        private int id;
        private string nombre;

        [JsonIgnore]
        public virtual bool IsNull
        {
            get { return isNull; }
        } // end prop IsNull

        public static Modulo Null
        {
            get 
            {
                Modulo m = new Modulo();
                m.isNull = true;
                return m;
            }
        } // end Null prop

        [OracleObjectMapping("ID")]
        public int Id
        {
            get { return id; }
            set { id = value; }
        } // end Id prop
    
        [OracleObjectMapping("NOMBRE" )]
        public string Nombre
        {
            get { return nombre; }
            set { nombre = value; }
        } // end Nombre prop

        public void FromCustomObject(OracleConnection con, IntPtr pUdt)
        {
            OracleUdt.SetValue(con, pUdt, "NOMBRE", nombre);
            if (nombre != null)
                OracleUdt.SetValue(con, pUdt, "ID", id);
        }

        public void ToCustomObject(OracleConnection con, IntPtr pUdt)
        {
            id = (Int32)OracleUdt.GetValue(con, pUdt, "ID");

            nombre = (string)OracleUdt.GetValue(con, pUdt, "NOMBRE");
        }

        public override string ToString()
        {
            return "Modulo( " + Id + ", '" + Nombre + "' )";
        }
    } // end class Modulo


} // end namespace WebLegemDAL.Modulo
