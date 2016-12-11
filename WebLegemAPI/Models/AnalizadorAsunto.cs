using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;

namespace WebLegemAPI.Models
{
    public class AnalizadorAsunto
    {
        private List<string> expresionesAsunto = new List<string>();

        public AnalizadorAsunto()
        {
            var dictionary = ((NameValueCollection) ConfigurationManager
                .GetSection("ExpresionesAsunto")).ToDictionary();

            if (dictionary.Count < 2)
            {
                dictionary.Add( "por_el_cual", @"Por el Cual.*");
                dictionary.Add( "asunto", @"Asunto.*");
            } // end if

            expresionesAsunto = dictionary.ToList();
        } // end constructor

        public string ObtenerAsunto( string texto )
        {
            try
            {
                var parrafos = SplitInParagraphs(texto);
                var regexText = "";

                regexText = expresionesAsunto.AsEnumerable().Aggregate(regexText, (acc, x) =>
                {
                    return acc += x + "|";
                });

                regexText = regexText.Substring(0, regexText.Length - 1);

                return parrafos.Where(x =>
                   Regex.Match(x, regexText, RegexOptions.CultureInvariant |
                    RegexOptions.IgnoreCase |
                    RegexOptions.IgnorePatternWhitespace).Success
                 ).Select(x => x).First();
            } // end try
            catch ( InvalidOperationException ex )
            {
                return "No se pudo encontrar el asunto. Ingresalo manualmente";
            } // end catch
            
        } // end method GetAsunto

        private static List<string> SplitInParagraphs(String text)
        {
            return text.Split(new[] { Environment.NewLine },
                    StringSplitOptions.RemoveEmptyEntries)
                .ToList();
        } // end method SplitInParagraphs

    } // end class AnalizadorAsunto

    public static class NameValueCollectionExtensions
    {
        public static IDictionary ToDictionary(this NameValueCollection nvc)
        {
            var dictionary = new Dictionary<string, string>();

            foreach (var key in nvc.AllKeys)
            {
                dictionary.Add(key, nvc[key]);
            } // end foreach

            return dictionary;
        } // end method ToDictionary

        public static List<string> ToList(this IDictionary dictionary)
        {
            var list = new List<string>();
            foreach (string item in dictionary.Values)
                list.Add( item );            
            return list;
        } // end method ToList

    } // end class NamevalueCollectionExtensions

    
} // end namespace WebLegemAPI.Models