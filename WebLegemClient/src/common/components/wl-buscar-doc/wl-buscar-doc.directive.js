(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlBuscarDoc", wlBuscarDoc);

    wlBuscarDoc.$inject = [];
    function wlBuscarDoc() {
        return {
            templateUrl: "common/components/wl-buscar-doc/wl-buscar-doc.tmpl.html",
            restrict: "E",
            controller: "WlBuscarDocController",
            controllerAs: "vm",
            bindToController: true,
            scope: {                
                documentos: "=documentos",
                accion: "=accion"
            }
        };
    }
})();