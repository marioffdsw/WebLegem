(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("WlListaCorreosController", WlListaCorreosController);

    WlListaCorreosController.$inject = ["language"];
    function WlListaCorreosController(language) {
        var vm = this;
        vm.language = language;
        vm.checkear = checkear;
        vm.updateList = updateList;
        vm.seleccionar = seleccionar;
        vm.default = 
        vm.tipo;

        function checkear(tipo) {
            return vm.objeto && angular.equals(vm.objeto.id, tipo.id);
        } // end function        
 
        vm.opciones = [
          { id: '1', nombre: 'Entidad' },
          { id: '2', nombre: 'Tipo entidad' }
        ];
        
        //selectedOption = { id: '3', nombre:'Entidad'}

        function updateList() {
            if (vm.tipo.id == 1) {
                alert("1");
            } else if (vm.tipo.id == 2) {
                alert("2");
            }
        }

        function seleccionar(entidadASeleccionar) {
            if (vm.editando === true) {
                return;
            }
            if (vm.entidadSeleccionada && angular.equals(vm.entidadSeleccionada.id, entidadASeleccionar.id)) {
                vm.entidadSeleccionada = undefined;
            }
            else {
                vm.entidadSeleccionada = angular.copy(entidadASeleccionar);
                vm.entidadSeleccionada.tipoEntidad = seleccionarTipoEntidad(vm.entidadSeleccionada, vm.tiposEntidades);
            }
        } // end function seleccionar

        return vm;
    } // end controller
})();