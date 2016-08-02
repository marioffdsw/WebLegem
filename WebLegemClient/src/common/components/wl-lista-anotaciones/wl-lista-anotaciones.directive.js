(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlListaAnotaciones", wlListaAnotaciones);

    wlListaAnotaciones.$inject = [];
    function wlListaAnotaciones() {
        return {
            templateUrl: "common/components/wl-lista-anotaciones/wl-lista-anotaciones.tmpl.html",
            restrict: "E",
            scope: {
                metodo: "="
            },
            controller: "WlListaAnotacionesController",
            controllerAs: "vm",
            bindToController: true

        };
    }
})();