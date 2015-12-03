(function () {
    "use strict";

    angular
        .module("WebLegemApp.Administracion")
        .controller("TipoEntidadController", TipoEntidadController);

    TipoEntidadController.$inject = [];
    function TipoEntidadController() {
        var vm = this;        

        vm.tipoEntidad = { id: 0, nombre: "Oficina Juridica", tipo: "interna"};

        vm.tiposEntidad = [
            { id: 1, nombre: "Facultad", tipo: "interna" },
            { id: 2, nombre: "Departamento", tipo: "interna" },
            { id: 3, nombre: "Rectoria", tipo: "interna" },
            { id: 4, nombre: "Secretaría de Educación", tipo: "externa" }
        ];

    } // end TipoEntidadController

})();
