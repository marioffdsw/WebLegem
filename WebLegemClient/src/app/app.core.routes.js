/// <reference path="login/login.tmpl.html" />
(function () {
	"use strict";

	angular
		.module("WebLegemApp")
		.config(config);

	config.$inject = ['$logProvider', '$stateProvider', "$urlRouterProvider"];
	function config( $logProvider, $stateProvider, $urlRouterProvider ) {
	    $logProvider.debugEnabled(true);

	    $urlRouterProvider.otherwise('/');

	    $stateProvider
			.state('home', {
			    url: '/',
			    templateUrl: 'app/principal/principal.tmpl.html',
				controller: "NoticiasController",
				controllerAs: "vm"
			})
            .state('administracion', {
                url: '/administracion',
                templateUrl: 'app/administracion/administracion.tmpl.html',
                controller: "AdministracionController",
                controllerAs: "vm"
            })
			.state('login', {
			    url: '/login',
			    templateUrl: 'app/login/login.tmpl.html',
			    controller: "LoginController",
                controllerAs: "vm"
			})
            .state('gestion-documental', {
                url: "/gestion-documental",
                abstract: true,
                template: "<div ui-view></div>",
            })

	        .state('busqueda', {
	            url: "/search",
	            templateUrl: 'app/busqueda/busqueda.tmpl.html',
	            controller: "BusquedaController",
                controllerAs: "vm"
	        })
            .state('ver-documento', {
                url: "/ver-documento",
                templateUrl: "app/busqueda/ver/ver-documento.tmpl.html",
                controller: "VerDocumentoController",
                controllerAs: "vm",
                params: { id: null }
            })
            .state('usuarios', {
                url: "/usuarios",
                templateUrl: "app/usuarios/usuarios.tmpl.html",
                controller: "UsuariosController",
                controllerAs: "vm"
            })
            .state('cuenta', {
                url: "/cuenta",
                templateUrl: "app/usuarios/cuenta/cuenta.tmpl.html",
                controller: "CuentaController",
                controllerAs: "vm"
            })
            .state('recuperar-clave', {
                url: "/recuperar-clave",
                templateUrl: "app/usuarios/cuenta/recuperar-clave.tmpl.html",
                controller: "CuentaController",
                controllerAs: "vm"
            })
            .state('audotoria', {
                url: "/auditoria",
                templateUrl: "app/auditoria/auditoria.tmpl.html",
                controller: "AuditoriaController",
                controllerAs: "vm"
            })
            .state('anotacion', {
                url: "/anotacion",
                templateUrl: "app/anotacion/anotacion.tmpl.html",
                controller: "AnotacionController",
                controllerAs: "vm"
            })

	    ;

	} // end config function
})();
