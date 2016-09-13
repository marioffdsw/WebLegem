(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlSeguridadPass", wlSeguridadPass);

    wlSeguridadPass.$inject = [];
    function wlSeguridadPass() {
        return {
            templateUrl: "common/components/wl-seguridad-pass/wl-seguridad-pass.tmpl.html",
            restrict: "E",
            controller: "WlSeguridadPassController",
            controllerAs: "vm",
            bindToController: true,
            scope: {
                modeloPass: "=" // div donde se acumularan los pasos
            }
        };
    }
})();