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
			    templateUrl: 'app/noticias/noticias.tmpl.html',
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
	        });

	} // end config function	
})();