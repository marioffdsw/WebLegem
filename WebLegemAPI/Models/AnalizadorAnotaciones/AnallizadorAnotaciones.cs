using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using WebLegemDAL.Dao;
using WebLegemDAL.Models;

namespace WebLegemAPI.Models.AnalizadorAnotaciones
{
    public class AnallizadorAnotaciones
    {
        private TipoDocumentoDao tdDao;
        private EntidadDao eDao;
        private TipoAnotacionDao taDao;


        public AnallizadorAnotaciones( TipoDocumentoDao tdDao, EntidadDao eDao, TipoAnotacionDao taDao )
        {
            this.tdDao = tdDao;
            this.eDao = eDao;
            this.taDao = taDao;
        } // end constructor

        private List<string> SplitInParagraphs(String text)
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

            var regex = new Regex( CrearTipoAnotacionRegex(),
                RegexOptions.IgnoreCase |
                RegexOptions.IgnorePatternWhitespace |
                RegexOptions.Multiline);

            List<int> indixes = new List<int>();
            foreach (Match match in regex.Matches(paragraph))
                indixes.Add(match.Index);

            List<string> matches = new List<string>();
            if (indixes.Count > 1) // en el parrafo se encuentran varias veces la palabra tipo anotacion
                for (var k = 0; k < indixes.Count - 1; k++)
                {
                    var i = indixes.ElementAt(k);
                    var j = indixes.ElementAt(k + 1);
                    matches.Add(paragraph.Substring(i, j - i));
                } // end for        
            else if (indixes.Count == 1) // en el parrafor solo se encuentra 1 vez la palabra tipo anotacion
                matches.Add(paragraph);
           
            return matches;
        } // end method SplitByMatches

        private List<Anotacion> CreateAnnotations( List<string> sentences )
        {
            var anotaciones = new List<Anotacion>();

            sentences.ForEach(x => anotaciones.Add( GetAnotacionFromSentence(x) ));       

            return anotaciones;
        } // end method GetAnotacionFromSentence

        private Anotacion GetAnotacionFromSentence(string sentece)
        {
            return null;
        } // end method GetAnotacionFromSentence

        private TipoAnotacion GetTipoAnotacionFromSentence( string sentece )
        {
            var regex = CrearTipoAnotacionRegex();
            var matchString = Regex.Match(sentece, regex, RegexOptions.CultureInvariant |
                RegexOptions.IgnoreCase |
                RegexOptions.IgnorePatternWhitespace).Value;



            return null;
        } // end method GetTipoAnotacion

        private string CrearTipoAnotacionRegex()
        {
            var regex = @"(?<tipoanotacion> (";
            var tiposAnotaciones = taDao.GetAll();

            tiposAnotaciones.ForEach(x => {
                regex += x.Raiz + @"\w*|";
            });

            regex.Substring(0, regex.Length - 1);
            regex += "))";

            return regex;
        } // end method CrearTipoAnotacionRegex
    } // end class AnalizadorAnotaciones
} // end namespace WebLegemAPI.Models.AnalizadorAnotaciones