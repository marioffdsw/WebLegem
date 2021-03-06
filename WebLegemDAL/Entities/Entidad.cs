﻿using Newtonsoft.Json;
using Oracle.DataAccess.Client;
using Oracle.DataAccess.Types;
using System;

namespace WebLegemDAL.Models
{
    public class Entidad : INullable, IOracleCustomType
    {

        /**********************************************************************************
         **********************************************************************************
         *
         *   ATRIBUTES
         *            
         **********************************************************************************/

        private int id;
        private string nombre;
        private string correo;
        private TipoEntidad tipoEntidad;
        private DateTime ultimaModificacion;

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
            get {
                return isNull;
            }
        } // fin prop IsNull

        // la propiedad Entidad.Null es usada para retornar un objeto Entidad sin datos        
        public static Entidad Null
        {
            get
            {
                Entidad e = new Entidad();
                e.isNull = true;
                return e;
            }
        } // fin prop Null

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
        } // fin prop Id

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
        } // fin prop Nombre       

        [OracleObjectMappingAttribute("CORREO")]
        public string Correo
        {
            get
            {
                return correo;
            }
            set
            {
                correo = value;
            }

        }

        [OracleObjectMappingAttribute("TIPO_ENTIDAD")]
        public TipoEntidad TipoEntidad
        {
            get
            {
                return tipoEntidad;
            }
            set
            {
                tipoEntidad = value;
            }
        } // fin prop TipoEntidad

        [OracleObjectMapping("ULTIMA_MODIFICACION")]
        public DateTime UltimaModificacion
        {
            get { return ultimaModificacion; }
            set { ultimaModificacion = value; }
        }



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

            if (correo != null)
                OracleUdt.SetValue(con, pUdt, "CORREO", correo);          

            if (tipoEntidad != null)
                OracleUdt.SetValue( con, pUdt, "TIPO_ENTIDAD", tipoEntidad );

            OracleUdt.SetValue( con, pUdt, "ULTIMA_MODIFICACION", UltimaModificacion);   

        } // fin method FromCustomObject

        // Convierte de Oracle Object a Custom .NET Type
        public virtual void ToCustomObject(OracleConnection con, IntPtr pUdt)
        {            
            Id = (Int32)OracleUdt.GetValue(con, pUdt, "ID");            
            Nombre = (string) OracleUdt.GetValue(con, pUdt, "NOMBRE");
            Correo = (string) OracleUdt.GetValue(con, pUdt, "CORREO");
            TipoEntidad = (TipoEntidad)OracleUdt.GetValue(con, pUdt, "TIPO_ENTIDAD");
            UltimaModificacion = (DateTime)OracleUdt.GetValue( con, pUdt, "ULTIMA_MODIFICACION");
        } // end ToCustomObject method

        public override string ToString()
        {
            return "Entidad( " + Id + ", " + Nombre + ", " + Correo +", " + tipoEntidad + " )";
        } // fin ToString method
    } // fin Entidad class    
} // fin namespace