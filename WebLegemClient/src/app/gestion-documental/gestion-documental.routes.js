﻿(function () {
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
                abstract: true,
                title:"Gestión documental"
            })
			.state("gestion-documental.crear-documento.subir-archivo", {
			    url: "subir-archivo/",
			    templateUrl: "app/gestion-documental/documento/subir-archivo.tmpl.html",
			    title: "Subir documento"
			})
            .state("gestion-documental.crear-documento.informacion-documento", {
                url: "/informacion-documento/:id",
                templateUrl: "app/gestion-documental/documento/informacion-documento.tmpl.html",
                title: "Información del documento"
            })
            .state("gestion-documental.crear-documento.asunto", {
                url: "/crear-documento/",
                templateUrl: "app/gestion-documental/documento/asunto.tmpl.html",
                title: "Asunto del documento"
            })
            .state("gestion-documental.crear-documento.pergunta-anotacion", {
                url: "/pregunta-anotacion",
                templateUrl: "app/gestion-documental/anotacion/pregunta-añadir-anotaciones.tmpl.html",
                title: "Anotación"
            })
            .state("gestion-documental.crear-documento.resultado", {
                url: "/resultado",
                templateUrl: "app/gestion-documental/documento/resultado.tmpl.html",
                title: "Resultado"
            })
            //==========================Anotaciones================================
            .state("gestion-documental.crear-documento.crear-anotacion", {
                url: "/crear-anotacion",
                templateUrl: "app/gestion-documental/anotacion/crear-anotacion.tmpl.html",
                title: "Crear anotación"

            })
            .state("gestion-documental.crear-documento.seleccionar-anotacion", {
                url: "/seleccionar-anotacion",
                templateUrl: "app/gestion-documental/anotacion/seleccionar-anotacion.tmpl.html",
                title: "Seleccionar anotación"
            })

            //==========================Correos================================
            .state("gestion-documental.crear-documento.notificar", {
                url: "/notificar",
                templateUrl: "app/gestion-documental/correos/correos.tmpl.html",
                title: "Notificar"

            })



        ;
    } // end config function
})();