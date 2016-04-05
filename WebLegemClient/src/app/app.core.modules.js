(function(){
	"use strict";

	angular.module("WebLegemApp", [
		/*"WebLegemApp.Busqueda",*/
		"WebLegemApp.Administracion",
        "WebLegemApp.Login",
        "WebLegemApp.GestionDocumental",
        "WebLegemApp.Busqueda",
        "WebLegemApp.Usuarios",
        "common.services",
        "common.mocks",/*
		"WebLegemApp.Auditoria",		
        "WebLegemApp.Noticias"*/
	]);
})();