
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("infoAnotacion", infoAnotacion);

    function infoAnotacion() {
        return {
            templateUrl: "common/directives/info-anotacion/info-anotacion.directive.html",
            restrict: "E",
            scope: {
                show: "=",
                datos: "="/*
                height: "=height"*/
            },
            link: function (scope, element, attrs) {
                if (scope.show == true) {
                    document.getElementById("body_index").style.overflow = "hidden";
                }

                scope.hideModal = function () {
                    scope.show = false;
                    document.getElementById("body_index").style.overflow = "auto";                  
                };
            },
        }
    } // end
})();

