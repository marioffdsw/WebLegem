(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlBuscarDoc", wlBuscarDoc);

    wlBuscarDoc.$inject = [];
    function wlBuscarDoc() {
        return {
            templateUrl: "common/components/wl-buscar-doc/wl-buscar-doc.tmpl.html",
            restrict: "E",
            controller: "WlBuscarDocController",
            controllerAs: "vm",
            bindToController: true,
            scope: {
                //atrasCallback: "=atras",
                //crearCallback: "=crear",
                //buscarCallback: "=buscar",
                entregarResultadoBusqueda: "=seleccionar",
                //crearDoc: "=crearDoc",//flag para habilitar la creacion de un doc
            }
        };
    }
})();