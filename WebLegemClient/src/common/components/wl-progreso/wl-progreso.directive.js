(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlProgreso", wlProgreso);

    wlProgreso.$inject = [];
    function wlProgreso() {
        return {
            templateUrl: "common/components/wl-progreso/wl-progreso.tmpl.html",
            restrict: "E",
            controller: "WlProgresoController",
            controllerAs: "vm",
            bindToController: true,
            scope: {
                pasos: "=",
                actual: "=",
                idProgreso: "@" // div donde se acumularan los pasos
            }
        };
    }
})();