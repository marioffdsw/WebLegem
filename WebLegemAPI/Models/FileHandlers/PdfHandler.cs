using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;

namespace WebLegemAPI.Models.FileHandlers
{
    public class PdfHandler : IFileHandler
    {        
        Task<string> IFileHandler.SaveFile(HttpRequestMessage request)
        {
            throw new NotImplementedException();
        }
    } // end class PdfHandler
} // end namespace WebLegemAPI.Models.FileHandlers