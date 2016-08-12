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
                crearAnotacion: "=crearAnotacion",
                seleccionarCallback: "=seleccionar",
                documentosEncontrados: "=documentosEncontrados"
            },
            controller: "WlListaDocEncontradoController",
            controllerAs: "vm",
            bindToController: true
        };
    }
})();