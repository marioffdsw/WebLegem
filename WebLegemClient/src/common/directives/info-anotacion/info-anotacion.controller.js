
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("infoAnotacionController", infoAnotacionController);

    function infoAnotacionController() {
        var vm = this;
        vm.cerrarDialogo = cerrarDialogo;

        function cerrarDialogo() {
            vm.show = false;

        }
                
    } // end controller
})();