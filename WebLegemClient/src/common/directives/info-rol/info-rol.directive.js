
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("infoRol", infoRol);

    function infoRol() {
        return {
            templateUrl: "common/directives/info-rol/info-rol.directive.html",
            restrict: "E",
            scope: {
                show: "=",
                rol: "="                
            },
            link: function (scope, element, attrs) {                

                scope.hideModal = function () {
                    scope.show = false;
                    document.getElementById("body_index").style.overflow = "auto";
                };
            },
        }
    } // end
})();

