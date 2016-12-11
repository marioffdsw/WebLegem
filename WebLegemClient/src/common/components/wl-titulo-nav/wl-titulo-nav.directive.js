(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlTituloNav", wlTituloNav);

    function wlTituloNav() {
        return {
            templateUrl: "common/components/wl-titulo-nav/wl-titulo-nav.tmpl.html",
            restrict: "E",
            controller: "WlTituloNavController",
            controllerAs: "v"
            
        };
    }
})();