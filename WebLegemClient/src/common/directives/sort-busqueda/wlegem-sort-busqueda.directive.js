
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlegemSortBusqueda", wlegemSortBusqueda)
        .controller("WlegemSortBusquedaController", WlegemSortBusquedaController);

    function wlegemSortBusqueda() {
        return {
            templateUrl: "common/directives/sort-busqueda/wlegem-sort-busqueda.directive.html",
            restrict: "E",
            scope: {
                busqueda: '='
            },
            controller: "BusquedaController",
            controllerAs: "vm",
            bindToController: true
        }
    } // end directive


    function WlegemSortBusquedaController(){
      
    }

})();