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
        vm.descartarAnotacion = descartarAnotacion;
        vm.anotacionSelected = anotacionSelected;
        vm.posibleAnotacion;
        
        vm.mostrarDialogoAsociacion = false;//bandera asociacion
        vm.ban_itemSelected = false;
        vm.ho_ = [];
        vm.posiblesAnotaciones = [
            { tipoAnotacion: { nombre: "Deroga" } },
            { tipoAnotacion: { nombre: "Modifica" } }
        ];


        function traerPosiblesAnotaciones() {
            // TODO- traer posibles anotaciones usando un service api
        }

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

        function descartarAnotacion( anotacion ) {
            vm.posiblesAnotaciones = _.filter(vm.posiblesAnotaciones, function (i) { if (i === anotacion) return false; return true; });
        }

        function anotacionSelected(posibleAnotacion) {
            //item = item.id;//por aqui se pasan los datos de la seleccion asia el modal
            vm.posibleAnotacion = posibleAnotacion;
            vm.mostrarDialogoAsociacion = true;
        }
   
        return vm;
    }
})();