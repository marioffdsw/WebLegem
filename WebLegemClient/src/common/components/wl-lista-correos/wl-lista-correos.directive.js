(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlListaCorreos", wlListaCorreos);

    function wlListaCorreos() {
        return {
            templateUrl: "common/components/wl-lista-correos/wl-lista-correos.tmpl.html",
            restrict: "E",
            controller: "WlListaCorreosController",
            controllerAs: "vm",
            scope: {
                lista: "=lista",
                objeto: "=objeto",
                seleccionar: "=seleccionar",
                editando: "=",
                procesando: "=",
                error: "="
            },
            bindToController: true
        };
    }; // end directive
})();