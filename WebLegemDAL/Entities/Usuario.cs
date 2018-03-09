using Newtonsoft.Json;
using Oracle.DataAccess.Client;
using Oracle.DataAccess.Types;
using System;

namespace WebLegemDAL.Models
{
    public class Usuario : INullable, IOracleCustomType
    {
        private bool isNull;
        private int id;
        private string nombreUsuario;
        private string nombre;
        private string apellido;
        private string documento;
        private string contrasena;
        private string correo;
        private string foto;
        private string estado;               
        private Rol rol;
        private DateTime ultimaModificacion;

        [JsonIgnore]
        public virtual bool IsNull
        {
            get { return isNull; }
        } // end prop IsNull

        public static Usuario Null
        {
            get
            {
                Usuario u = new Usuario();
                u.isNull = true;
                return u;
            }
        } // end prop Null

        [OracleObjectMappingAttribute("ID")]
        public int Id
        {
            get { return id; }
            set { id = value; }
        } // end prop Id

        [OracleObjectMapping("NOMBRE_USUARIO")]
        public string NombreUsuario
        {
            get { return nombreUsuario; }
            set { nombreUsuario = value; }
        } // end prop NombreUsuario

        [OracleObjectMapping("NOMBRE")]
        public string Nombre
        {
            get { return nombre; }
            set { nombre = value; }
        } // end prop Nombre

        [OracleObjectMapping("APELLIDO")]
        public string Apellido
        {
            get { return apellido; }
            set { apellido = value; }
        } // end prop Apellido

        [OracleObjectMapping("DOCUMENTO")]
        public string Documento
        {
            get { return documento; }
            set { documento = value; }
        } // end prop Apellido

        [OracleObjectMapping("CONTRASENA")]
        public string Contrasena
        {
            get { return contrasena; }
            set { contrasena = value; }
        } // end prop Contrasena

        [OracleObjectMapping("CORREO")]
        public string Correo
        {
            get { return correo; }
            set { correo = value; }
        } // end prop Correo

        [OracleObjectMapping("FOTO")]
        public string Foto
        {
            get { return foto; }
            set { foto = value; }
        } // end prop Foto

        [OracleObjectMapping("ESTADO")]
        public string Estado
        {
            get { return estado; }
            set { estado = value; }
        } // end prop Estado

        [OracleObjectMapping("ROL")]
        public Rol Rol
        {
            get { return rol; }
            set { rol = value; }
        } // end prop Rol

        [OracleObjectMapping( "ULTIMA_MODIFICACION" )]
        public DateTime UltimaModificacion
        {
            get { return ultimaModificacion; }
            set { ultimaModificacion = value; }
        } // end prop UltimaModificacion

        public void FromCustomObject(OracleConnection con, IntPtr pUdt)
        {
            OracleUdt.SetValue( con, pUdt, "ID", id );

            if (nombreUsuario != null)
                OracleUdt.SetValue( con, pUdt, "NOMBRE_USUARIO", nombreUsuario );

            if (nombre != null)
                OracleUdt.SetValue( con, pUdt, "NOMBRE", nombre );

            if (apellido != null)
                OracleUdt.SetValue( con, pUdt, "APELLIDO", apellido );

            if (documento != null)
                OracleUdt.SetValue(con, pUdt, "DOCUMENTO", documento);

            if (contrasena != null)
                OracleUdt.SetValue( con, pUdt, "CONTRASENA", contrasena );

            if (correo != null)
                OracleUdt.SetValue( con, pUdt, "CORREO", correo );

            if (foto != null)
                OracleUdt.SetValue( con, pUdt, "FOTO", foto );

            OracleUdt.SetValue( con, pUdt, "ESTADO", estado );

            if (rol != null)
                OracleUdt.SetValue( con, pUdt, "ROL", rol );

            OracleUdt.SetValue( con, pUdt, "ULTIMA_MODIFICACION", ultimaModificacion );
        }

        public void ToCustomObject(OracleConnection con, IntPtr pUdt)
        {
            id = (Int32)OracleUdt.GetValue( con, pUdt, "ID" );
            nombre = (string)OracleUdt.GetValue( con, pUdt, "NOMBRE" );
            nombreUsuario = (string)OracleUdt.GetValue(con, pUdt, "NOMBRE_USUARIO");
            apellido = (string)OracleUdt.GetValue(con, pUdt, "APELLIDO");
            documento = (string)OracleUdt.GetValue(con, pUdt, "DOCUMENTO");
            correo = (string)OracleUdt.GetValue(con, pUdt, "CORREO");
            contrasena = (string)OracleUdt.GetValue(con, pUdt, "CONTRASENA");
            foto = (string)OracleUdt.GetValue(con, pUdt, "FOTO");
            estado = (string)OracleUdt.GetValue(con, pUdt, "ESTADO");
            rol = (Rol)OracleUdt.GetValue( con, pUdt, "ROL" );
            ultimaModificacion = (DateTime)OracleUdt.GetValue( con, pUdt, "ULTIMA_MODIFICACION" );
        }

        public override string ToString()
        {
            return "Usuario( \n" + Id + ", '" + Nombre + " " + Apellido + " " + Documento + 
                    "\nCorreo: " + Correo + "\nFoto: " + Foto +
                    "\nEstado: " + ((estado == "A") ? "Activo" : "Inactivo") +
                    "\nRol: " + Rol +"\n)";
        }
    } // end Usuario
} // end namespace
