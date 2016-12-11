using System;
using System.Net.Http;
using System.Threading.Tasks;
using System.Linq;
using WebLegemCommon;


namespace WebLegemAPI.Models.FileHandlers
{
    internal class PngHandler : IFileHandler
    {
        public async Task<String> SaveFile(HttpRequestMessage request)
        {
            var streamProvider = new MultipartFormDataStreamProvider( Constants.picturesDirectory );

            await request.Content.ReadAsMultipartAsync( streamProvider );

            return streamProvider.FileData.Select(i => i.LocalFileName).First();
        }
    }
}