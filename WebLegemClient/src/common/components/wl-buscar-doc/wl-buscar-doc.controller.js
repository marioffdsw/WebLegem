(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("WlBuscarDocController", WlBuscarDocController);

    WlBuscarDocController.$inject = [];
    function WlBuscarDocController() {
        var vm = this;

        vm.atras = atras;
        vm.crear = crear;
        vm.buscar = buscar;

        function atras() {
            vm.atrasCallback();
        }

        function crear() {
            vm.crearCallback();
        }

        function buscar() {
            vm.buscarCallback();
        }

        return vm;
    }
})();