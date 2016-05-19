using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Web;

namespace WebLegemAPI.Models.FileHandlers
{
    public class FileHandlerFactory
    {
        private static readonly Dictionary<String, IFileHandlerCreator> handlers;

        static FileHandlerFactory()
        {
            handlers = new Dictionary<string, IFileHandlerCreator>();

            // register Handler for the regular expression matching the file extension
            handlers.Add( "pdf", new FileHandlerCreator<PdfHandler>() );
            handlers.Add( "doc|docx", new FileHandlerCreator<DocHandler>() );
            handlers.Add( "rtf", new FileHandlerCreator<RtfHandler>() );
            handlers.Add( "png", new FileHandlerCreator<PngHandler>() );        
        } // end static constructor FileHandlerFactory

        public IFileHandler getHandler( HttpRequestMessage request )
        {
            // remember to include FileName custom header in each file upload request            
            var fileExtension = getFileExtension( request.Headers.GetValues( "FileName" ).First() );

            var fileHandlerCreator = handlers.Where( i =>
                Regex.Match(fileExtension, i.Key, RegexOptions.Singleline)
                    .Success)
                .Select(i => i.Value).Single();

            return fileHandlerCreator.CreateFileHandler();
        } // end method gethandler

        private string getFileExtension( string fileName )
        {
            return fileName.Replace( "\"", String.Empty )
                .Split( '.' )
                .Last();
        }
    } // end class FilehandlerFactory
} // end namespace WebLegemAPI.Models.FileHandlers