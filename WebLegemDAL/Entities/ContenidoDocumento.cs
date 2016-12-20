using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Oracle.DataAccess.Types;
using Newtonsoft.Json;
using Oracle.DataAccess.Client;
using System.Configuration;
using WebLegemDAL.Dao;

namespace WebLegemDAL.Models
{
    public class ContenidoDocumento : INullable, IOracleCustomType
    {
        /**********************************************************************************
         **********************************************************************************
         *
         *   ATRIBUTES
         *            
         **********************************************************************************/

        private int id;
        private Documento documento;
        private Archivo archivo;
        private string asunto;
        private OracleBFile contenido;
        private Boolean isNull;
        //private Boolean tieneAnotaciones;     



        /**********************************************************************************
         **********************************************************************************
         *
         *   PROPERTIES
         *            
         **********************************************************************************/


        [OracleObjectMapping( "ID" )]
        public int Id
        {
            get { return id; }
            set { id = value; }
        } // fin prop Id

        [OracleObjectMappingAttribute("DOCUMENTO")]
        public Documento Documento
        {
            get { return documento; }
            set { documento = value; }
        } // fin prop Documento

        [OracleObjectMappingAttribute("ARCHIVO")]
        public Archivo Archivo
        {
            get { return archivo; }
            set { archivo = value; }
        }

        [OracleObjectMappingAttribute("ASUNTO")]
        public string Asunto
        {
            get { return asunto; }
            set { asunto = value; }
        } // fin prop Asunto         

        [JsonIgnore]
        [OracleObjectMappingAttribute("CONTENIDO")]
        public OracleBFile Contenido
        {
            get {                
                return contenido;
            }
            set { contenido = value; }
        } // fin prop Contenido      
        
        //public static Boolean TieneAnotaciones
        //{
        //    get { return TieneAnotaciones; }
        //    set { TieneAnotaciones = value; }
        //}  

        public static ContenidoDocumento Null
        {
            get
            {
                var doc = new ContenidoDocumento();
                doc.isNull = true;
                return doc;
            }
        } // fin Null prop

        public bool IsNull
        {
            get
            {
                return isNull;
            }
        }



        /**********************************************************************************
         **********************************************************************************
         *
         *   OVERWRITTEN METHODS
         *            
         **********************************************************************************/

        public virtual void FromCustomObject(OracleConnection con, IntPtr pUdt)
        {
            OracleUdt.SetValue( con, pUdt, "ID", Id );
            OracleUdt.SetValue( con, pUdt, "DOCUMENTO", Documento);

            OracleUdt.SetValue( con, pUdt, "ARCHIVO", Archivo );

            if (asunto != null)
                OracleUdt.SetValue(con, pUdt, "ASUNTO", Asunto);

            if (contenido != null)
            {
                OracleUdt.SetValue(con, pUdt, "CONTENIDO", contenido);
            }
            else
            {
                // TODO - create a oracle bfile to save
                var oracleDirName = ConfigurationManager.AppSettings["oracleDir"].ToString();                
                Contenido = new OracleBFile( con, oracleDirName, Archivo.Nombre + ".txt" );
                OracleUdt.SetValue( con, pUdt, "CONTENIDO", Contenido );
            } // end else

            
        } // fin method FromCustomObject

        public virtual void ToCustomObject(OracleConnection con, IntPtr pUdt)
        {
            Id = (int)OracleUdt.GetValue( con, pUdt, "ID" );
            Documento= (Documento)OracleUdt.GetValue( con, pUdt, "DOCUMENTO" );
            archivo = (Archivo)OracleUdt.GetValue( con, pUdt, "ARCHIVO" );
            asunto = (string)OracleUdt.GetValue(con, pUdt, "ASUNTO");
            contenido = (OracleBFile)OracleUdt.GetValue( con, pUdt, "CONTENIDO" );
            
        } // end ToCustomObject method

        public override string ToString()
        {
            return base.ToString() + string.Format("\nContenido( {0} {1}, {2}, {3}, {4} )\n",
                Id, Documento, Archivo, Asunto, Contenido );
        }
    }
}
