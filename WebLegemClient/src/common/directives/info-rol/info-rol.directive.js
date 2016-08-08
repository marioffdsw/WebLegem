
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .directive("infoRol", infoRol)
        .controller("infoRolController", infoRolController);

    function infoRol() {
        return {
            templateUrl: "common/directives/info-rol/info-rol.directive.html",
            restrict: "E",
            controller: "infoRolController",
            controllerAs: "vm",
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

    infoRolController.$inject = ["language"]
    function infoRolController(language) {
        var vm = this;
        vm.language = language;
        vm.cerrarDialogo = cerrarDialogo;

        function cerrarDialogo() {
            vm.show = false;
            console.log(vm.show);

            console.log(vm.infoRol);


        }

    }
})();

