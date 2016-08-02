(function(){
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlListaTiposAnotacion", wlListaTiposAnotacion);

    function wlListaTiposAnotacion(){
        return {
            templateUrl: "common/components/wl-lista-tipos-anotacion/wl-lista-tipos-anotacion.tmpl.html",
            restrict: "E",
            controller: "WlListaTiposAnotacionController",
            controllerAs: "vm",
            scope: {
                lista: "=lista",
                seleccionar: "=seleccionar",
                editando: "="
            },
            bindToController: true
        };
    } // end directive
})();