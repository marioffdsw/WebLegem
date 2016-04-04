(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("WlListaEntidadesController", wlListaEntidadesController);

    wlListaEntidadesController.$inject = [];
    function wlListaEntidadesController() {
        var vm = this;        
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
                vm.objetoSeleccionado = tipo;
            }
            console.log( vm.objetoSeleccionado );
        } // end function                        

        return vm;
    } // end controller
})();