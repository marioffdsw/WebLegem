
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("infoRolController", infoRolController);

    function infoRolController() {
        var vm = this;
        vm.cerrarDialogo = cerrarDialogo;

        function cerrarDialogo() {
            vm.show = false;
            console.log(vm.show);

            console.log(vm.infoRol);
            

        }
                
    } // end controller
})();