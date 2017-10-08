(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("TipoAnotacionController", TipoAnotacionController);

    TipoAnotacionController.$inject = ["TipoAnotacionResource", "language", "stringService"];
    function TipoAnotacionController(TipoAnotacionResource, language, stringService) {
        var vm = this;
        vm.language = language;
        /**********************************************************************************
         PROPERTIES
        **********************************************************************************/

        vm.tiposAnotacion = [];
        vm.tipoAnotacionSeleccionada = undefined;
        vm.editando = false;
        //vm.seleccionar = seleccionar;
        vm.dialogResponse = false;
        vm.responseMessage = "";
        vm.idLoad = "wl-lista";
        vm.procesando = false;
        vm.error = false;

        /**********************************************************************************
         PUBLIC METHOD DEFINITION
        **********************************************************************************/

        vm.remover = remover;
        vm.cancelar = cancelar;
        vm.aceptar = aceptar;
        vm.nuevo = nuevo;
        vm.actualizar = actualizar;

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
            }    
        }


        function cancelar() {
            actualizar();
            vm.editando = false;
            vm.tipoAnotacionSeleccionada = undefined;
            vm.form_tipo_ano.$setPristine();
        }

        function actualizar() {
            retrieveData();
        }


        function retrieveData() {
            startAnimation();
            TipoAnotacionResource.query()
                .$promise.then(function (data) {
                    stopAnimation();
                    vm.tiposAnotacion = data;
                },
                function errorCallback(error) {
                    stopAnimation();
                    vm.error = true;
                });
        }

        function nuevo() {
            vm.tipoAnotacionSeleccionada = { id: 0, nombre: "", raiz: "" };
        }


        function crear() {
            vm.tipoAnotacionSeleccionada.nombre = stringService.toTitleCase(vm.tipoAnotacionSeleccionada.nombre);
            TipoAnotacionResource.save(vm.tipoAnotacionSeleccionada)
                .$promise.then(
                    function (data) {                        
                        cancelar();
                    },
                    function errorCallback(error) {
                        vm.responseMessage = error.data.message;
                        vm.dialogResponse = true;
                        cancelar();
                    },
                    function notifyCallback(error) {
                        cancelar();
                    }
                );
        }

        function guardar(tipo) {
            startAnimation();
            tipo.nombre = stringService.toTitleCase(tipo.nombre);
            TipoAnotacionResource.update(tipo)
                .$promise.then(
                function (data) {
                    for (var i = 0; i < vm.tiposAnotacion.length; i++) {
                        if (vm.tiposAnotacion[i].id == data.id) {
                            vm.tiposAnotacion[i] = data;
                            break;
                        }
                    }
                    cancelar();
                },
                function errorCallback(error) {
                    vm.responseMessage = error.data.message;
                    vm.dialogResponse = true;                    
                    cancelar();
                });
        }

        function remover(tipoAnotacion) {
            startAnimation();
            TipoAnotacionResource.remove(tipoAnotacion)
            .$promise.then(
                function (data) {                    
                    cancelar();
                },
                function errorCallback(error) {
                    vm.responseMessage = error.data.message;
                    vm.dialogResponse = true;                    
                    cancelar();
                });
        }

        function startAnimation() {
            document.getElementById(vm.idLoad).style.visibility = "visible";
            vm.procesando = true;
        }
        function stopAnimation() {
            document.getElementById(vm.idLoad).style.visibility = "hidden";
            vm.procesando = false;
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