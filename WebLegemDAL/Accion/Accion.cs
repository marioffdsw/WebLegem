using Newtonsoft.Json;
using Oracle.DataAccess.Client;
using Oracle.DataAccess.Types;
using System;


namespace WebLegemDAL.Models
{
    public class Accion : INullable, IOracleCustomType
    {
        private bool isNull; // implementacion de INullable
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

        public static Accion Null
        {
            get
            {
                Accion a = new Accion();
                a.isNull = true;
                return a;
            } // end get
        } // end Null prop

        [OracleObjectMappingAttribute( "NOMBRE" )]
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

        [OracleObjectMapping( "ID" )]
        public int Id
        {
            get { return id; }
            set { id = value; }
        } // end Id prop

        public virtual void FromCustomObject(OracleConnection con, IntPtr pUdt)
        {
            OracleUdt.SetValue( con,pUdt, "NOMBRE", nombre );
            if (nombre != null)
                OracleUdt.SetValue( con, pUdt, "ID", id );
        } // end method FromCustomObject

        public virtual void ToCustomObject(OracleConnection con, IntPtr pUdt)
        {
            id = (Int32)OracleUdt.GetValue( con, pUdt, "ID" );

            nombre = (string)OracleUdt.GetValue( con, pUdt, "NOMBRE" );
        } // end method ToCustomObject

        public override string ToString()
        {
            return "Accion( " + Id + ", '" + Nombre + "' )";
        } // end method ToStirng
    } // end class Accion
} // end namespace WebLegemDAL.Accion