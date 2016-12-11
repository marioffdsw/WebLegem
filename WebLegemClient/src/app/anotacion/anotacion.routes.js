(function () {
	"use strict";

	angular
		.module("WebLegemApp.Anotacion")
		.config(config);

	config.$inject = [ "$logProvider", "$stateProvider"];
	function config( $logProvider, $stateProvider ) {
		$logProvider.debugEnabled(true);		

		$stateProvider
			.state("anotacion.crear-anotacion", {
			    url: "/crear-anotacion",
			    templateUrl: "app/anotacion/crear-anotacion/crear-anotacion.tmpl.html",
			    controller: "crearAnotacionController",
			    controllerAs: "vm",
                title:"Crear anotación"
			})
            .state("anotacion.eliminar-anotacion", {
                url: "/eliminar-anotacion",
                templateUrl: "app/anotacion/eliminar-anotacion/eliminar-anotacion.tmpl.html",
                controller: "eliminarAnotacionController",
                controllerAs: "vm",
                title:"Eliminar anotación"
            })
		    .state("anotacion.editar-anotacion", {
		        url: "/editar-anotacion",
		        templateUrl: "app/anotacion/editar-anotacion/editar-anotacion.tmpl.html",
		        controller: "editarAnotacionController",
		        controllerAs: "vm",
                title:"Editar anotación"
		    })
	    ;
            	    
	} // end config function
})();