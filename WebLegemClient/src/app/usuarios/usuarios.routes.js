(function () {
	"use strict";

	angular
		.module("WebLegemApp.Usuarios")
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
            })
		    .state("usuarios.recuperar-contrasena", {
		        url: "/recuperar-contrasena",
		        templateUrl: "app/usuarios/recuperar-contrasena/recuperar-contrasena.tmpl.html",
		        controller: "RecuperarContrasenaController",
                controllerAs: "vm"
		    });
	} // end config function
})();