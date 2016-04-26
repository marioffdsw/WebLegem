(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller( "WlListaPermisosController", WlListaPermisosController );

    WlListaPermisosController.$inject = ["modulos", "PermisosService", "$scope"];
    function WlListaPermisosController( modulos, PermisosService, $scope ){
        var vm = this;

        vm.modulos = modulos;
        vm.permisos;
        vm.checkearPermiso = checkearPermiso;
        vm.isAlreadyChecked = isAlreadyChecked;        

        retrieveData();

        function retrieveData() {
            PermisosService.query(function (data) {
                vm.permisos = data;
            });
        } // end retrieveData

        function checkearPermiso( permiso ) {            
            if ( isAlreadyChecked( permiso ) ) {               

                vm.permisosAsignados.slice(
                        vm.permisosAsignados.indexOf(permiso),
                        1);
            }
            else {
                vm.permisosAsignados.push( permiso );
            }
        } // end checkearPermiso

        function isAlreadyChecked( permiso ) {

            if ( !vm.permisosAsignados ) {                
                return false;
            }

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