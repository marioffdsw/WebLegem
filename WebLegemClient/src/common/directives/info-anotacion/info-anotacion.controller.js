
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("infoAnotacionController", infoAnotacionController);

    infoAnotacionController.$inject = ["language"]
    function infoAnotacionController(language) {
        var vm = this;
        vm.language = language;
        vm.cerrarDialogo = cerrarDialogo;

        function cerrarDialogo() {
            vm.show = false;

        }
                
    } // end controller
})();