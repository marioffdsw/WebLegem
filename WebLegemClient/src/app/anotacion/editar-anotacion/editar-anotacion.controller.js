(function () {
    "use strict";

    angular
        .module("WebLegemApp.Anotacion")
        .controller("editarAnotacionController", editarAnotacionController)    
        

    editarAnotacionController.$inject = ["_", "language"];

    function editarAnotacionController(_, language) {
        var vm = this;
        vm.language = language;
        vm.nextStep = nextStep;
        vm.backStep = backStep;
        vm.editarAnotacion = editarAnotacion;
        vm.comporLista = "selectedItem2";//seleccion como radiobuttom

        vm.ban_exito_edicion;//mensaje de exito eliminados
        vm.index = 0;

        vm.pasos = [{ titulo: "paso1" }, { titulo: "paso2" }];
        vm.actual = [{ titulo: "paso1" }];


        //------------------------------------------------------------------------------------------------------------------
        function editarAnotacion() {
            //TODO llenar metodo editar
            vm.ban_exito_edicion = true;
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

    } // end editarAnotacionController

})();
