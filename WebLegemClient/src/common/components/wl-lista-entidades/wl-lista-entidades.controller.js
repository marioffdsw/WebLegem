(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("WlListaEntidadesController", wlListaEntidadesController);

    wlListaEntidadesController.$inject = ["language"];
    function wlListaEntidadesController(language) {
        var vm = this;
        vm.language = language;        
        vm.checkear = checkear;

        function checkear(entidad) {
            return vm.objetoSeleccionado && angular.equals(vm.objetoSeleccionado.id, entidad.id);
        } // end function        

        return vm;
    } // end controller
})();