(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("wlListaTipoDocController", wlListaTipoDocController);

    wlListaTipoDocController.$inject = [];
    function wlListaTipoDocController() {
        var vm = this;

        vm.seleccionarObjeto = seleccionarObjeto;
        vm.checkear = checkear;        

        function checkear(tipo) {            
            return angular.equals(vm.objetoSeleccionado, tipo);            
        } // end function

        function seleccionarObjeto(tipo) {            
            if( vm.editando === true ) {
                return;
            }
            if ( angular.equals(vm.objetoSeleccionado, tipo) ) {
                vm.objetoSeleccionado = undefined;
            }
            else {
                vm.objetoSeleccionado = tipo;
            }            
        } // end function                        

        return vm;
    } // end controller
})();