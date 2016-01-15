(function () {
    "use strict";

    angular
        .module("WebLegemApp.Administracion")
        .controller("AdministracionController", AdministracionController);


    AdministracionController.$inject = [];
    function AdministracionController() {
        var vm = this;        
        var estadoHome = { nombre: "Home", enlace: "home" }
        vm.estados = [estadoHome];        

    } // end controller
})();