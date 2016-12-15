(function () {
    "use strict";

    angular
        .module( "WebLegemApp" )
        .controller("wlListaUsuariosController", wlListaUsuariosController);

    wlListaUsuariosController.$inject = ["language"];
    function wlListaUsuariosController(language) {
        var vm = this;
        vm.language = language;
        vm.seleccionarObjeto = seleccionarObjeto;
        vm.checkear = checkear;

        function checkear( objeto ) {
            return vm.objetoSeleccioando != undefined && angular.equals(vm.objetoSeleccioando.id, objeto.id);
        } // end function checkear

        function seleccionarObjeto(objeto) {
            vm.seleccionar(objeto);
            //if( vm.editando === true ){
            //    return;
            //} // end if

            //if ( checkear(objeto) ) {
            //    vm.objetoSeleccioando = undefined;
            //}
            //else {
            //    console.log(objeto);
            //    vm.objetoSeleccioando = angular.copy(objeto);
            //} // end else
        } // end function seleccionarObjeto

        return vm;
    } // end function wlListaUsuariosController
})();