(function () {
    "use strict";

    angular
        .module("WebLegemApp.Administracion")
        .controller("EntidadController", EntidadController);

    EntidadController.$inject = [];
    function EntidadController() {
        var vm = this;

        vm.entidad = { id: 0, nombre: "Oficina Juridica", tipo: "interna" };

        vm.tiposEntidad = [
            { id: 1, nombre: "Rectoria" },
            { id: 2, nombre: "Facultad" },
            { id: 3, nombre: "Departamento" }
        ];

        vm.entidades = [
            { id: 1, nombre: "Facultad", tipo: "interna" },
            { id: 2, nombre: "Departamento", tipo: "interna" },
            { id: 3, nombre: "Rectoria", tipo: "interna" },
            { id: 4, nombre: "Secretaría de Educación", tipo: "externa" }
        ];

    } // end TipoEntidadController

})();
