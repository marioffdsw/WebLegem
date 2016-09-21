(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("wlListaRolesController", wlListaRolesController);

    wlListaRolesController.$inject = ["language"];
    function wlListaRolesController(language) {
        var vm = this;                
        vm.language = language;
        vm.seleccionarObjeto = seleccionarObjeto;
        vm.checkear = checkear;

        function checkear(objeto) {
            return angular.equals(vm.objetoSeleccioando, objeto);
        } // end function checkear

        function seleccionarObjeto(objeto) {
            if (vm.editando === true) {
                return;
            } // end if

            if (angular.equals(vm.objetoSeleccioando, objeto)) {
                vm.objetoSeleccioando = undefined;
            }
            else {
                vm.objetoSeleccioando = angular.copy(objeto);
            } // end else
        } // end function seleccionarObjeto


        return vm;
    } // end wlListaRolesController
})();