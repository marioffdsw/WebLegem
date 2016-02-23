using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Oracle.DataAccess.Types;
using Newtonsoft.Json;
using Oracle.DataAccess.Client;

namespace WebLegemDAL.Models
{
    public class DocumentoConContenido : Documento, INullable, IOracleCustomType
    {
        /**********************************************************************************
         **********************************************************************************
         *
         *   ATRIBUTES
         *            
         **********************************************************************************/        

        private int idContenido;
        private int archivo;
        private string asunto;
        private OracleBFile contenido;        



        /**********************************************************************************
         **********************************************************************************
         *
         *   PROPERTIES
         *            
         **********************************************************************************/

        [OracleObjectMappingAttribute("ID_CONTENIDO")]
        public int IdContenido
        {
            get { return idContenido; }
            set { idContenido = value; }
        } // fin prop IdContenido

        [OracleObjectMappingAttribute("ARCHIVO")]
        public int Archivo
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
            get { return contenido; }
            set { contenido = value; }
        } // fin prop Contenido

        public static new DocumentoConContenido Null
        {
            get
            {
                var doc = new DocumentoConContenido();
                doc.isNull = true;
                return doc;
            }
        } // fin Null prop



        /**********************************************************************************
         **********************************************************************************
         *
         *   OVERWRITTEN METHODS
         *            
         **********************************************************************************/

        public override void FromCustomObject(OracleConnection con, IntPtr pUdt)
        {
            base.FromCustomObject(con, pUdt);

            OracleUdt.SetValue( con, pUdt, "ID_CONTENIDO", idContenido );

            OracleUdt.SetValue( con, pUdt, "ARCHIVO", archivo );

            if (asunto != null)
                OracleUdt.SetValue(con, pUdt, "ASUNTO", asunto);            

            if (contenido!= null)
                OracleUdt.SetValue(con, pUdt, "CONTENIDO", contenido);
            
        } // fin method FromCustomObject

        public override void ToCustomObject(OracleConnection con, IntPtr pUdt)
        {
            base.ToCustomObject(con, pUdt);

            idContenido = (int)OracleUdt.GetValue( con, pUdt, "ID_CONTENIDO" );
            archivo = (int)OracleUdt.GetValue( con, pUdt, "ARCHIVO" );
            asunto = (string)OracleUdt.GetValue(con, pUdt, "ASUNTO");
            contenido = (OracleBFile)OracleUdt.GetValue( con, pUdt, "CONTENIDO" );
        } // end ToCustomObject method

        public override string ToString()
        {
            return base.ToString() + string.Format("\nContenido( {0}, {1}, {2}, {3} )\n",
                    IdContenido, Archivo, Asunto, Contenido );
        }
    }
}
