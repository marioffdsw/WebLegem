using Newtonsoft.Json;
using Oracle.DataAccess.Client;
using Oracle.DataAccess.Types;
using System;


namespace WebLegemDAL.Models
{
    public class Rol : INullable, IOracleCustomType
    {
        private bool isNull; // implementacion de INullable
        private int id; // atributo id del typ
        private string nombre; // atributo nombre del typ
        private Recurso[] permisosAsignados;
        private DateTime ultimaModificacion;

        [JsonIgnore]
        public virtual bool IsNull
        {
            get { return isNull; }
        } // end IsNull prop

        public static Rol Null
        {
            get
            {
                Rol r = new Rol();
                r.isNull = true;
                return r;
            } // end get
        } // end Null prop

        [OracleObjectMapping("NOMBRE")]
        public string Nombre
        {
            get { return nombre; }
            set { nombre = value; }
        } // end Nombre prop

        [OracleObjectMapping("ID")]
        public int Id
        {
            get { return id; }
            set { id = value; }
        } // end Id prop

        [OracleObjectMapping("PERMISOS_ASIGNADOS")]
        public Recurso[] PermisosAsignados
        {
            get { return permisosAsignados; }
            set { permisosAsignados = value; }
        } // end PermisosAsignados prop

        [OracleObjectMapping("ULTIMA_MODIFICACION")]
        public DateTime UltimaModificacion
        {
            get { return ultimaModificacion; }
            set { ultimaModificacion = value; }
        }

        public virtual void FromCustomObject(OracleConnection con, IntPtr pUdt)
        {
            OracleUdt.SetValue(con, pUdt, "NOMBRE", nombre);

            if (nombre != null)
                OracleUdt.SetValue(con, pUdt, "ID", id);

            OracleUdt.SetValue( con, pUdt, "PERMISOS_ASIGNADOS", permisosAsignados );
            OracleUdt.SetValue( con,pUdt, "ULTIMA_MODIFICACION", ultimaModificacion );
        } // end method FromCustomObject

        public virtual void ToCustomObject(OracleConnection con, IntPtr pUdt)
        {
            id = (Int32)OracleUdt.GetValue(con, pUdt, "ID");

            nombre = (string)OracleUdt.GetValue(con, pUdt, "NOMBRE");

            permisosAsignados = (Recurso[]) OracleUdt.GetValue( con, pUdt, "PERMISOS_ASIGNADOS");
            ultimaModificacion = (DateTime)OracleUdt.GetValue( con, pUdt, "ULTIMA_MODIFICACION" );
        } // end method ToCustomObject

        public override string ToString()
        {
            return "Rol( " + Id + ", '" + Nombre + "'\n" + ListarPermisosAsignados() + " )";
        } // end method ToStirng

        private string ListarPermisosAsignados()
        {
            string lista = "[\n";

            foreach (var permiso in PermisosAsignados)
            {
                lista += "\t" + permiso + ",\n";
            } // end foreach

            lista += "]";

            return lista;
        } // end method ListarPermisosAsignados
    } // end class Accion
} // end namespace WebLegemDAL.Accion