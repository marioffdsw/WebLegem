using Oracle.DataAccess.Client;
using Oracle.DataAccess.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PruebaOracleUDT
{
    class Program
    {
        static void Main(string[] args)
        {
            string constr = "user id=web_legem;password=web_legem;data source=ORCL";            
            string sql = "select VALUE(td) from tipo_doc_obj_tab td";

            OracleConnection con = new OracleConnection() { ConnectionString = constr };

            con.Open();

            OracleCommand cmd = new OracleCommand(sql, con);
            cmd.CommandType = System.Data.CommandType.Text;

            OracleDataReader reader = cmd.ExecuteReader();

            while (reader.Read())
            {
                TipoDocumento td;
                if (reader.IsDBNull(0))
                    td = TipoDocumento.Null;
                else
                    td = (TipoDocumento)reader.GetValue(0);


                Console.WriteLine( td );
            }

            reader.Dispose();
            cmd.Dispose();
            con.Close();
            con.Dispose();
        } // end Main   
    } // end Program class
}

namespace PruebaOracleUDT {
    /* TipoDocumento Class */
    /* una instancia de la clase TipoDocumento representa un objeto web_legem.tipo_doc_typ
        el tipo personalizado debe implementar las interfaces INullable y IOracleCustomType
    */
    public class TipoDocumento : INullable, IOracleCustomType
    {
        private bool isNull; // implementacion de INUllable
        private int id; // atributo id del typ
        private string nombre; // atributo nombre del typ

        // Implementation of INullable.IsNull
        public virtual bool IsNull
        {
            get
            {
                return isNull;
            }
        } // end IsNull prop

        // Person.Null is used to return a NULL Person object
        public static TipoDocumento Null
        {
            get
            {
                TipoDocumento p = new TipoDocumento();
                p.isNull = true;
                return p;
            }
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

        }

        [OracleObjectMappingAttribute( "ID" )]
        public int Id
        {
            get
            {
                return id;
            }

            private set
            {
                id = value;
            }
        }

        public virtual void FromCustomObject(OracleConnection con, IntPtr pUdt)
        {
            // Convierte de Custom Type a Oracle Object

            // establece el atributo "ID"
            // por defecto el atributo id sera establecido a NULL            
            OracleUdt.SetValue(con, pUdt, "ID", id);

            // establece el atributo "NOMBRE"
            // por defecto el atributo "NOMBRE" sera establecido a NULL             
            if (nombre != null)
            {
                OracleUdt.SetValue(con, pUdt, "NOMBRE", nombre);                
            }                        
        } // end method FromCustomObject

        // Implementation of IOracleCustomType.ToCustomObject()
        public virtual void ToCustomObject(OracleConnection con, IntPtr pUdt)
        {
            // Convert from the Oracle Object to a Custom Type

            // Get the "ADDRESS" attribute
            // If the "ADDRESS" attribute is NULL, then OracleString.Null will be returned
            id = (Int32)OracleUdt.GetValue(con, pUdt, "ID");

            // Get the "NAME" attribute
            // If the "NAME" attribute is NULL, then null will be returned
            nombre = (string)OracleUdt.GetValue(con, pUdt, "NOMBRE");                                    
        }

        public override string ToString()
        {
            return "TipoDocumento( " + Id + ", " + Nombre + " )";
        }    
    } // end TipoDocumento class


    /* PersonFactory Class
**   An instance of the PersonFactory class is used to create Person objects
*/
    [OracleCustomTypeMappingAttribute("WEB_LEGEM.TIPO_DOC_TYP")]
    public class PersonFactory : IOracleCustomTypeFactory
    {
        // Implementation of IOracleCustomTypeFactory.CreateObject()
        public IOracleCustomType CreateObject()
        {
            // Return a new custom object
            return new TipoDocumento();
        }
    }
}