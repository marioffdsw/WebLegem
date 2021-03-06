﻿(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlListaEntidades", wlListaEntidades);

    function wlListaEntidades() {
        return {
            templateUrl: "common/components/wl-lista-entidades/wl-lista-entidades.tmpl.html",
            restrict: "E",
            controller: "WlListaEntidadesController",
            controllerAs: "vm",
            scope: {
                lista: "=lista",
                objetoSeleccionado: "=objetoSeleccionado",
                editando: "=",
                seleccionar: "=seleccionar",
                procesando: "=",
                error: "=",
                actualizarCallback: "=actualizar"
            },
            bindToController: true
        };
    }; // end directive
})();