(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlListaDocEncontrado", wlListaDocEncontrado);

    wlListaDocEncontrado.$inject = [];
    function wlListaDocEncontrado() {
        return {
            templateUrl: "common/components/wl-lista-doc-encontrado/wl-lista-doc-encontrado.tmpl.html",
            restrict: "E",
            
            scope: {
                nextCallback: "=next",
                banCrearAnotacion: "=banCrearAnotacion"
            },
            controller: "WlListaDocEncontradoController",
            controllerAs: "vm",
            bindToController: true

        };
    }
})();