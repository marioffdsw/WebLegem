
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlegemResultadoBusqueda", wlegemResultadoBusqueda);

    function wlegemResultadoBusqueda() {
        return {
            templateUrl: "common/directives/resultado-busqueda/wlegem-resultado-busqueda.directive.html",
            restrict: "E",
            controller: "wlegemResultadoBusquedaController",
            controllerAs: "vm",
            scope: {
                arregloDocs: "=loquesea", //el nombre debe ser igual a arreglosDocs  de la plantilla pero sin el vm
                predicate: "=predicate",
                reverse: "=reverse"
            },
            bindToController:true
        } // end return
    } // end function
})();