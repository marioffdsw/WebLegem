(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("wlListaTipoDocController", wlListaTipoDocController);

    wlListaTipoDocController.$inject = [ "language" ];
    function wlListaTipoDocController( language ) {
        var vm = this;

        vm.seleccionarObjeto = seleccionarObjeto;
        vm.checkear = checkear;        
        vm.language = language;

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
                vm.objetoSeleccionado = angular.copy(tipo, {});
            }            
        } // end function                        

        return vm;
    } // end controller
})();