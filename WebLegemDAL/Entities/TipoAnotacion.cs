using Newtonsoft.Json;
using Oracle.DataAccess.Client;
using Oracle.DataAccess.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebLegemDAL.Models
{
    public class TipoAnotacion: INullable, IOracleCustomType
    {

        /**********************************************************************************
         **********************************************************************************
         *
         *   ATRIBUTES
         *            
         **********************************************************************************/

        private int id;
        private string nombre;
        private string raiz;

        private bool isNull;



        /**********************************************************************************
         **********************************************************************************
         *
         *   PROPERTIES
         *            
         **********************************************************************************/

        [JsonIgnore]
        public virtual bool IsNull
        {
            get { return isNull; }
        } // fin prop IsNull

        [JsonIgnore]
        public static TipoAnotacion Null
        {
            get
            {
                TipoAnotacion ta = new TipoAnotacion();
                ta.isNull = true;
                return ta;
            }
        } // fin prop Null

        [OracleObjectMapping("ID")]
        public int Id
        {
            get { return id; }
            set { id = value; }
        } // fin prop Id

        [OracleObjectMapping("NOMBRE")]
        public string Nombre
        {
            get { return nombre; }
            set { nombre = value; }
        } // fin prop Nombre

        [OracleObjectMapping( "RAIZ" )]
        public String Raiz
        {
            get { return raiz; }
            set { raiz = value; }
        } // fin prop Raiz



        /**********************************************************************************
         **********************************************************************************
         *
         *  OVERWRITTEN METHODS
         *                     
         **********************************************************************************/

        public virtual void FromCustomObject(OracleConnection con, IntPtr pUdt)
        {
            OracleUdt.SetValue(con, pUdt, "ID", id);

            if (nombre != null)
                OracleUdt.SetValue(con, pUdt, "NOMBRE", nombre);

            if (raiz != null)
                OracleUdt.SetValue( con, pUdt, "RAIZ", raiz );
        } // fin method FromCustomObject

        public virtual void ToCustomObject( OracleConnection con, IntPtr pUdt )
        {
            Id = (Int32) OracleUdt.GetValue( con, pUdt, "ID" );
            Nombre = (string) OracleUdt.GetValue( con, pUdt, "NOMBRE" );
            Raiz = (string) OracleUdt.GetValue( con, pUdt, "RAIZ" );            
        } // fin method ToCustomObject

        public override string ToString()
        {
            return $"TipoAnotacion( {id}, {Nombre}, {raiz} )";
        } // fin method ToString

    } // end class TipoAnotacion
} // end namespace WebLegemDAL.Models