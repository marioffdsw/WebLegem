(function () {
    "use strict";

    angular
        .module("WebLegemApp.Anotacion")
        .controller("editarAnotacionController", editarAnotacionController)    
        

    editarAnotacionController.$inject = ["language"];

    function editarAnotacionController(language) {
        var vm = this;
        vm.language = language;
        vm.vista1 = "app/anotacion/editar-anotacion/templates/form_editar_anotacion.html";
        vm.vista2 = "app/anotacion/editar-anotacion/templates/procesando.html";
        vm.vistas = vm.vista1;


        vm.backStep = backStep;
        vm.seleccionarDoc = seleccionarDoc;
        vm.editarAnotacion = editarAnotacion;
        vm.confirmarEditarAnotacion = confirmarEditarAnotacion;
        vm.aceptarProcesando = aceptarProcesando;

        vm.ban_confirmacion;//mensaje para confirmar los edit
        vm.index = 0;

        //------------------------------------------------------------------------------------------------------------------
        function seleccionarDoc() {
            vm.index = 1;//siguiente paso
        }
        //------------------------------------------------------------------------------------------------------------------
        function editarAnotacion() {
            vm.ban_confirmacion = true;
        }
        //------------------------------------------------------------------------------------------------------------------    
        function confirmarEditarAnotacion() {
            //TODO llenar metodo eliminar
            vm.vistas = vm.vista2;
        }
        //------------------------------------------------------------------------------------------------------------------    
        function aceptarProcesando() {
            vm.ban_confirmacion = false;
            vm.vistas = vm.vista1;
        }


        //------------------------------------------------------------------------------------------------------------------
        function backStep() {//paso anterior
            vm.index = 0;
        }
        //------------------------------------------------------------------------------------------------------------------

        

        return vm;

    } // end editarAnotacionController

})();
