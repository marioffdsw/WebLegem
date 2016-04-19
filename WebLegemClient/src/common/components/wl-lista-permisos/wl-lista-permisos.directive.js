(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlListaPermisos", wlListaPermisos);
    
    function wlListaPermisos() {
        return {
            templateUrl: "common/components/wl-lista-permisos/wl-lista-permisos.tmpl.html",
            restrict: "E",
            controller: "WlListaPermisosController",
            controllerAs: "vm",
            bindToController: true,
            scope: {
                editando: "=editando",
                permisosAsignados: "=permisosAsignados"
            }
        };
    } // end wlListaPermisos
})();