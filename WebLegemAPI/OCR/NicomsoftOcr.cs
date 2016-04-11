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
    public partial class NiconsoftOcr : IPdfToText
    {      
        public String Convertir( String path, String fileName)
        {
            String fullFileName = path + @"\" + fileName;            

            int CfgObj, OcrObj, ImgObj, SvrObj, res;
            string txt;

            NSOCRClass NsOCR = new NSOCRClass();
            NsOCR.Engine_Initialize();

            NsOCR.Cfg_Create(out CfgObj);

            //NsOCR.Cfg_LoadOptions( CfgObj, @"C:\pruebas\niconsoft\Config.dat");

            NsOCR.Ocr_Create(CfgObj, out OcrObj);
            NsOCR.Img_Create(OcrObj, out ImgObj);
            NsOCR.Svr_Create(CfgObj, TNSOCR.SVR_FORMAT_TXT_UNICODE, out SvrObj);

            #region language and character configuration
            NsOCR.Cfg_SetOption(CfgObj, TNSOCR.BT_DEFAULT, "Languages/Spanish", "1");
            NsOCR.Cfg_SetOption(CfgObj, TNSOCR.BT_DEFAULT, "Languages/English", "0");
            #endregion

            #region ghostScript configuration and pdf support
            NsOCR.Cfg_SetOption(CfgObj, TNSOCR.BT_DEFAULT, "Main/GhostScriptDLL", @"C:\gs\gs9.18\bin\gsdll32.dll");
            NsOCR.Cfg_SetOption(CfgObj, TNSOCR.BT_DEFAULT, "Main/PdfDPI", "600");
            NsOCR.Cfg_SetOption(CfgObj, TNSOCR.BT_DEFAULT, "Main/PdfByExt", "2");
            #endregion

            #region thread configuration
            NsOCR.Cfg_SetOption(CfgObj, TNSOCR.BT_DEFAULT, "Main/MaxKernels", "16");
            NsOCR.Cfg_SetOption(CfgObj, TNSOCR.BT_DEFAULT, "Main/NumKernels", "0");
            #endregion

            #region performance configuration
            NsOCR.Cfg_SetOption(CfgObj, TNSOCR.BT_DEFAULT, "ImgAlizer/Inversion", "0");
            NsOCR.Cfg_SetOption(CfgObj, TNSOCR.BT_DEFAULT, "ImgAlizer/AutoRotate", "0");
            NsOCR.Cfg_SetOption(CfgObj, TNSOCR.BT_DEFAULT, "ImgAlizer/AutoScale", "1");
            NsOCR.Cfg_SetOption(CfgObj, TNSOCR.BT_DEFAULT, "ImgAlizer/NoiseFilter", "0");
            NsOCR.Cfg_SetOption(CfgObj, TNSOCR.BT_DEFAULT, "Main/FastMode", "0");
            NsOCR.Cfg_SetOption(CfgObj, TNSOCR.BT_DEFAULT, "Main/GrayMode", "1");
            NsOCR.Cfg_SetOption(CfgObj, TNSOCR.BT_DEFAULT, "Zoning/OneZone", "1");
            NsOCR.Cfg_SetOption(CfgObj, TNSOCR.BT_DEFAULT, "WordAlizer/SplitCombine", "0");
            #endregion

            #region optimizations
            NsOCR.Cfg_SetOption( CfgObj, TNSOCR.BT_DEFAULT, "Main/CharFactors", "[|!#$%&/()=?¿¡[]{}`^¬ 0.25][ñÑ 1.5][abcdefghijklmnopqrstuvxyz.,123456789 1.2]" );
            NsOCR.Cfg_SetOption( CfgObj, TNSOCR.BT_DEFAULT, "Zoning/ZonesFactor", "0.5" );
            NsOCR.Cfg_SetOption( CfgObj, TNSOCR.BT_DEFAULT, "Zoning/OneColumn", "1" ); // 0 = more columns, 1 = just one column
            NsOCR.Cfg_SetOption(CfgObj, TNSOCR.BT_DEFAULT, "Zoning/FindTables", "1"); // 0 = do not find tables, 1 = search for tables
            NsOCR.Cfg_SetOption(CfgObj, TNSOCR.BT_DEFAULT, "Linezer/RemoveGarbage", "1"); // 1 = apply algorithm to remove garbage, 0 = do not apply algorithm
            NsOCR.Cfg_SetOption(CfgObj, TNSOCR.BT_DEFAULT, "Linezer/RemoveGarbage", "1"); // 1 = apply algorithm to remove garbage, 0 = do not apply algorithm
            NsOCR.Cfg_SetOption( CfgObj, TNSOCR.BT_DEFAULT, "Dictionaries/UseDictionary", "1" ); // 0= do not use dictionary, 1 = use dictionary
            #endregion

            //NsOCR.Cfg_SaveOptions( CfgObj, @"C:\pruebas\Config.dat" );

            res = NsOCR.Img_LoadFile(ImgObj, fullFileName);

            if (res > TNSOCR.ERROR_FIRST) { }; //insert error handler here
            if (res == TNSOCR.ERROR_CANNOTLOADGS) { Console.WriteLine("Cannot load GS"); }

            Console.WriteLine("Stating OCR");

            //res = NsOCR.Img_OCR(ImgObj, TNSOCR.OCRSTEP_FIRST, TNSOCR.OCRSTEP_LAST, TNSOCR.OCRFLAG_NONE);
            int pages = NsOCR.Img_GetPageCount(ImgObj);
            res = NsOCR.Ocr_ProcessPages(ImgObj, SvrObj, 0, pages, 0, TNSOCR.OCRFLAG_NONE);
            Console.WriteLine($"The image has {pages} pages");
            Console.WriteLine("OCR has finished");

            if (res > TNSOCR.ERROR_FIRST) { };

            //NsOCR.Img_GetImgText(ImgObj, out txt, TNSOCR.FMT_EXACTCOPY);
            NsOCR.Svr_GetText(SvrObj, -1, out txt);

            NsOCR.Engine_Uninitialize();

            return txt;
        }
    }
}