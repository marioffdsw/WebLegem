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
                banEliminar: "=banEliminar",
                eliminarCallback: "=eliminar",
                editarCallback: "=editar"
            },
            controller: "WlListaAnotacionesController",
            controllerAs: "vm",
            bindToController: true

        };
    }
})();