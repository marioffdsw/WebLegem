
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("wlCintaLogo", wlCintaLogo)
        .directive("wlNombreLogo", wlNombreLogo);


    function wlCintaLogo() {
        return {
            templateUrl: "common/directives/escudo-nombre/wl-cinta.directive.html",
            restrict: "E"
        }
    }
    //--------------------------------
    function wlNombreLogo() {
        return {
            templateUrl: "common/directives/escudo-nombre/wl-nombre.directive.html",
            restrict: "E"
        }
    }
    //--------------------------------

})();