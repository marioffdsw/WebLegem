(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("WlListaEntidadesController", wlListaEntidadesController);

    wlListaEntidadesController.$inject = ["language"];
    function wlListaEntidadesController(language) {
        var vm = this;
        vm.language = language;
        vm.seleccionarObjeto = seleccionarObjeto;
        vm.checkear = checkear;

        function checkear(entidad) {
            return angular.equals(vm.objetoSeleccionado, entidad);
        } // end function

        function seleccionarObjeto(tipo) {
            if (vm.editando === true) {
                return;
            }
            if (angular.equals(vm.objetoSeleccionado, tipo)) {
                vm.objetoSeleccionado = undefined;
            }
            else {
                vm.objetoSeleccionado = angular.copy(tipo);
            }
            console.log( vm.objetoSeleccionado );
        } // end function                        

        return vm;
    } // end controller
})();