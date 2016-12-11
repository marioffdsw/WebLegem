
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlegemSortBusqueda", wlegemSortBusqueda)        

    function wlegemSortBusqueda() {
        return {
            templateUrl: "common/directives/sort-busqueda/wlegem-sort-busqueda.directive.html",
            restrict: "E",
            scope: {
                busqueda: '=',
                predicate: "=",
                reverse: "="
            },
            controller: "BusquedaController",
            controllerAs: "vm",
            bindToController: true
        }
    } // end directive    

})();