(function () {
    "use strict";

    angular
        .module("WebLegemApp.Administracion")
        .controller("TipoDocumentoController", TipoDocumentoController);

    TipoDocumentoController.$inject = ["TipoDocumentoResource", "language", "stringService"];
    function TipoDocumentoController(TipoDocumentoResource, language, stringService) {
        var vm = this;
        vm.language = language;
        /**********************************************************************************
        PROPERTIES
        **********************************************************************************/

        vm.tiposDoc = [];
        vm.tipoDocSeleccionado = undefined;
        vm.editando = false;
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
            if (vm.form_tipo_doc.$invalid) {
                vm.form_tipo_doc.$dirty = true;
            }
            else {
                if (vm.tipoDocSeleccionado.id == 0)
                    crear(vm.tipoDocSeleccionado);
                else
                    guardar(vm.tipoDocSeleccionado);
            }

        }


        function cancelar() {
            actualizar();
            vm.editando = false;
            vm.tipoDocSeleccionado = undefined;
            vm.form_tipo_doc.$setPristine();
        }


        function retrieveData() {
            startAnimation();
            TipoDocumentoResource.query()
                .$promise.then(function (data) {
                    stopAnimation();
                    vm.tiposDoc = data;
                },
                function errorCallback(error) {
                    stopAnimation();
                    vm.error = true;
                });
        }

        function nuevo() {
            vm.tipoDocSeleccionado = { id: 0, nombre: "" }
        }


        function crear() {
            startAnimation();
            vm.tipoDocSeleccionado.nombre = stringService.toTitleCase(vm.tipoDocSeleccionado.nombre);            
            TipoDocumentoResource.save(vm.tipoDocSeleccionado)
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
            
        } // end function create       


        function guardar(tipo) {
            startAnimation();
            tipo.nombre = stringService.toTitleCase(tipo.nombre);
            TipoDocumentoResource.update(tipo)
                .$promise.then(
                function (data) {
                    for (var i = 0; i < vm.tiposDoc.length; i++) {
                        if (vm.tiposDoc[i].id == data.id) {
                            vm.tiposDoc[i] = data;
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
        } // end method guardar

        function remover(tipo) {
            startAnimation();
            TipoDocumentoResource.remove(tipo)
            .$promise.then(
                function (data) {
                    retrieveData();
                },
                function errorCallback(error) {
                    vm.responseMessage = error.data.message;
                    vm.dialogResponse = true;                    
                    cancelar();
                });
        } // end function remover

        function actualizar() {
            retrieveData();
        }

        function startAnimation() {           
            document.getElementById(vm.idLoad).style.visibility = "visible";
            vm.procesando = true;
        }
        function stopAnimation() {
            document.getElementById(vm.idLoad).style.visibility = "hidden";
            vm.procesando = false;
        }

    } // end TipoDocuementoController
})();
