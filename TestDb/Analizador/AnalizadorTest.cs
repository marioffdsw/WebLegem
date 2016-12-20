using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Dao;

namespace TestDb.Analizador
{
    public class AnalizadorTest
    {
        public static void Main(string[] args)
        {
            var tdDao = new TipoDocumentoDao();
            var taDao = new TipoAnotacionDao();
            var eDao = new EntidadDao();

            var aa = new AnallizadorAnotaciones(tdDao, eDao, taDao);
            //var res = aa.AnalizarPorPosiblesAnotaciones(@"CIRCULAR No. 005
            aa.AnalizarPorPosiblesAnotaciones(@"CIRCULAR No. 005            
San Juan de Pasto, 2 de marzo de 2016
PARA: VICERRECTORES, DECANOS, DIRECTORES DE PROGRAMAS, JEFES DE DEPENDENCIAS.
DE: DIVISKJN DE RECURSOS HUMANOS
ASUNTO: SUSPENSKJN DE ACTIVIDADES 22 Y 23 DE MARZO
Cordial Saludo:
Se encuentra derogado el articulo
En consideraciOn a la solicitud elevada por un grupo de personas vinculadas por contrato laboral a la Universidad de NariFio, teniendo en cuenta que mediante ResoluciOn 0398 de 2016 se estableciO la suspensiOn de actividades 10s dias 22 y 23 de marzo de 2016 y con el fin de prestar todos 10s servicios en la jornada laboral de reposiciOn prevista para el personal Docente de Tiempo completo, Empleados de Carrera, Trabajadores oficiales y de Libre nombramiento y remociOn, exceptudndose a 10s trabajadores del Fondo de Salud, Granjas y Vigilancia, se hace necesario incluir al personal vinculado mediante contrato laboral en dicha jornada y en consecuencia en el periodo de suspensiOn de actividades de 10s dias veintidOs (22) y veintitrCs (23) de marzo de 2016.
Para el personal vinculado mediante contrato laboral, las jornadas de reposiciOn, serdn las siguientes:
De lunes a Viernes a partir del dia tres (3) de marzo y hasta el dia dieciocho (18) de marzo de 2016, de la siguiente manera: 10s dias jueves tres (3), viernes cuatro (4) y lunes siete (7) de marzo de 7:00 am. a 12:00 m y de 2:00 p.m. a 7:00 p.m., y a partir del dia mattes ocho (8) hasta el viernes dieciocho (18) de marzo: de 7:30 a.m. a 12:00 m. y de 2:00 p.m. a 6:30 p.m.

Se modifica el acuerdo 005 y se modifica parcialmente la circular 10 del 15 de Diciembre del 2014
Queda reglamentada la ley 30 del 24 de Mayo del 2001 y se deroga la norma
Atentamente,
,aEU;Br,1 GU,,,RR,, Jefe DivisiOn Recurs Humanos
")
            .ForEach(x => Console.WriteLine(x + "\n--------------------------------------------\n\n"));
            //Console.WriteLine( res );
        } // end method Main
    } // end method AnalizadorTest
} // end namespace TestDb.Analizador