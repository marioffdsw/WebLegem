(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("WlConfirmacionController", WlConfirmacionController);

    WlConfirmacionController.$inject = ["language"];
    function WlConfirmacionController(language) {
        var vm = this;
        vm.language = language;
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