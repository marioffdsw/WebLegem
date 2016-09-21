
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("asociarDocumento", asociarDocumento);

    function asociarDocumento() {
        return {
            templateUrl: "common/directives/asociar-documento/asociar-documento.directive.html",
            restrict: 'E',
            controller: "asociarDocumentoController",
            controllerAs: "vm",

            scope: {              
                anotacion: "=anotacion",
                show: "=show"
            },

            bindToController: true
        }
    } // end
})();

