(function () {
    "strict mode";

    angular
        .module("WebLegemApp")
        .controller("WebLegemAdminCrudController", WebLegemAdminCrudController);

    WebLegemAdminCrudController.$inject = [ "$scope" ];
    function WebLegemAdminCrudController( $scope ) {
        var vm = this;        
        vm.creando = false;

        vm.nuevo = nuevo;
        vm.editar = editar;
        vm.eliminar = eliminar;

        function nuevo() {            
            vm.objetoSeleccionado = { id: 0, nombre: "" };
            vm.editando = true;
        } // end function nuevo

        function editar() {            
            vm.editando = !vm.editando;
            //vm.editarCallback();
        } // end function editar

        function eliminar() {            
            vm.eliminarCallback( vm.objetoSeleccionado );
        } // end function eliminar
        
        return vm;
    } // end controller
})();