(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlListaAnoEncontrado", wlListaAnoEncontrado);

    wlListaDocEncontrado.$inject = [];
    function wlListaAnoEncontrado() {
        return {
            templateUrl: "common/components/wl-lista-ano-encontrado/wl-lista-ano-encontrado.tmpl.html",
            restrict: "E",
            
            scope: {
                nextCallback: "=next"
            },
            controller: "WlListaAnoEncontradoController",
            controllerAs: "vm",
            bindToController: true

        };
    }
})();