(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("WlProgresoController", WlProgresoController);

    WlProgresoController.$inject = ["_","$scope"];
    function WlProgresoController(_,$scope) {
        var vm = this;
        vm.actualizar = actualizar;

        var div_pasos = [];
        var padre;

        function actualizar(newValue, oldValue) {

            vm.index = (_.map(vm.pasos, function (num) { return num.titulo; }).indexOf(newValue)) + 1;
            vm.indexOld = (_.map(vm.pasos, function (num) { return num.titulo; }).indexOf(oldValue)) + 1;

            if (vm.index < vm.indexOld) {
                for (var i = vm.indexOld; i > vm.index ; i--) {
                    div_pasos[i].classList.remove('marcado');
                }
            }
            else {
                for (var i = vm.indexOld; i <= vm.index ; i++) {
                    div_pasos[i].classList.add('marcado');
                }
            }
        }

        $scope.$watch('vm.actual[0].titulo', function (newValue, oldValue) {
            actualizar(newValue, oldValue);
        });


        vm.index = (_.map(vm.pasos, function (num) { return num.titulo; }).indexOf(vm.actual[0].titulo)) + 1;
        vm.totalIndex = vm.pasos.length;

        padre = document.getElementById(vm.idProgreso).children[0].children[0].children[1];

        //div_pasos = document.createElement("div");//circulos pasos
        //div_pasos.className = 'paso'; 

        for (var i = 1; i <= vm.pasos.length; i++) {
            div_pasos[i] = document.createElement("div");//circulos pasos
            div_pasos[i].className = 'paso';
            padre.appendChild(div_pasos[i]);
        }

        return vm;
    }
})();