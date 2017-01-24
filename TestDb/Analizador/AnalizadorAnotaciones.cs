using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using WebLegemDAL.Dao;
using WebLegemDAL.Models;

namespace TestDb.Analizador
{
    public class AnallizadorAnotaciones
    {
        private TipoDocumentoDao tdDao;
        private EntidadDao eDao;
        private TipoAnotacionDao taDao;
        private IEnumerable<TipoAnotacion> tiposAnotacion = null;
        private IEnumerable<TipoDocumento> tiposDocumento = null;


        public AnallizadorAnotaciones(TipoDocumentoDao tdDao, EntidadDao eDao, TipoAnotacionDao taDao)
        {
            this.tdDao = tdDao;
            this.eDao = eDao;
            this.taDao = taDao;
        } // end constructor

        public List<Anotacion> AnalizarPorPosiblesAnotaciones(string texto)
        //public string AnalizarPorPosiblesAnotaciones(string texto)k
        {
            var parrafos = SplitInParagraphs(texto);
            var parrafosQueContienenTiposAnotacion = FilterContainsAnnotationType(parrafos);
            var frases = SplitParagraphsByMatches(parrafosQueContienenTiposAnotacion);
            return CreateAnnotations(frases);            
        } // end method AnalizarPorPosiblesAnotaciones

        private List<string> SplitInParagraphs(string text)
        {
            return text.Split(new[] { Environment.NewLine },
                    StringSplitOptions.RemoveEmptyEntries)
                .ToList();
        } // end method SplitInParagraphs

        private List<string> FilterContainsAnnotationType(List<string> paragraphs)
        {
            var regex = CrearTipoAnotacionRegex();

            return paragraphs.Where(paragraph => Regex.Match(paragraph,
                regex,
                RegexOptions.CultureInvariant |
                RegexOptions.IgnoreCase |
                RegexOptions.IgnorePatternWhitespace).Success).ToList();
        } // end method FilterContainsAnnotationType

        private List<String> SplitParagraphsByMatches(List<string> paragraphs)
        {
            return paragraphs
                .Select(paragraph => SplitParagraphByAnnotationTypeMatches(paragraph))
                .SelectMany(l => l).Distinct().ToList();
        } // end method SplitParagraphsByMatches

        private List<String> SplitParagraphByAnnotationTypeMatches(String paragraph)
        {

            var regex = new Regex(CrearTipoAnotacionRegex(),
                RegexOptions.IgnoreCase |
                RegexOptions.IgnorePatternWhitespace |
                RegexOptions.Multiline);

            List<int> indexes = new List<int>();
            foreach (Match match in regex.Matches(paragraph))
                indexes.Add(match.Index);
            
            List<string> matches = new List<string>();
            if (indexes.Count > 1) // en el parrafo se encuentran varias veces la palabra tipo anotacion
            {                
                for (int i = 0; i < indexes.Count - 1; i++)
                {
                    var currentIndex = indexes[i];
                    var nextIndex = indexes[i + 1];
                    matches.Add( paragraph.Substring( currentIndex, nextIndex - currentIndex ) );
                } // end for
                matches.Add( paragraph.Substring( indexes[ indexes.Count - 1 ] ) );
            } // end if
            else if (indexes.Count == 1) // en el parrafor solo se encuentra 1 vez la palabra tipo anotacion
                matches.Add(paragraph);

            return matches;
        } // end method SplitByMatches

        private List<Anotacion> CreateAnnotations(List<string> sentences)
        {
            var anotaciones = new List<Anotacion>();
            sentences.ForEach(x => anotaciones.Add(GetAnotacionFromSentence(x)));
            return anotaciones;
        } // end method GetAnotacionFromSentence

        private Anotacion GetAnotacionFromSentence(string sentence)
        {
            // TODO -implementar methodo GetAnotacionFromSentece
            var anotacion = new Anotacion()
            {
                TipoAnotacion = GetTipoAnotacionFromSentence(sentence),
                DocumentoAnotado = new Documento()
                {
                    TipoDocumento = GetTipoDocumentoFromSentence(sentence),
                    Numero = GetNumeroDocumentoFromSentence( sentence )                    
                }
            };

            var fecha = GetFechaDocumentoFromSentece(sentence);
            if (fecha.HasValue)
                anotacion.DocumentoAnotado.FechaPublicacion = fecha.Value;

            return anotacion;
        } // end method GetAnotacionFromSentence

        private TipoAnotacion GetTipoAnotacionFromSentence(string sentece)
        {
            var regex = CrearTipoAnotacionRegex();
            var matchString = Regex.Match(sentece, regex, RegexOptions.CultureInvariant |
                RegexOptions.IgnoreCase |
                RegexOptions.IgnorePatternWhitespace).Value;

            var tipoAnotacion = GetTiposAnotacion().Where(x => {
                return Regex.Match(matchString, x.Raiz, RegexOptions.CultureInvariant |
                    RegexOptions.IgnoreCase |
                    RegexOptions.IgnorePatternWhitespace).Success;
            }).First();

            return tipoAnotacion;
        } // end method GetTipoAnotacion

