using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebLegemAPI.Models.FileHandlers
{
    public class FileHandlerCreator<T> : IFileHandlerCreator
        where T : IFileHandler, new()
    {
        public IFileHandler CreateFileHandler()
        {
            return new T();
        }
    }
}