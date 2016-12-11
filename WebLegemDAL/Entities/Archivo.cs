using Oracle.DataAccess.Client;
using Oracle.DataAccess.Types;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebLegemDAL.Models
{
    public class Archivo : INullable, IOracleCustomType
    {
        private int id;
        private string ruta;
        private DateTime ultimaModificacion;

        private bool isNull;

        [OracleObjectMapping( "ID" )]
        public int Id
        {
            get { return id; }
            set { id = value; }
        }

        [OracleObjectMapping( "RUTA" )]
        public string Ruta
        {
            get { return ruta; }
            set { ruta = value; }
        }

        [OracleObjectMapping( "ULTIMA_MODIFICACION" )]
        public DateTime UltimaModificacion
        {
            get { return ultimaModificacion; }
            set { ultimaModificacion = value; }
        }

        public bool IsNull
        {
            get { return isNull; }
        }

        public static Archivo Null
        {
            get
            {
                var a = new Archivo();
                a.isNull = true;
                return a;
            }
        }

        public string Extension
        {
            get
            {
                return Path.GetExtension( Ruta );
            }
        }

        public void FromCustomObject(OracleConnection conn, IntPtr pUdt)
        {
            OracleUdt.SetValue( conn, pUdt, "ID", Id );

            OracleUdt.SetValue( conn, pUdt, "RUTA", Ruta );

            OracleUdt.SetValue( conn, pUdt, "ULTIMA_MODIFICACION", UltimaModificacion );
        }

        public void ToCustomObject(OracleConnection conn, IntPtr pUdt)
        {
            Id = (int)OracleUdt.GetValue( conn, pUdt, "ID" );
            Ruta = (string)OracleUdt.GetValue( conn, pUdt, "RUTA" );
            UltimaModificacion = (DateTime)OracleUdt.GetValue( conn, pUdt, "ULTIMA_MODIFICACION" );
        }

        public override string ToString()
        {
            return String.Format("Archivo( {0}, {1}, {2} )", Id, Ruta, UltimaModificacion);
        }
    }
}
