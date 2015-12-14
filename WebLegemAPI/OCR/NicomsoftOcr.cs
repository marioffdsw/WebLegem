using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Web;
using NSOCRLib;
using System.Diagnostics;
using System.IO;
using Ghostscript.NET.Processor;
using System.Drawing;
using System.Text;
using System.Threading.Tasks;
using Ghostscript.NET;

namespace WebLegemAPI.OCR
{
    public partial class NiconsoftOcr
    {

        public String Convertir( String path, String fileN)
        {
            String fileName = path + @"\" + fileN;
            String ruta = path + @"\img\";
            String extension;

            extension = Path.GetExtension(fileName);

            string texto = "";

            if (extension.Equals(".pdf"))
            {
                String[] Imagenes;
                Imagenes = ConvertirPdfToImage(fileName);

                for (int i = 0; i < Imagenes.Length; i++)
                {
                    texto += ConvertirImageToText(Imagenes[i]);
                }

                foreach (string filePath in Imagenes)
                {
                    //File.Delete(filePath);
                }
            }
            else
            {
                //path = ConvertirImageToText(fileName);
            }

            return texto;
        }

        private String[] ConvertirPdfToImage(String absolutePath)
        {
            string inputFile = @"C:\oradata\web_legem\prueba6.pdf";
            string nombreArchivo = Path.GetFileName(absolutePath);
            string nombreArchivoSinExtencion = (nombreArchivo.Split('.'))[0];
            string outputFile = @"C:\oradata\web_legem\img\" + nombreArchivoSinExtencion + "-%03d.png";
            
            int pageFrom = 1;
            int pageTo = 50;

            using (GhostscriptProcessor ghostscript = new GhostscriptProcessor())
            {
                List<string> switches = new List<string>();
                switches.Add("-empty");
                switches.Add("-dSAFER");
                switches.Add("-dBATCH");
                switches.Add("-dNOPAUSE");
                switches.Add("-dNOPROMPT");
                switches.Add("-dFirstPage=" + pageFrom.ToString());
                switches.Add("-dLastPage=" + pageTo.ToString());
                switches.Add("-sDEVICE=png16m");
                switches.Add("-r96");
                switches.Add("-dTextAlphaBits=4");
                switches.Add("-dGraphicsAlphaBits=4");
                switches.Add(@"-sOutputFile=" + outputFile);
                switches.Add(@"-f");
                switches.Add(inputFile);

                ghostscript.Process(switches.ToArray());
            }

            string[] dirs = Directory.GetFiles(@"C:\oradata\web_legem\img\");

            var archivos = from files in dirs
                           where files.Contains(nombreArchivoSinExtencion)
                           select files;

            return archivos.ToArray();
        }

        private String ConvertirImageToText(String absolutePath)
        {
            int CfgObj, OcrObj, ImgObj;
            NSOCRLib.NSOCRClassClass NsOCR = new NSOCRLib.NSOCRClassClass();
            NsOCR.Engine_InitializeAdvanced(out CfgObj, out OcrObj, out ImgObj);

            NsOCR.Cfg_SetOption(CfgObj, TNSOCR.BT_DEFAULT, "Languages/Spanish", "1");
            NsOCR.Cfg_SetOption(CfgObj, TNSOCR.BT_DEFAULT, "Languages/English", "0");

            NsOCR.Img_LoadFile(ImgObj, absolutePath);
            NsOCR.Img_OCR(ImgObj, TNSOCR.OCRSTEP_FIRST, TNSOCR.OCRSTEP_LAST, 0);
            string txt;
            NsOCR.Img_GetImgText(ImgObj, out txt, TNSOCR.FMT_EXACTCOPY);
            string lines = txt;

            return txt;            
        }
    }
}