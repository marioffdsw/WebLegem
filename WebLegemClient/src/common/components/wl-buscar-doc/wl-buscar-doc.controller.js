(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("WlBuscarDocController", WlBuscarDocController);

    WlBuscarDocController.$inject = [];
    function WlBuscarDocController() {
        var vm = this;

        vm.aceptar = aceptar;
        vm.cancelar = cancelar;

        function aceptar() {
            vm.aceptarCallback();
        }

        function cancelar() {
            vm.cancelarCallback();
        }

        return vm;
    }
})();