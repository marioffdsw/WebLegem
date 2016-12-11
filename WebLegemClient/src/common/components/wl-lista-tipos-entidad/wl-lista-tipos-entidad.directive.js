(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlListaTiposEntidades", wlListaTiposEntidades);

    function wlListaTiposEntidades() {
        return {
            templateUrl: "common/components/wl-lista-tipos-entidad/wl-lista-tipos-entidad.tmpl.html",
            restrict: "E",
            controller: "WlListaTiposEntidadesController",
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