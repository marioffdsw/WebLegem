(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlListaTipoDocHojitas", WlListaTipoDocHojitas);

    function WlListaTipoDocHojitas() {
        return {
            templateUrl: "common/components/wl-lista-tipo-doc-hojitas/wl-lista-tipo-doc-hojitas.tmpl.html",
            restrict: "E",
            controller: "WlListaTipoDocHojitasController",
            controllerAs: "vm",
            bindToController: true,
            scope: {
                editando: "=editando",
                listaDocumentos: "=listaDocumentos"
            }
        };
    } // end directive
})();