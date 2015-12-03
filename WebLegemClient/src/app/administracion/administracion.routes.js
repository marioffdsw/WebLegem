(function () {
	"use strict";

	angular
		.module("WebLegemApp.Administracion")
		.config(config);

	config.$inject = [ "$logProvider", "$stateProvider"];
	function config( $logProvider, $stateProvider ) {
		$logProvider.debugEnabled(true);		

		$stateProvider
			.state("administracion.tipo-documento", {
				url: "/tipo-documento/:id",
				templateUrl: "app/administracion/tipo-documento/tipo-documento.tmpl.html",
				controller: "TipoDocumentoController",
                controllerAs: "vm"
			})
            .state("administracion.tipo-entidad", {
                url: "/tipo-entidad/:id",
                templateUrl: "app/administracion/tipo-entidad/tipos-entidad.tmpl.html",
                controller: "TipoEntidadController",
                controllerAs: "vm"
            })
            .state("administracion.entidad", {
                url: "/entidad/:id",
                templateUrl: "app/administracion/entidad/entidad.tmpl.html",
                controller: "EntidadController",
                controllerAs: "vm"
            })
            .state("administracion.tipo-anotacion", {
                url: "/tipo-anotacion/:id",
                templateUrl: "app/administracion/tipo-anotacion/tipo-anotacion.tmpl.html"
            });
	} // end config function
})();