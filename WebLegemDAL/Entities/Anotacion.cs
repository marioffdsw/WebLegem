using Oracle.DataAccess.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Oracle.DataAccess.Client;
using WebLegemDAL.Models;

namespace WebLegemDAL.Models
{
    public class Anotacion : INullable, IOracleCustomType
    {
        private bool isNull;
        private int id;
        private Documento documentoAnotante;
        private Documento documentoAnotado;
        private TipoAnotacion tipoAnotacion;
        private String descripcion;
        private DateTime fecha;


        public bool IsNull
        {
            get
            {
                return isNull;
            }
        }

        public static Anotacion Null
        {
            get
            {
                Anotacion a = new Anotacion();
                a.isNull = true;
                return a;
            }
        }

        [OracleObjectMapping("ID")]
        public int Id
        {
            get { return id; }
            set { id = value; }
        }


        [OracleObjectMapping("DOC_ANOTANTE")]
        public Documento DocumentoAnotante
        {
            get { return documentoAnotante; }
            set { documentoAnotante = value; }
        }

        [OracleObjectMapping("DOC_ANOTADO")]
        public Documento DocumentoAnotado
        {
            get { return documentoAnotado; }
            set { documentoAnotado = value; }
        }

        [OracleObjectMapping("TIPO_ANOTACION")]
        public TipoAnotacion TipoAnotacion
        {
            get { return tipoAnotacion; }
            set { tipoAnotacion = value; }
        }

        [OracleObjectMapping("FECHA")]
        private DateTime Fecha
        {
            get { return fecha; }
            set { fecha = value; }
        }

        [OracleObjectMapping("DESCRIPCION")]
        private String Descripcion
        {
            get { return descripcion; }
            set { descripcion = value; }
        }

        public void FromCustomObject(OracleConnection con, IntPtr pUdt)
        {
            OracleUdt.SetValue(con, pUdt, "ID", id);

            if (fecha != null)
                OracleUdt.SetValue(con, pUdt, "FECHA", fecha);

            if (documentoAnotante != null)
                OracleUdt.SetValue(con, pUdt, "DOC_ANOTANTE", documentoAnotante);

            if (documentoAnotado != null)
                OracleUdt.SetValue(con, pUdt, "DOC_ANOTADO", documentoAnotado);

            if (tipoAnotacion != null)
                OracleUdt.SetValue(con, pUdt, "TIPO_ANOTACION", tipoAnotacion);

            if (descripcion != null)
                OracleUdt.SetValue(con, pUdt, "DESCRIPCION", descripcion);

        }

        public void ToCustomObject(OracleConnection con, IntPtr pUdt)
        {
            Id = (int)OracleUdt.GetValue(con, pUdt, "ID");
            Descripcion = (String)OracleUdt.GetValue(con, pUdt, "DESCRIPCION");
            fecha = (DateTime)OracleUdt.GetValue(con, pUdt, "FECHA");
            DocumentoAnotado = (Documento)OracleUdt.GetValue(con, pUdt, "DOC_ANOTADO");
            DocumentoAnotante = (Documento)OracleUdt.GetValue(con, pUdt, "DOC_ANOTANTE");
            TipoAnotacion = (TipoAnotacion)OracleUdt.GetValue(con, pUdt, "TIPO_ANOTACION");
        }

        public override string ToString()
        {
            return $"Anotacion( {Id}, TipoAnotacion: {TipoAnotacion}, Anotado: {DocumentoAnotado}, Anotante: {DocumentoAnotante} )";
        }    
    } // end class Anotacion
} // end namespace WebLegemDAL.Anotacion