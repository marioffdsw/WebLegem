using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebLegemDAL.Dao;
using WebLegemDAL.Models;

namespace TestDb
{
    public class RolesTest
    {
        public static void Create()
        {
            var rolDao = new RolDao();
            var recDao = new RecursoDao();

            var recursos = recDao.GetAll();

            var admin = new Rol()
            {
                Nombre = "Administrador",
                PermisosAsignados = new Recurso[] {
                    recursos.ToList<Recurso>().Where( x => x.Id == 1 ).Select(x => x ).First(),
                    recursos.ToList<Recurso>().Where( x => x.Id == 2 ).Select(x => x ).First(),
                    recursos.ToList<Recurso>().Where( x => x.Id == 3 ).Select(x => x ).First(),
                }
            };

            var secre = new Rol()
            {
                Nombre = "Secretaria",
                PermisosAsignados = new Recurso[] {
                    recursos.ToList<Recurso>().Where( x => x.Id == 2 ).Select(x => x ).First(),
                }
            };

            admin = rolDao.Create(admin).Value;
            secre = rolDao.Create(secre).Value;

            Console.WriteLine( admin );
            Console.WriteLine( secre );
        } // end method Create

        public static void GetAll()
        {
            var dao = new RolDao();
            dao.GetAll().ToList<Rol>().ForEach(x => Console.WriteLine(x));
        } // end method GetAll

        public static void Get()
        {
            var dao = new RolDao();
            Console.WriteLine(dao.Get(2).Value);
        } // end method Get

        public static void Update()
        {
            var dao = new RolDao();
            var secre = dao.Get(2).Value;
            secre.Nombre = "Secretaria Updated";
            secre = dao.Update(secre).Value;
            Console.WriteLine(secre);
        } // end method Update

        public static void Delete()
        {
            var dao = new RolDao();
            GetAll();
            dao.Delete( 2 );
            GetAll();
        } // end method Delete
    } // end class TolesTest
} // end namespace TestDb