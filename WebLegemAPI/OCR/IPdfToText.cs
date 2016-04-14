using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebLegemAPI.OCR
{
    public interface IPdfToText
    {
        String Convertir(String path, String fileName );        
    }
}
