using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Dao;
using WebLegemDAL.Models;

namespace TestDb
{
    class Program
    {
        static void Main(string[] args)
        {
            //TestTipoDocumento();
            //TestTipoEntidad();
            //TestEntidad();
            //TestTipoAnotacion();
            //TestArchivo();
            //TestRecurso();
            //TestRoles();
            PopulateDB();
        }

        public static void TestArchivo()
        {
            //CreateAr();
            //ArchivoTest.GetAr();
        }

        public static void TestTipoAnotacion()
        {
            //CreateTa();
            //GetAllTa();
            //GetTa();
            //UpdateTa();            
            //DeleteTa();
            //GetAllTa();            
            //GetAllTa();
            //TestDb.TestTipoAnotacion.PopulateTa();
        }

        public static void TestEntidad()
        {
            //CreateE();
            //DeleteE();
            //GetAllE();
            //GetE();
            //UpdateE();
            //GetAllE();
            //DeleteAllE();
            //EntidadTest.PopulateE();
            //GetAllE();
        } 

        public static void TestTipoEntidad()
        {
            //CreateTE();
            //PrintTE();
            //PrintAllTe();
            //UpdateTe();
            //DeleteTe();
            //PrintAllTe();
            //DeleteAllTe();
            //PrintAllTe();
            //PopulateTe();
            TipoEntidadTest.PopulateTe();
        }

        public static void TestTipoDocumento()
        {
            //Create();
            //GetAll();
            //Get();
            //Update();
            //Delete();
            //TipoDocumentoTest.Populate();
            //GetAll();
            //DeleteAll();
            //TipoDocumentoTest.GetAll();
        } // end method TestTipoDocumento

        public static void TestRecurso()
        {
            RecursosTest.GetAll();
        } // end method TestRecurso

        public static void TestRoles()
        {
            //RolesTest.Create();
            //RolesTest.GetAll();
            //RolesTest.Get();
            //RolesTest.Update();
            //RolesTest.Delete();
        } // end method TestRoles

        public static void PopulateDB()
        {
            var tdDao = new TipoDocumentoDao();
            var teDao = new TipoEntidadDao();
            var eDao = new EntidadDao();
            var rDao = new RolDao();
            var uDao = new UsuarioDao();
            var taDao = new TipoAnotacionDao();
            var recDao = new RecursoDao();

            var ley = new TipoDocumento() { Nombre = "Ley" };
            ley = tdDao.Create(ley).Value;

            var acuerdo = new TipoDocumento() { Nombre = "Acuerdo" };
            acuerdo = tdDao.Create(acuerdo).Value;

            var circular = new TipoDocumento() { Nombre = "circular" };
            circular = tdDao.Create(circular).Value;

            var resolucion = new TipoDocumento() { Nombre = "Resolución" };
            resolucion = tdDao.Create(resolucion).Value;

            var reglamento = new TipoDocumento() { Nombre = "Reglamento" };
            reglamento = tdDao.Create(reglamento).Value;

            var estatuto = new TipoDocumento() { Nombre = "Estatuto" };
            estatuto = tdDao.Create(estatuto).Value;


            var rectoria = new TipoEntidad()
            {
                Nombre = "Rectoria",
                DocumentosSoportados = new TipoDocumento[] { ley, acuerdo, circular, resolucion, reglamento, estatuto }
            };
            rectoria = teDao.Create(rectoria).Value;

            var consejoSup = new TipoEntidad()
            {
                Nombre = "Consejo Superior",
                DocumentosSoportados = new TipoDocumento[] { ley, acuerdo, circular, resolucion, reglamento, estatuto }
            };
            consejoSup = teDao.Create(consejoSup).Value;

            var secretEduc = new TipoEntidad()
            {
                Nombre = "Secretaría de Educación",
                DocumentosSoportados = new TipoDocumento[] { ley, acuerdo, circular, resolucion, reglamento }
            };
            secretEduc = teDao.Create(secretEduc).Value;

            var facultad = new TipoEntidad()
            {
                Nombre = "Facultad",
                DocumentosSoportados = new TipoDocumento[] { acuerdo, circular, resolucion }
            };
            facultad = teDao.Create(facultad).Value;

            var departamento = new TipoEntidad()
            {
                Nombre = "Departamento",
                DocumentosSoportados = new TipoDocumento[] { circular, acuerdo }
            };
            departamento = teDao.Create(departamento).Value;

            var eRectoria = new Entidad() { Nombre = "Rectoria", TipoEntidad = rectoria };
            eRectoria = eDao.Create(eRectoria).Value;

            var eConsejoSup = new Entidad() { Nombre = "Consejo Superior", TipoEntidad = consejoSup };
            eConsejoSup = eDao.Create(eConsejoSup).Value;

            var eSecreEdu = new Entidad() { Nombre = "Secretaría de Educación", TipoEntidad = secretEduc };
            eSecreEdu = eDao.Create(eSecreEdu).Value;

            var facIng = new Entidad() { Nombre = "Facultad de Ingeniería", TipoEntidad = facultad };
            facIng = eDao.Create(facIng).Value;

            var facCienAgro = new Entidad() { Nombre = "Facultad de Ciencias Agronomicas", TipoEntidad = facultad };
            facCienAgro = eDao.Create(facCienAgro).Value;

            var facMedicina = new Entidad() { Nombre = "Facultad de Medicina", TipoEntidad = facultad };
            facMedicina = eDao.Create(facMedicina).Value;

            var ingSis = new Entidad() { Nombre = "Departamento de Systemas", TipoEntidad = departamento };
            ingSis = eDao.Create(ingSis).Value;

            var ingEle = new Entidad() { Nombre = "Departamento de Electrónica", TipoEntidad = departamento };
            ingEle = eDao.Create(ingEle).Value;

            var ingCiv = new Entidad() { Nombre = "Departamento de Ingeniería Civil", TipoEntidad = departamento };
            ingCiv = eDao.Create(ingCiv).Value;

            var dao = new TipoAnotacionDao();

            dao.Create(new TipoAnotacion() { Nombre = "Deroga", Raiz = "Derog" });
            dao.Create(new TipoAnotacion() { Nombre = "Modifica", Raiz = "Modific" });
            dao.Create(new TipoAnotacion() { Nombre = "Reglamenta", Raiz = "Reglament" });


            var reDao = new RecursoDao();            
            var supAdmin = new Rol() { Nombre = "Super Admin", PermisosAsignados = reDao.GetAll().ToArray() };
            supAdmin = rDao.Create(supAdmin).Value;


            var admin = new Usuario() { Nombre = "Super", Apellido = "Admin", NombreUsuario = "admin", Contrasena = "123", Correo = "marioffdsw@gmail.com", Estado = "A", Rol = supAdmin, Foto = "BodyPart_21f4f8f0-6e6e-498a-bb57-0369ba70143d" };
            admin = uDao.Create( admin ).Value;            

        } // en method PopulateDb
    }
}   
