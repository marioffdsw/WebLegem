using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Models;

namespace PruebasDB
{
    class Program
    {
        static void Main(string[] args)
        {
            var tipoEntidadDal = new TipoEntidadDAL();
            string connStr = "user id=web_legem;password=web_legem;data source=ORCL";

            tipoEntidadDal.OpenConnection(connStr);

            var listaTiposEntidad = tipoEntidadDal.GetAllTipoEntidad();

            foreach ( var tipo in listaTiposEntidad )
            {
                Console.WriteLine( tipo );
            }

            tipoEntidadDal.CloseConnection();
        }
    }
}
