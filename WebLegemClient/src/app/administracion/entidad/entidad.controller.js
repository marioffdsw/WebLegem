(function () {
    "use strict";

    angular
        .module("WebLegemApp.Administracion")
        .controller("EntidadController", EntidadController);

    EntidadController.$inject = [ "TipoEntidadService", "EntidadService" ];
    function EntidadController( TipoEntidadService, EntidadService ) {
        var vm = this;
        vm.tiposEntidad;
        vm.entidades;

        TipoEntidadService.query(function (data) {
            vm.tiposEntidad = data;
        });

        EntidadService.query(function (data) {
            vm.entidades = data;
        });

        vm.entidad = { id: 0, nombre: "Oficina Juridica", tipo: "interna" };                

    } // end TipoEntidadController

})();
