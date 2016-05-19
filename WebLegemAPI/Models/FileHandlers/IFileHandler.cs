using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;

namespace WebLegemAPI.Models.FileHandlers
{
    public interface IFileHandler
    {
        Task<String> SaveFile( HttpRequestMessage request );
    }
}