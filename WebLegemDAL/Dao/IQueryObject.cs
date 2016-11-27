using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebLegemDAL
{
    public interface IQueryObject<T>
    {
        T Return { get; set; }
    }
}
