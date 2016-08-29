(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("WlListaAnotacionesController", WlListaAnotacionesController);

    WlListaAnotacionesController.$inject = ["$scope", "language"];
    function WlListaAnotacionesController($scope, language) {
        var vm = this;
        vm.language = language;

        vm.eliminar = eliminar;
        vm.editar = editar;

        vm.mostrarInfo = mostrarInfo;
        vm.itemSelected = itemSelected;
        vm.crearAnotacion = crearAnotacion;
        vm.selectMetodo = selectMetodo;
        


        vm.modalShown = false;
        vm.ban_visorPdf = false;
        vm.ban_itemSelected = false;
        vm.info_anotacion;
        vm.ho_ = [];


        function editar(i) {
            //el i = id de lo que se selecciono :v
            vm.editarCallback();
        }

        function eliminar(i) {
            //el i = id de lo que se selecciono :v
            vm.eliminarCallback();
        }

        function mostrarInfo(item) {
            vm.modalShown = true;
            vm.info_anotacion = item.contenido;
        }

        function selectMetodo(item) {
            item = item.id;
            console.log(vm.metodo);
            vm.metodo == "selectedItem2" ? itemSelected2(item) : itemSelected(item);
        }


        function itemSelected(item) {//para seleccinar varios items
            vm.ban_itemSelected = true;
            var aux = "la_check_" + item;
        }

        function itemSelected2(item) {//para seleccinar solo 1 item
            vm.ban_itemSelected = true;
            var aux = "la_check_" + item;
            var checks = [];
            
            checks = document.getElementsByName("la_check");
            
            for (var i=0; i < checks.length ; i++) {
                checks[i].checked = false;
            }
        }

        function crearAnotacion() {
            vm.visorPdf = true;
        }
    

        return vm;
    }
})();