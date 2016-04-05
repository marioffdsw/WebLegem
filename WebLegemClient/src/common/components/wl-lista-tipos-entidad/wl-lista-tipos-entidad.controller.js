(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("WlListaTiposEntidadesController", WlListaTiposEntidadesController);

    WlListaTiposEntidadesController.$inject = [];
    function WlListaTiposEntidadesController() {
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
                vm.objetoSeleccionado = angular.copy(tipo);                
            }            
        } // end function                        

        return vm;
    } // end controller
})();