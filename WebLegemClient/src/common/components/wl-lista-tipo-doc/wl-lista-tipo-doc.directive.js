(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlListaTipoDoc", wlListaTipoDoc);
    
    function wlListaTipoDoc() {
        return {
            templateUrl: "common/components/wl-lista-tipo-doc/wl-lista-tipo-doc.tmpl.html",
            restrict: "E",
            controller: "wlListaTipoDocController",
            controllerAs: "vm",
            scope: {
                lista: "=lista",
                objetoSeleccionado: "=objetoSeleccionado",
                editando: "="
            },
            bindToController: true
        };
    }; // end directive
})();