(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("WlListaDocEncontradoController", WlListaDocEncontradoController);

    WlListaDocEncontradoController.$inject = [];
    function WlListaDocEncontradoController() {
        var vm = this;

        vm.next = next;

        vm.quitarSeleccion = quitarSeleccion;
        vm.itemSelected = itemSelected;
        vm.crearAnotacion = crearAnotacion;

        vm.ban_visorPdf = false;
        vm.ban_itemSelected = false;
        vm.ho_ = [];

        function quitarSeleccion() {
            //vm.ban_itemSelected = false;
            //for (var i = 1; i <= 3 ; i++) {
            //    vm.ho_[i] = false;
            //}
        }

        function itemSelected(item) {
            vm.seleccionarCallback();
        }

        function crearAnotacion() {
            
        }

        function next() {
            vm.nextCallback();
        }

        return vm;
    }
})();