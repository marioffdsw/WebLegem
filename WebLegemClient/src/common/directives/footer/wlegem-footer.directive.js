
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlegemFooter", wlegemFooter);

    function wlegemFooter() {
        return {
            templateUrl: "common/directives/footer/wlegem-footer.directive.html",
            restrict: "E",
            controller: "WLegemFooterController",
            controllerAs: "vm",
            scope: {}
            
        }
    } // end



})();