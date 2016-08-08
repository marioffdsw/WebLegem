
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlegemNews", wlegemNews);

    function wlegemNews() {
        return {
            templateUrl: "common/directives/noticias/wlegem-news.directive.html",
            restrict: "E",
            controller: "newsController",
            controllerAs: "vm",
            scope:{}
        }
    } // end


})();