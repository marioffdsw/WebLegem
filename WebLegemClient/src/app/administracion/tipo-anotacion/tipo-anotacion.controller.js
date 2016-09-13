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
         PROPERTIES
        **********************************************************************************/

        vm.tiposAnotacion = [];
        vm.tipoAnotacionSeleccionada = undefined;
        vm.editando = false;
        //vm.seleccionar = seleccionar;

        /**********************************************************************************
         PUBLIC METHOD DEFINITION
        **********************************************************************************/

        vm.remover = remover;
        vm.cancelar = cancelar;
        vm.aceptar = aceptar;
        vm.nuevo = nuevo;

        /**********************************************************************************
        DATA RETRIEVING CALLS
        **********************************************************************************/
        retrieveData();

        /**********************************************************************************
        PRIVATE METHODS
        **********************************************************************************/


        function aceptar() {
            if (vm.form_tipo_ano.$invalid == true) {
                vm.form_tipo_ano.tipo.$invalid ? vm.form_tipo_ano.tipo.$dirty = true : '';
                vm.form_tipo_ano.raiz.$invalid ? vm.form_tipo_ano.raiz.$dirty = true : '';
            }
            else{
                if (vm.tipoAnotacionSeleccionada.id == 0) {
                    crear(vm.tipoAnotacionSeleccionada);
                }
                else {
                    guardar(vm.tipoAnotacionSeleccionada);
                }
                cancelar();
            }    
        }


        function cancelar() {
            vm.editando = false;
            vm.tipoAnotacionSeleccionada = undefined;
            vm.form_tipo_ano.$setPristine();
        }


        function retrieveData() {
            TipoAnotacionResource.query( function (data) {
                vm.tiposAnotacion = data;
            });
        }

        function nuevo() {
            vm.tipoAnotacionSeleccionada = { id: 0, nombre: "", raiz: "" };
        }


        function crear() {

            TipoAnotacionResource.save(vm.tipoAnotacionSeleccionada, function (data) {
                retrieveData();
            });
            cancelar();
        }

        function guardar(tipo) {            
            TipoAnotacionResource.update(tipo, function (data) {
                for (var i = 0; i < vm.tiposAnotacion.length; i++) {
                    if (vm.tiposAnotacion[i].id == data.id) {
                        vm.tiposAnotacion[i] = data;
                        break;
                    }
                }
            });
            cancelar();
        }

        function remover(tipoAnotacion) {            
            TipoAnotacionResource.remove(tipoAnotacion, function () {
                retrieveData();
            });

            cancelar();
        }


        //function seleccionar(tipoAnotacion) {
        //    if (vm.editando === true)
        //        return;

        //    if (angular.equals(vm.tipoAnotacionSeleccionada, tipoAnotacion))
        //        vm.tipoAnotacionSeleccionada = undefined;
        //    else
        //        vm.tipoAnotacionSeleccionada = angular.copy(tipoAnotacion);
        //}
        
    } // end TipoAnotacion Controller
})();