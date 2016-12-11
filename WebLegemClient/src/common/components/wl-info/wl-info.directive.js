(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlInfo", wlInfo);

    function wlInfo() {
        return {
            templateUrl: "common/components/wl-info/wl-info.directive.html",
            restrict: 'E',
            transclude: true, // we want to insert custom content inside the directive
            replace: true, // Replace with the template below

            scope: {
                show: "=show",
                title: "@title",
                color: "@color"
            },

            link: function (scope, element, attrs, transclude) {                
                scope.hideModal = function () {
                    scope.show = false;
                };
            }

    
        }
    } // end
})();

