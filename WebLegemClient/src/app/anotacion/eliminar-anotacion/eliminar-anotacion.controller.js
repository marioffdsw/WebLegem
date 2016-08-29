(function () {
    "use strict";

    angular
        .module("WebLegemApp.Anotacion")
        .controller("eliminarAnotacionController", eliminarAnotacionController)    
        
    eliminarAnotacionController.$inject = ["language"];

    function eliminarAnotacionController(language) {
        var vm = this;
        vm.language = language;
        
        vm.vista1 = "app/anotacion/eliminar-anotacion/templates/resumen_eliminar_anotacion.html";
        vm.vista2 = "app/anotacion/editar-anotacion/templates/procesando.html";
        vm.vistas = vm.vista1;

        vm.backStep = backStep;
        vm.seleccionarDoc = seleccionarDoc;
        vm.eliminarAno = eliminarAno;
        vm.confirmarEliminarAnotacion = confirmarEliminarAnotacion;
        vm.aceptarProcesando = aceptarProcesando;
        
        vm.ban_confirmacion;//mensaje para confirmar los delete
        vm.index = 0;

        //------------------------------------------------------------------------------------------------------------------
        function seleccionarDoc() {
            vm.index = 1;
        }
        //------------------------------------------------------------------------------------------------------------------
        function eliminarAno() {
            vm.ban_confirmacion = true;
        }
        //------------------------------------------------------------------------------------------------------------------

        function confirmarEliminarAnotacion() {
            //TODO llenar metodo eliminar
            vm.vistas = vm.vista2;
        }
        //------------------------------------------------------------------------------------------------------------------    
        function aceptarProcesando() {
            vm.ban_confirmacion = false;
            vm.vistas = vm.vista1;
        }

        //------------------------------------------------------------------------------------------------------------------
        function backStep() {
            vm.index = 0;
        }
        //------------------------------------------------------------------------------------------------------------------

        
        return vm;
    } // end eliminarAnotacionController

})();