        private TipoDocumento GetTipoDocumentoFromSentence(string sentence)
        {
            try
            {
                var regex = CrearTipoDocumentoRegex();
                var matchString = Regex.Match(sentence, regex, RegexOptions.CultureInvariant |
                    RegexOptions.IgnoreCase |
                    RegexOptions.IgnorePatternWhitespace).Value;

                return GetTiposDocumento().Where(x => Regex.Match(matchString, x.Nombre,
                    RegexOptions.CultureInvariant
                    | RegexOptions.IgnoreCase
                    | RegexOptions.IgnorePatternWhitespace).Success).DefaultIfEmpty(null).FirstOrDefault();
            }
            catch (Exception)
            {
                return null;
            }
        } // end method GetTipoDocumentoFromSentence

        private string GetNumeroDocumentoFromSentence(string sentence)
        {
            var regex = CrearNumeroDocumentoRegex();
            return Regex.Match(sentence, regex, RegexOptions.CultureInvariant
                | RegexOptions.IgnoreCase
                | RegexOptions.IgnorePatternWhitespace)
                .Groups["numerodocumento"]
                .Value;            
        } // end method GetNumeroDocumento

        private DateTime? GetFechaDocumentoFromSentece(string sentence)
        {
            try
            {
                var regex = CrearFechaDocumentoRegex();

                var match = Regex.Match( sentence, regex, RegexOptions.IgnoreCase
                | RegexOptions.IgnorePatternWhitespace
                | RegexOptions.CultureInvariant);

                var matchDia = match.Groups["dia"].Value;
                var matchMes = match.Groups["mes"].Value;
                var matchAño = match.Groups["ano"].Value;

                var mes = (new List<string>() { match.Groups["mes"].Value }).Select(x =>
                {
                    Console.WriteLine(x);
                    switch (x)
                    {
                        case "Enero": return "01";
                        case "Febrero": return "02";
                        case "Marzo": return "03";
                        case "Abril": return "04";
                        case "Mayo": return "05";
                        case "Junio": return "06";
                        case "Julio": return "07";
                        case "Agosto": return "08";
                        case "Septiembre": return "09";
                        case "Octubre": return "10";
                        case "Noviembre": return "11";
                        case "Diciembre": return "12";
                        default: return null;
                    } // end switch
                }).DefaultIfEmpty(null).FirstOrDefault();
                var año = match.Groups["ano"].Value;

                return DateTime.ParseExact( matchDia + "/" + mes + "/" + matchAño, "dd/MM/yyyy", CultureInfo.InvariantCulture );
            }
            catch (Exception ex)
            {                
                return null;
            }
        } // end method GetFechaDocumentoFromSentence

        private string CrearTipoAnotacionRegex()
        {
            var regex = @"(?<tipoanotacion> (";

            GetTiposAnotacion().ForEach(x => {
                regex += x.Raiz + @"\w*|";
            });

            regex = regex.Substring(0, regex.Length - 1);
            regex += "))";

            return regex;
        } // end method CrearTipoAnotacionRegex

        private IEnumerable<TipoAnotacion> GetTiposAnotacion()
        {
            if (tiposAnotacion == null)
                tiposAnotacion = taDao.GetAll();

            return tiposAnotacion;
        } // end method getTiposAnotacion

        private string CrearTipoDocumentoRegex()
        {
            var regex = @"(?<tipodocumento> (";
            GetTiposDocumento().ForEach(x => regex += x.Nombre + @"|");

            regex = regex.Substring(0, regex.Length - 1);
            regex += "))";

            return regex;
        } // end method CrearTipoDocumentoRegex

        private string CrearNumeroDocumentoRegex()
        {
            var regex = @"(?<tipodocumento> (";
            GetTiposDocumento().ForEach(x => regex += x.Nombre + @"|");

            regex = regex.Substring(0, regex.Length - 1);
            regex += "))";
            regex += @"(?:.*?) (?<numerodocumento>(\d{1,10}))";

            return regex;
        } // end method CrearNumeroDocumentoRegex

        private string CrearFechaDocumentoRegex()
        {
            var regex = @"(?<dia>\d{1,2})\sde\s
                (?<mes>(Enero|Febrero|Marzo|Abril|Mayo|Junio|Julio|Agosto|Septiembre|Noviembre|Diciembre))
                \sdel{0,1}\s(?<ano>(19|20)\d\d)
                |
                (?<mes>(Enero|Febrero|Marzo|Abril|Mayo|Junio|Julio|Agosto|Septiembre|Noviembre|Diciembre))
                \s(?<dia>\d{1,2})\sdel{0,1}
                \s(?<ano>(19|20)\d\d)";
            
            return regex;
        } // end method GetFechaDocumentoRegex

        private IEnumerable<TipoDocumento> GetTiposDocumento()
        {
            if (tiposDocumento == null)
                tiposDocumento = tdDao.GetAll();

            return tiposDocumento;
        } // end method GetTiposDocumento
        
    } // end class AnalizadorAnotaciones
} // end namespace WebLegemAPI.Models.AnalizadorAnotaciones