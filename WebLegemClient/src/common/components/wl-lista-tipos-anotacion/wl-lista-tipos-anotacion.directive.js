(function(){
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlListaTiposAnotacion", wlListaTiposAnotacion);

    wlListaTiposAnotacion.$inject = [];
    function wlListaTiposAnotacion(){
        return {
            templateUrl: "common/components/wl-lista-tipos-anotacion/wl-lista-tipos-anotacion.tmpl.html",
            restrict: "E",
            controller: "WlListaTiposAnotacionController",
            controllerAs: "vm",            
            bindToController: true,
            scope: {
                lista: "=lista",
                objetoSeleccionado: "=objetoSeleccionado",
                editando: "=",
                procesando: "=",
                error: "=",
                actualizarCallback: "=actualizar"
            }
        };
    } // end directive
})();