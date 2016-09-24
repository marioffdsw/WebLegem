(function(){
	"use strict";

	angular.module("WebLegemApp", [
		/*"WebLegemApp.Busqueda",*/
		"WebLegemApp.Administracion",
        "WebLegemApp.Login",
        "WebLegemApp.GestionDocumental",
        "WebLegemApp.Busqueda",
        "WebLegemApp.Usuarios",
        "WebLegemApp.Anotacion",
        "common.services",
        "common.filters",
        //"common.mocks",
        "matchMedia"/*
		"WebLegemApp.Auditoria",		
        "WebLegemApp.Noticias"*/
	]);
})();