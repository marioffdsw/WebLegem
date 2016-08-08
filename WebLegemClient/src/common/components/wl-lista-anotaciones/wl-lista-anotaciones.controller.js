(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("WlListaAnotacionesController", WlListaAnotacionesController);

    WlListaAnotacionesController.$inject = ["$scope", "language"];
    function WlListaAnotacionesController($scope, language) {
        var vm = this;
        vm.mostrarInfo = mostrarInfo;
        vm.quitarSeleccion = quitarSeleccion;
        vm.itemSelected = itemSelected;
        vm.crearAnotacion = crearAnotacion;
        vm.selectMetodo = selectMetodo;
        vm.language = language;

        vm.modalShown = false;
        vm.ban_visorPdf = false;
        vm.ban_itemSelected = false;
        vm.info_anotacion;
        vm.ho_ = [];


        function mostrarInfo(item) {
            vm.modalShown = true;
            vm.info_anotacion = item.contenido;
        }

        function quitarSeleccion() {
            vm.ban_itemSelected = false;
            var aux;
            for (var i = 1; i <= 6 ; i++) {
                 aux = "la_check_" + i;
                 document.getElementById(aux).checked = false;
            }
        }

        function selectMetodo(item) {
            item = item.id;
            console.log(vm.metodo);
            vm.metodo == "selectedItem2" ? itemSelected2(item) : itemSelected(item);
        }


        function itemSelected(item) {//para seleccinar varios items
            vm.ban_itemSelected = true;
            var aux = "la_check_" + item;
            document.getElementById(aux).checked = !document.getElementById(aux).checked;
        }

        function itemSelected2(item) {//para seleccinar solo 1 item
            vm.ban_itemSelected = true;
            var aux = "la_check_" + item;
            var checks = [];
            
            checks = document.getElementsByName("la_check");
            
            for (var i=0; i < checks.length ; i++) {
                checks[i].checked = false;
            }
            document.getElementById(aux).checked = !document.getElementById(aux).checked;
        }

        function crearAnotacion() {
            vm.visorPdf = true;
        }
    

        return vm;
    }
})();