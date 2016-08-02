
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("wlAnotacionAsistidaController", wlAnotacionAsistidaController);

    wlAnotacionAsistidaController.$inject = ["_"];
    function wlAnotacionAsistidaController(_) {
        var vm = this;
        vm.index = 0;
        vm.nextStep = nextStep;
        vm.backStep = backStep;
        vm.salirDelAsistente = salirDelAsistente;

        vm.comporLista = "selectedItem1"; //seleccion como radio buttom

        vm.pasosAsistida = [{ titulo: "paso1" }, { titulo: "paso2" }, { titulo: "paso3" }];
        vm.actualAsistida = [{ titulo: "paso1" }];
        vm.idProgresoAsistida = "anotacionAsistida";



        //------------------------------------------------------------------------------------------------------------------

        function nextStep() {//siguiente paso
            vm.index = (_.map(vm.pasosAsistida, function (num) { return num.titulo; }).indexOf(vm.actualAsistida[0].titulo));
            if (vm.index < (vm.pasosAsistida.length - 1)) vm.actualAsistida[0].titulo = vm.pasosAsistida[vm.index + 1].titulo;
            vm.index = (_.map(vm.pasosAsistida, function (num) { return num.titulo; }).indexOf(vm.actualAsistida[0].titulo));
        }

        //------------------------------------------------------------------------------------------------------------------

        function backStep() {//paso anterior
            vm.index = (_.map(vm.pasosAsistida, function (num) { return num.titulo; }).indexOf(vm.actualAsistida[0].titulo));
            if (vm.index > 0) vm.actualAsistida[0].titulo = vm.pasosAsistida[vm.index - 1].titulo;
            vm.index = (_.map(vm.pasosAsistida, function (num) { return num.titulo; }).indexOf(vm.actualAsistida[0].titulo));
        }

        //------------------------------------------------------------------------------------------------------------------

        function salirDelAsistente() {//salir del asistente
            
            vm.ban_alerta = false;
            vm.banManual = true;
        }

       
        return vm        
    } // end controller
})();