﻿(function () {
    "use strict";

    angular
        .module("WebLegemApp.Administracion")
        .controller("TipoEntidadController", TipoEntidadController);

    TipoEntidadController.$inject = [ "TipoEntidadService" ];
    function TipoEntidadController( TipoEntidadService ) {
        var vm = this;        

        vm.tipoEntidad = { id: 0, nombre: "Oficina Juridica", tipo: "interna"};

        TipoEntidadService.query(function (data) {
            vm.tiposEntidad = data;
        });

        //vm.tiposEntidad = [
        //    { id: 1, nombre: "Facultad", tipo: "interna" },
        //    { id: 2, nombre: "Departamento", tipo: "interna" },
        //    { id: 3, nombre: "Rectoria", tipo: "interna" },
        //    { id: 4, nombre: "Secretaría de Educación", tipo: "externa" }
        //];

    } // end TipoEntidadController

})();
