﻿(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlListaUsuarios", wlListaUsuarios);

    wlListaUsuarios.$inject = [];
    function wlListaUsuarios() {
        return {
            templateUrl: "common/components/wl-lista-usuarios/wl-lista-usuarios.tmpl.html",
            restrict: "E",
            controller: "wlListaUsuariosController",
            controllerAs: "vm",
            scope: {
                lista: "=lista",
                objetoSeleccionado: "=objetoSeleccionado",
                seleccionar: "=",
                editando: "=",
                procesando: "=",
                error: "="
            },
            bindToController: true
        };
    } // end function wlListaUsuarios
})();