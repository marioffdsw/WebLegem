(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("wlListaTipoDocController", wlListaTipoDocController);

    wlListaTipoDocController.$inject = [ "language" ];
    function wlListaTipoDocController( language ) {
        var vm = this;
        vm.language = language;
        vm.seleccionarObjeto = seleccionarObjeto;
        vm.checkear = checkear;
        vm.actualizar = actualizar;

        function checkear(tipo) {            
            return vm.objetoSeleccionado && angular.equals(vm.objetoSeleccionado.id, tipo.id);
        } // end function

        function seleccionarObjeto(tipo) {            
            if( vm.editando === true ) {
                return;
            }
            if ( vm.objetoSeleccionado && angular.equals(vm.objetoSeleccionado.id, tipo.id) ) {
                vm.objetoSeleccionado = undefined;
            }
            else {
                vm.objetoSeleccionado = angular.copy(tipo, {});
            }            
        } // end function    

        function actualizar() {
            vm.actualizarCallback();
        }

        return vm;
    } // end controller
})();