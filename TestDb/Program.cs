using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static TestDb.TipoDocumentoTest;
using static TestDb.TipoEntidadTest;
using static TestDb.EntidadTest;
using static TestDb.TestTipoAnotacion;
using static TestDb.ArchivoTest;

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
            TestArchivo();
        }

        public static void TestArchivo()
        {
            //CreateAr();
            GetAr();
        }

        public static void TestTipoAnotacion()
        {
            //CreateTa();
            //GetAllTa();
            //GetTa();
            //UpdateTa();            
            //DeleteTa();
            //GetAllTa();
            //PopulateTa();
            //GetAllTa();
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
            //PopulateE();
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
            PrintAllTe();
        }

        public static void TestTipoDocumento()
        {
            //Create();
            //GetAll();
            //Get();
            //Update();
            //Delete();
            //Populate();
            GetAll();
            //DeleteAll();
            //GetAll();
        } // end method TestTipoDocumento
    }
}
