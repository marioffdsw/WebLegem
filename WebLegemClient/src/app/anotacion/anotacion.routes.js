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
			    controllerAs: "vm"
			});
            	    
	} // end config function
})();