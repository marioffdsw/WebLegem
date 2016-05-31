(function () {
	"use strict";

	angular
		.module("WebLegemApp.Anotacion")
		.config(config);

	config.$inject = [ "$logProvider", "$stateProvider"];
	function config( $logProvider, $stateProvider ) {
		$logProvider.debugEnabled(true);		

		$stateProvider
			.state("usuarios.control-roles", {
			    url: "/control-roles",
			    templateUrl: "app/usuarios/control-roles/control-roles.tmpl.html",
			    controller: "controlRolesController",
			    controllerAs: "vm"
			})
            .state("usuarios.control-usuarios", {
                url: "/control-usuarios",
                templateUrl: "app/usuarios/control-usuarios/control-usuarios.tmpl.html",
                controller: "controlUsuariosController",
                controllerAs: "vm"
            });		    
	} // end config function
})();