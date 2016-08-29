(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("TipoAnotacionController", TipoAnotacionController);

    TipoAnotacionController.$inject = ["TipoAnotacionResource", "language"];
    function TipoAnotacionController( TipoAnotacionResource ,language) {
        var vm = this;
        vm.language = language;
        /**********************************************************************************
         *
         *   PROPERTIES
         *   
         **********************************************************************************/
        
        vm.tiposAnotacion = [];
        vm.tipoAnotacionSeleccionada = undefined;
        vm.editando = false;
        vm.seleccionar = seleccionar;

        /**********************************************************************************
         *
         *   PUBLIC METHOD DEFINITION
         *   
         **********************************************************************************/

        vm.remover = remover;
        vm.cancelar = cancelar;
        vm.aceptar = aceptar;
        vm.nuevo = nuevo;




        /**********************************************************************************
         *
         *   DATA RETRIEVING CALLS
         *   
         **********************************************************************************/

        retrieveData();


        /**********************************************************************************
         *
         *   PRIVATE METHODS
         *   
         **********************************************************************************/


        function aceptar() {

            var tipoAnotacion = angular.copy( vm.tipoAnotacionSeleccionada );
            
            if (vm.tipoAnotacionSeleccionada.id == 0) {
                crear( tipoAnotacion );
            }
            else {
                guardar( tipoAnotacion );
            }

            cancelar();
        }


        function retrieveData() {
            TipoAnotacionResource.query( function (data) {
                vm.tiposAnotacion = data;
            });
        }


        function cancelar() {
            vm.editando = false;
            vm.tipoAnotacionSeleccionada = undefined;            
        }


        function nuevo() {
            vm.tipoAnotacionSeleccionada = { id: 0, nombre: "", raiz: "" };
        }


        function crear(tipoAnotacion) {

            TipoAnotacionResource.save( tipoAnotacion, function (data) {
                retrieveData();
            });

            cancelar();
        }

        function guardar(tipoAnotacion) {            
            TipoAnotacionResource.update(tipoAnotacion, function (data) {
                retrieveData();
            });

            cancelar();
        }

        function remover(tipoAnotacion) {            
            TipoAnotacionResource.remove(tipoAnotacion, function () {
                retrieveData();
            });

            cancelar();
        }


        function seleccionar(tipoAnotacion) {
            if (vm.editando === true)
                return;

            if (angular.equals(vm.tipoAnotacionSeleccionada, tipoAnotacion))
                vm.tipoAnotacionSeleccionada = undefined;
            else
                vm.tipoAnotacionSeleccionada = angular.copy(tipoAnotacion);
        }
        
    } // end TipoAnotacion Controller
})();