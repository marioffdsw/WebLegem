(function () {
    "strict mode";

    angular
        .module("WebLegemApp")
        .controller("WebLegemAdminCrudController", WebLegemAdminCrudController);

    WebLegemAdminCrudController.$inject = [ "language"];
    function WebLegemAdminCrudController(language) {
        var vm = this;
        vm.language = language;
        vm.creando = false;

        vm.ban_confirmacion = false;
        vm.nuevo = nuevo;
        vm.editar = editar;
        vm.eliminar = eliminar;
        vm.cancelarEliminacion = cancelarEliminacion;
        vm.confirmarEliminacion = confirmarEliminacion;
        vm.ganarFoco = ganarFoco;

        function nuevo() {            
            //vm.objetoSeleccionado = { id: 0, nombre: "" };
            vm.ganarFoco();
            vm.nuevoCallback();
            vm.editando = true;
        } // end function nuevo

        function editar() {
            vm.ganarFoco();
            vm.editando = !vm.editando;
            //vm.editarCallback();
        } // end function editar

        function eliminar() {
            vm.ban_confirmacion = true;            
        } // end function eliminar


        function cancelarEliminacion() {
            vm.ban_confirmacion = false;
        } // end function cancelarEliminacion

        function confirmarEliminacion(){
            vm.eliminarCallback(vm.objetoSeleccionado);
            vm.ban_confirmacion = false;
        } // end function confirmarEliminacion

        function ganarFoco() {
            var elemento = document.getElementById(vm.foco);            
            elemento.focus();
        }
        
        return vm;
    } // end controller
})();