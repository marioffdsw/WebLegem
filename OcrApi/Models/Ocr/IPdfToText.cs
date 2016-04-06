using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OcrApi.Models.Ocr
{
    interface IPdfToText
    {
        String Convertir(String path);
    }
}
