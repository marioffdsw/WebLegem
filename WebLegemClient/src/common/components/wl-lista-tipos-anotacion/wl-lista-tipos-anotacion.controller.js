(function () {
    "use strict";

    angular
      .module('WebLegemApp')
      .controller('WlListaTiposAnotacionController', WlListaTiposAnotacionController );

    WlListaTiposAnotacionController.$inject = ["language"];
    function WlListaTiposAnotacionController(language) {
        var vm = this;
        vm.language = language;
        vm.seleccionarObjeto = seleccionarObjeto;
        vm.checkear = checkear;
        vm.actualizar = actualizar;


        function checkear(entidad) {
            return vm.objetoSeleccionado && angular.equals(vm.objetoSeleccionado.id, entidad.id);
        } // end function

        function seleccionarObjeto(tipo) {
            if (vm.editando === true) {
                return;
            }
            if (angular.equals(vm.objetoSeleccionado, tipo)) {
                vm.objetoSeleccionado = undefined;
            }
            else {
                vm.objetoSeleccionado = angular.copy(tipo, {});
            }
        } // end function     

        function actualizar() {
            vm.actualizarCallback();
        }

        return vm;
    } // end controller
})();
