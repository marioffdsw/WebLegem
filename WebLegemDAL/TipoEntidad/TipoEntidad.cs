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
        private TipoDocumento[] documentosSoportados; // atributo documentos_soportados del typ

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

        [OracleObjectMappingAttribute( "DOCUMENTOS_SOPORTADOS" )]
        public TipoDocumento[] DocumentosSoportados
        {
            get
            {
                return documentosSoportados;
            }
            set
            {
                documentosSoportados = value;
            }
        }

        public virtual void FromCustomObject(OracleConnection con, IntPtr pUdt)
        {
            OracleUdt.SetValue(con, pUdt, "ID", id);

            if (nombre != null)
            {
                OracleUdt.SetValue(con, pUdt, "NOMBRE", nombre);
            }

            OracleUdt.SetValue( con, pUdt, "DOCUMENTOS_SOPORTADOS", DocumentosSoportados );
        } // end method FromCustomObject

        public virtual void ToCustomObject(OracleConnection con, IntPtr pUdt)
        {
            // Convert from the Oracle Object to a Custom Type

            id = (Int32)OracleUdt.GetValue(con, pUdt, "ID");

            nombre = (string)OracleUdt.GetValue(con, pUdt, "NOMBRE");

            documentosSoportados = (TipoDocumento[])OracleUdt.GetValue( con, pUdt, "DOCUMENTOS_SOPORTADOS" );
        } // end ToCustomObject method

        public override string ToString()
        {
            return "TipoEntidad( " + Id + ", '" + Nombre + "', " + ListarDocumentosSoportados() +  " )";
        } // end ToString method

        private string ListarDocumentosSoportados()
        {
            string listaDocumentos = "[ ";

            foreach (var documento in DocumentosSoportados)
            {
                listaDocumentos += documento + ", ";
            }

            listaDocumentos += "]";

            return listaDocumentos;
        }
    } // end TipoEntidad class
} // end namespace