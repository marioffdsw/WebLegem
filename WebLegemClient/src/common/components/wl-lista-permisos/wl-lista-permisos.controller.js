(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller( "WlListaPermisosController", WlListaPermisosController );

    WlListaPermisosController.$inject = [ "modulos", "permisos" ];
    function WlListaPermisosController( modulos, permisos ){
        var vm = this;

        vm.modulos = modulos;
        vm.permisos = permisos;
        vm.checkearPermiso = checkearPermiso;

        function checkearPermiso( permiso ) {

            if ( isAlreadyChecked( permiso ) ) {               

                vm.permisosAsignados.splice(
                        vm.permisosAsignados.indexOf(permiso),
                        1);

            }
            else {
                vm.permisosAsignados.push( permiso );
            }
        } // end checkearPermiso

        function isAlreadyChecked( permiso ) {

            for (var i = 0; i < vm.permisosAsignados.length; i++) {
                if (angular.equals(vm.permisosAsignados[i].id, permiso.id)) {
                    return true;
                } // end if
            } // end for

            return false;
        } // end isAlreadyChecked

        return vm;
    } // end WlListaPermisosController
})();