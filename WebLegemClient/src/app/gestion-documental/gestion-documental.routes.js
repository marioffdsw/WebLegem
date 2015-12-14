(function () {
    "use strict";

    angular
		.module("WebLegemApp.GestionDocumental")
		.config(config);

    config.$inject = ["$logProvider", "$stateProvider"];
    function config($logProvider, $stateProvider) {
        $logProvider.debugEnabled(true);

        $stateProvider
            .state("gestion-documental.crear-documento", {
                url: "/crear-documento/",
                templateUrl: "app/gestion-documental/documento/crear-documento.tmpl.html",
                controller: "DocumentoController",
                controllerAs: "vm",
                abstract: true
            })
			.state("gestion-documental.crear-documento.subir-archivo", {
			    url: "subir-archivo/",
			    templateUrl: "app/gestion-documental/documento/subir-archivo.tmpl.html",			    
			})
            .state("gestion-documental.crear-documento.informacion-documento", {
                url: "/informacion-documento/:id",
                templateUrl: "app/gestion-documental/documento/informacion-documento.tmpl.html",                
            })
            .state("gestion-documental.crear-documento.asunto", {
                url: "/crear-documento/",
                templateUrl: "app/gestion-documental/documento/asunto.tmpl.html",                
            })
            .state("gestion-documental.crear-documento.pergunta-anotacion", {
                url: "/pregunta-anotacion",
                templateUrl: "app/gestion-documental/anotacion/pregunta-añadir-anotaciones.tmpl.html"
            })
            .state("gestion-documental.crear-documento.resultado-ocr", {
                url: "/resultado-ocr",
                templateUrl: "app/gestion-documental/documento/resultado-ocr.tmpl.html"
            });
    } // end config function
})();