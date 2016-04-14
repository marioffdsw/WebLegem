using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilesDal
{
    public interface IDataAccessObject<T>
    {
        void Delete(int id);
        T Update(T registro);
        T Create(T registro);
        T Get(int id);
        IQueryable<T> GetAll();
    }
}
