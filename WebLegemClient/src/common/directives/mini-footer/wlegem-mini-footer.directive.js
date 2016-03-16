
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlegemMiniFooter", wlegemMiniFooter);

    function wlegemMiniFooter() {
        return {
            templateUrl: "common/directives/mini-footer/wlegem-mini-footer.directive.html",
            restrict: "E"
        }
    } // end



})();