using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Drawing;
using System.Collections.Specialized;
using NSOCRLib;
using System.Diagnostics;
using System.IO;
using System.Drawing.Imaging;
using iTextSharp.text.pdf;
using iTextSharp.text.xml;
using GhostscriptSharp;
using GhostscriptSharp.Settings;

namespace WebLegemAPI.OCR
{
    public partial class NiconsoftOcr
    {
        String fileName;
        String ruta;
        String extension;

        public String Convertir(String path, String fileN)
        {
            fileName = path + @"/" +  fileN;
            ruta = path + @"/" + "img";

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
            PdfReader pdfReader = new PdfReader(absolutePath);
            int numberOfPages = pdfReader.NumberOfPages;
            List<String> archivos = new List<string>();

            for (int i = 0; i < numberOfPages; i++)
            {
                GetPdfThumbnail(absolutePath, ruta  + "/" + "archivo" + ".png", i, i + 1);
                archivos.Add(ruta + "/" + "archivo" + ".png");
            }

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
            //System.IO.StreamWriter file = new System.IO.StreamWriter(@"C:\Users\Andres\Downloads\GhostScriptWebTest (1)\txt.txt");
            //file.WriteLine(lines);
            //file.Close();
        }

        private static void GetPdfThumbnail(string sourcePdfFilePath, string destinationPngFilePath, int firstPage, int lastPage)
        {
            // Use GhostscriptSharp to convert the pdf to a png
            GhostscriptWrapper.GenerateOutput(sourcePdfFilePath, destinationPngFilePath,
                new GhostscriptSettings
                {
                    Device = GhostscriptDevices.pngalpha,
                    Page = new GhostscriptPages
                    {
                        // Only make a thumbnail of the first page
                        Start = firstPage,
                        End = lastPage,
                        AllPages = true
                    },
                    Resolution = new Size
                    {
                        // Render at 72x72 dpi
                        Height = 700,
                        Width = 700
                    },
                    Size = new GhostscriptPageSize
                    {
                        // The dimentions of the incoming PDF must be
                        // specified. The example PDF is US Letter sized.
                        Native = GhostscriptPageSizes.letter
                    }
                }
            );
        }



    }
}