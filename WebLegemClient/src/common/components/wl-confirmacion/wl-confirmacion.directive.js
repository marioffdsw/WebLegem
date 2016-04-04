(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlConfirmacion", wlConfirmacion);

    wlConfirmacion.$inject = [];
    function wlConfirmacion() {
        return {
            templateUrl: "common/components/wl-confirmacion/wl-confirmacion.tmpl.html",
            restrict: "E",
            controller: "WlConfirmacionController",
            controllerAs: "vm",
            bindToController: true,
            scope: {
                editando: "=",
                aceptarCallback: "=aceptar",
                cancelarCallback: "=cancelar"
            }
        };
    }
})();