
using System.Linq;
using WebLegemDAL.Models;

namespace WebLegemDAL
{
    public interface IGestorDeConsultas<TQueryObject, T> where TQueryObject : IQueryObject<T>
    {
        IQueryable<T> Consultar( TQueryObject queryObject );        
    }
}
