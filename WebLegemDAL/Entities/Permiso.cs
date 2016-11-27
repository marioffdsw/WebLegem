using Newtonsoft.Json;
using Oracle.DataAccess.Client;
using Oracle.DataAccess.Types;
using System;


namespace WebLegemDAL.Models
{
    public class Permiso : INullable, IOracleCustomType
    {
        private bool isNull; // implementacion de INullable
        private int id; 
        private Accion accion;
        private Recurso recurso;

        [JsonIgnore]
        public virtual bool IsNull
        {
            get
            {
                return isNull;
            }
        } // end IsNull prop

        public static Permiso Null
        {
            get
            {
                Permiso a = new Permiso();
                a.isNull = true;
                return a;
            } // end get
        } // end Null prop

        [OracleObjectMappingAttribute("ACCION")]
        public Accion Accion
        {
            get
            {
                return accion;
            }
            set
            {
                accion = value;
            }
        } // end Nombre prop

        [OracleObjectMappingAttribute("RECURSO")]
        public Recurso Recurso
        {
            get
            {
                return recurso;
            }
            set
            {
                recurso = value;
            }
        } // end Nombre prop

        [OracleObjectMapping("ID")]
        public int Id
        {
            get { return id; }
            set { id = value; }
        } // end Id prop

        public virtual void FromCustomObject(OracleConnection con, IntPtr pUdt)
        {
            OracleUdt.SetValue(con, pUdt, "ACCION", accion);
            OracleUdt.SetValue(con, pUdt, "RECURSO", recurso);
            if (accion != null)
                OracleUdt.SetValue(con, pUdt, "ID", id);
        } // end method FromCustomObject

        public virtual void ToCustomObject(OracleConnection con, IntPtr pUdt)
        {
            id = (Int32)OracleUdt.GetValue(con, pUdt, "ID");

            accion = (Accion)OracleUdt.GetValue(con, pUdt, "ACCION");
            recurso = (Recurso)OracleUdt.GetValue(con, pUdt, "RECURSO");
        } // end method ToCustomObject

        public override string ToString()
        {
            return "Permiso( " + Id + ", " + Accion + ", " + Recurso + " )" ;
        } // end method ToStirng
    } // end class Accion
} // end namespace WebLegemDAL.Accion