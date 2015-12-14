(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("homeController", homeController);

    homeController.$inject = [];
    function homeController() {
        var vm = this;
        vm.a = "recursos/botones/jv.png";

        vm.funcionPerro = function () {
            if (vm.a=="recursos/botones/jv.png") {
                vm.a = "recursos/botones/path4.png";
            }
            else {
                vm.a = "recursos/botones/jv.png";
            }
        };

    } // end TipoEntidadController

})();