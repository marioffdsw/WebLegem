(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("wlListaRolesController", wlListaRolesController);

    wlListaRolesController.$inject = [];
    function wlListaRolesController() {
        var vm = this;

        vm.seleccionarObjeto = seleccionarObjeto;
        vm.checkear = checkear;

        function checkear(tipo) {
            return angular.equals(vm.objetoSeleccionado, tipo);
        } // end function

        function seleccionarObjeto(tipo) {
            if (vm.editando === true) {
                return;
            }
            if (angular.equals(vm.objetoSeleccionado, tipo)) {
                vm.objetoSeleccionado = undefined;
            }
            else {
                vm.objetoSeleccionado = angular.copy(tipo, {});
            }
        } // end function

        return vm;
    } // end wlListaRolesController
})();