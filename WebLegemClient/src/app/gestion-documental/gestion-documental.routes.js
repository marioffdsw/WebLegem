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
            .state("gestion-documental.crear-documento.resultado", {
                url: "/resultado",
                templateUrl: "app/gestion-documental/documento/resultado.tmpl.html"
            })
            //==========================Anotaciones================================
            .state("gestion-documental.crear-documento.crear-anotacion", {
                url: "/crear-anotacion",
                templateUrl: "app/gestion-documental/anotacion/crear-anotacion.tmpl.html"
            })
            .state("gestion-documental.crear-documento.seleccionar-anotacion", {
                url: "/seleccionar-anotacion",
                templateUrl: "app/gestion-documental/anotacion/seleccionar-anotacion.tmpl.html"
            })


        ;
    } // end config function
})();