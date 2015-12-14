using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebLegemAPI.OCR
{
    interface IOcrPdfToText
    {
        String Convertir(String path);
    }
}
