
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlFotografia", wlFotografia);

    function wlFotografia() {
        return {
            templateUrl: "common/directives/fotografia/fotografia.directive.html",
            restrict: 'E',
            controller: "fotografiaController",
            controllerAs: "vm",
            scope: {
                show: "=show"
            },

            bindToController: true
        }
    } // end
})();

