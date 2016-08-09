(function () {
    "use strict";

    angular
        .module("WebLegemApp.Anotacion")
        .controller("crearAnotacionController", crearAnotacionController)    
        

    crearAnotacionController.$inject = ["_", "language"];

    function crearAnotacionController(_, language) {
        var vm = this;
        vm.language = language;
        vm.nextStep = nextStep;
        vm.backStep = backStep;
        vm.crearAnotacion = crearAnotacion;


        vm.ban_exito_anotacion;
        vm.ban_crear_doc = false; //flag para habilitar la creacion de un doc cuando no se encuentra resultados
        vm.ban_crear_ano = false; //flag para habilitar el form de crear anotacion cuando ya se selecciona un documento de la lista

        vm.index = 0;

        vm.pasos = [{ titulo: "paso1" }, { titulo: "paso2" }];
        vm.actual = [{ titulo: "paso1" }];
        vm.idProgreso = "anotacionManual";

        //------------------------------------------------------------------------------------------------------------------

        function crearAnotacion() {
            //TODO llenar metodo anotacion
            vm.ban_exito_anotacion = true;
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

    } // end crearAnotacionController

})();
