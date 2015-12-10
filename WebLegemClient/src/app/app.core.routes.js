﻿/// <reference path="login/login.tmpl.html" />
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
            })
			.state('login', {
			    url: '/login',
			    templateUrl: 'app/login/login.tmpl.html',
			})
            .state('gestion-documental', {
                url: "/gestion-documental",
                abstract: true,
                template: "<h1>GestionDocumental</h1><div ui-view></div>"
            })
            .state("otro", {
                url: "/otro",
                template: "<p>Otro</p>",
                resolve: {
                    promise: function () {
                        throw "error activating otro";
                    }
                }
            });
	} // end config function	
})();