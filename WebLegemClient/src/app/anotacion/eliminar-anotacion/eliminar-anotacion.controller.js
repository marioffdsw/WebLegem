﻿(function () {
    "use strict";

    angular
        .module("WebLegemApp.Anotacion")
        .controller("eliminarAnotacionController", eliminarAnotacionController)    
        
    eliminarAnotacionController.$inject = ["_"];

    function eliminarAnotacionController(_) {
        var vm = this;

        vm.nextStep = nextStep;
        vm.backStep = backStep;
        vm.eliminarAnotacion = eliminarAnotacion;
        
        vm.ban_confirmacion;//mensaje para confirmar los delete
        vm.ban_exito_eliminacion;//mensaje de exito eliminados
        vm.index = 0;

        vm.pasos = [{ titulo: "paso1" }, { titulo: "paso2" }];
        vm.actual = [{ titulo: "paso1" }];


         //------------------------------------------------------------------------------------------------------------------
        function eliminarAnotacion() {
            //TODO llenar metodo eliminar
            vm.ban_confirmacion = false;
            vm.ban_exito_eliminacion = true;
        }


        //------------------------------------------------------------------------------------------------------------------

        function nextStep() {//siguiente paso
            vm.index = (_.map(vm.pasos, function (num) { return num.titulo; }).indexOf(vm.actual[0].titulo));
            if (vm.index < (vm.pasos.length - 1)) vm.actual[0].titulo = vm.pasos[vm.index + 1].titulo;
            vm.index = (_.map(vm.pasos, function (num) { return num.titulo; }).indexOf(vm.actual[0].titulo));
        }

        //------------------------------------------------------------------------------------------------------------------

        function backStep() {//paso anterior
            vm.index = (_.map(vm.pasos, function (num) { return num.titulo; }).indexOf(vm.actual[0].titulo));
            if (vm.index > 0) vm.actual[0].titulo = vm.pasos[vm.index - 1].titulo;
            vm.index = (_.map(vm.pasos, function (num) { return num.titulo; }).indexOf(vm.actual[0].titulo));
        }


        return vm;
    } // end eliminarAnotacionController

})();