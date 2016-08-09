(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("WlListaAnoEncontradoController", WlListaAnoEncontradoController);

    WlListaAnoEncontradoController.$inject = ["language"];
    function WlListaAnoEncontradoController(language) {
        var vm = this;
        vm.language = language;
        vm.quitarSeleccion = quitarSeleccion;
        vm.itemSelected = itemSelected;
        vm.crearAnotacion = crearAnotacion;
        vm.descartarAno = descartarAno;
        vm.anoSelected = anoSelected;
        
        vm.banAso = false;//bandera asociacion
        vm.ban_itemSelected = false;
        vm.ho_ = [];

        function quitarSeleccion() {
            vm.ban_itemSelected = false;
            for (var i = 1; i <= 3 ; i++) {
                vm.ho_[i] = false;
            }
        }

        function itemSelected(item) {
            vm.ban_itemSelected = true;
            for (var i = 1; i <= 3 ; i++) {
               
                if (i != item.id)vm.ho_[i] = true;
            }
        }

        function crearAnotacion() {
            
        }

        function descartarAno() {
            alert("anotacion descartada");
        }

        function anoSelected(item) {
            //item = item.id;//por aqui se pasan los datos de la seleccion asia el modal
            vm.banAso = true;
        }
   
        return vm;
    }
})();