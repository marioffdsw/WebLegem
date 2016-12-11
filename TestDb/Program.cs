using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
    
namespace TestDb
{
    class Program
    {
        static void Main(string[] args)
        {
            //TestTipoDocumento();
            TestTipoEntidad();
            //TestEntidad();
            //TestTipoAnotacion();
            //TestArchivo();
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
    }
}
