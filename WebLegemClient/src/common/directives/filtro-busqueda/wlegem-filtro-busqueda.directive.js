
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlegemFiltroBusqueda", wlegemFiltroBusqueda);

    function wlegemFiltroBusqueda() {
        return {
            templateUrl: "common/directives/filtro-busqueda/wlegem-filtro-busqueda.directive.html",
            restrict: "E"
        }
    } // end
})();