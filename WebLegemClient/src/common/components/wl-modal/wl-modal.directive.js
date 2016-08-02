/// <reference path="wl-modal.directive.html" />

(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlModal", wlModal);

    function wlModal() {
        return {
            templateUrl: "common/components/wl-modal/wl-modal.directive.html",
            restrict: 'E',
            transclude: true, // we want to insert custom content inside the directive
            replace: true, // Replace with the template below

            scope: {
                show: "=show"/*,
                width: "=width",
                height: "=height"*/
            },

            link: function (scope, element, attrs) {
                scope.hideModal = function () {
                    scope.show = false;
                };
            }

    
        }
    } // end
})();

