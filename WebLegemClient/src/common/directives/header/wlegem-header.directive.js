
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlegemHeader", wlegemHeader);

    function wlegemHeader() {
        return {
            templateUrl: "common/directives/header/wlegem-header.directive.html",
            restrict: "E",
            controller: "headerController",
            controllerAs: 'vm',
            bindToController: true
        }
    } // end
})();