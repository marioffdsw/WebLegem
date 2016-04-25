(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlListaRoles", wlListaRoles);

    wlListaRoles.$inject = [];
    function wlListaRoles() {
        return {
            templateUrl: "common/components/wl-lista-roles/wl-lista-roles.tmpl.html",
            restrict: "E",
            controller: "wlListaRolesController",
            controllerAs: "vm",
            scope: {
                lista: "=",
                seleccionar: "=seleccionar",
                editando: "="
            },
            bindToController: true
        };
    } // end wlListaRoles
})();