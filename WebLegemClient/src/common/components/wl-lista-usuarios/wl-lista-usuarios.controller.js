(function () {
    "use strict";

    angular
        .module( "WebLegemApp" )
        .controller("wlListaUsuariosController", wlListaUsuariosController);

    wlListaUsuariosController.$inject = [];
    function wlListaUsuariosController() {
        var vm = this;

        vm.seleccionarObjeto = seleccionarObjeto;
        vm.checkear = checkear;

        function checkear( objeto ) {
            return angular.equals( vm.objetoSeleccioando, objeto );
        } // end function checkear

        function seleccionarObjeto ( objeto ){
            if( vm.editando === true ){
                return;
            } // end if

            if (checkear(vm.objetoSeleccioando, objeto)) {
                vm.objetoSeleccioando = undefined;
            }
            else {
                vm.objetoSeleccioando = angular.copy( objeto, {} );
            } // end else
        } // end function seleccionarObjeto

        return vm;
    } // end function wlListaUsuariosController
})();