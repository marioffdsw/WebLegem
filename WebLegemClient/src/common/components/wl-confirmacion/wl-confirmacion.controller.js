(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("WlConfirmacionController", WlConfirmacionController);

    WlConfirmacionController.$inject = [];
    function WlConfirmacionController() {
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