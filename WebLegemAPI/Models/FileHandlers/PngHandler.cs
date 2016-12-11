using System;
using System.Net.Http;
using System.Threading.Tasks;
using System.Linq;
using System.Configuration;

namespace WebLegemAPI.Models.FileHandlers
{
    internal class PngHandler : IFileHandler
    {
        public async Task<String> SaveFile(HttpRequestMessage request)
        {
            var picturesDirectory = ConfigurationManager.AppSettings["picturesDir"].ToString();

            var streamProvider = new MultipartFormDataStreamProvider( picturesDirectory );

            await request.Content.ReadAsMultipartAsync( streamProvider );

            return streamProvider.FileData.Select(i => i.LocalFileName).First();
        }
    }
}