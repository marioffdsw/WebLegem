
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlAnotacionAsistida", wlAnotacionAsistida);

    function wlAnotacionAsistida() {
        return {
            templateUrl: "common/directives/anotacion-asistida/wl-anotacion-asistida.directive.html",
            restrict: "E",
            controller: "wlAnotacionAsistidaController",
            controllerAs: "vm",
            scope: {
                arregloDocs: "=loquesea",
                banManual: "=banManual"
            },
            bindToController:true
        }
    } // end
})();