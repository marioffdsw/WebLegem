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

        function checkear(tipo) {
            console.log( vm.objetoSeleccionado );
            return vm.objeto && angular.equals(vm.objeto.id, tipo.id);
        } // end function        

        return vm;
    } // end controller
})();