(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .constant("language", { strings: {} } )
        .factory("LanguageService", LanguageService);        

    LanguageService.$inject = [ "es", "en", "language" ];
    function LanguageService( es, en, language ) {               
            
        var defaultLanguage = "es";

        var languages = {
            es: es,
            en: en
        };

        language.strings = languages[ defaultLanguage ];

        function setLanguage(newLanguage) {            
                        
            var aux = language.strings;
            language.strings = languages[ newLanguage ];            
            
            
            if (typeof language.strings === "undefined") {
                language.strings = aux;
            }            
        }

        setLanguage(defaultLanguage);

        var languageManager = {
            changeLanguage: setLanguage            
        };

        return languageManager;
    }
})();