(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("WlListaTiposEntidadesController", WlListaTiposEntidadesController);

    WlListaTiposEntidadesController.$inject = ["language"];
    function WlListaTiposEntidadesController(language) {
        var vm = this;                              
        vm.language = language;        
        vm.checkear = checkear;
        vm.actualizar = actualizar;

        function checkear(tipo) {
            return vm.objeto && angular.equals(vm.objeto.id, tipo.id);
        } // end function        

        function actualizar() {
            vm.actualizarCallback();
        }
        return vm;
    } // end controller
})();