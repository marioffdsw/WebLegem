using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebLegemAPI.Models.FileHandlers
{
    public interface IFileHandlerCreator
    {
       IFileHandler CreateFileHandler();
    } // end class FileNameCreator
} // end namespace WebLegemAPI.Models.FileHandlers