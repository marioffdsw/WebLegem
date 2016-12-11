(function () {
    "use strict";

    angular
        .module("WebLegemApp.Administracion")
        .controller("TipoEntidadController", TipoEntidadController);

    TipoEntidadController.$inject = ["TipoEntidadService", "TipoDocumentoResource", "_", "language"];
    function TipoEntidadController(TipoEntidadService, TipoDocumentoResource, _, language) {
        var vm = this;
        vm.language = language;
        /**********************************************************************************
         *
         *   PROPERTIES
         *
         **********************************************************************************/

        vm.tiposDocumentos = [];
        vm.tiposEntidades = [];
        vm.tipoEntidadSeleccionado = {};
        vm.editando = false;
        vm.seleccionar = seleccionar;
        vm.dialogResponse = false;
        vm.responseMessage = "";
        vm.idLoad = "wl-lista";
        vm.procesando = false;
        vm.error = false;

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
            if (vm.form_tipo_ent.$invalid == true) {
                vm.form_tipo_ent.$dirty = true;
            }
            else{

                var tipoEntidad = angular.copy(vm.tipoEntidadSeleccionado);
                tipoEntidad.documentosSoportados = _.chain(vm.tiposDocumentos)
                    .filter(function (item) { return item.valor; })
                    .map(function (item) {
                        delete item.valor;
                        return item;
                    }).value();

                if (vm.tipoEntidadSeleccionado.id == 0) {
                    crear(tipoEntidad);
                }
                else {
                    guardar(tipoEntidad);
                }
                cancelar();
            }
        }


        function cancelar() {
            vm.editando = false;
            vm.tipoEntidadSeleccionado = {};
            vm.tiposDocumentos = mapearTiposDocumentoPermitidos(vm.tiposDocumentos, vm.tipoEntidadSeleccionado);
            vm.form_tipo_ent.$setPristine();
        }


        function retrieveData() {

            startAnimation();

            TipoEntidadService.query()
                .$promise.then(function (data) {
                    stopAnimation();
                    vm.tiposEntidades = data;
                },
                function errorCallback(error) {
                    stopAnimation();
                    vm.error = true;
                });

            TipoDocumentoResource.query()
                .$promise.then(function (data) {
                    stopAnimation();
                    vm.tiposDocumentos = mapearTiposDocumentoPermitidos(data, vm.tipoEntidadSeleccionado);
                },
                function errorCallback(error) {
                    stopAnimation();
                    vm.error = true;
                });
        }


        function nuevo() {
            vm.tipoEntidadSeleccionado = { id: 0, nombre: "", documentosSoportados: [] };
        }


        function crear(tipoEntidad) {
            TipoEntidadService.save(tipoEntidad)
                .$promise.then(
                    function (data) {
                        retrieveData();
                    },
                    function errorCallback(error) {
                        vm.responseMessage = error.data.message;
                        vm.dialogResponse = true;
                    },
                    function notifyCallback(error) {
                    }
                );
            cancelar();

        } // end function create


        function guardar(tipoEntidad) {

            startAnimation();
            TipoEntidadService.update(tipoEntidad)
                .$promise.then(
                function (data) {
                    retrieveData();
                },
                function errorCallback(error) {
                    vm.responseMessage = error.data.message;
                    vm.dialogResponse = true;
                    stopAnimation();
                });
            cancelar();
        } // end method guardar


        function remover(tipoEntidad) {
            startAnimation();
            TipoEntidadService.remove(tipoEntidad)
            .$promise.then(
                function (data) {
                    retrieveData();
                },
                function errorCallback(error) {
                    vm.responseMessage = error.data.message;
                    vm.dialogResponse = true;
                    stopAnimation();
                });            
            cancelar();
        } // end function remover

        function seleccionar(tipoEntidad) {
            if (vm.editando === true)
                return;

            if (angular.equals(vm.tipoEntidadSeleccionado, tipoEntidad) )
                vm.tipoEntidadSeleccionado = {};
            else
                vm.tipoEntidadSeleccionado = angular.copy(tipoEntidad);

            vm.tiposDocumentos = mapearTiposDocumentoPermitidos(vm.tiposDocumentos, vm.tipoEntidadSeleccionado)

        } // end function seleccionar

        function mapearTiposDocumentoPermitidos(tiposDocumentos, tipoEntidadSeleccionado) {
            return _.map(tiposDocumentos, function (tipoDocumento) {

                tipoDocumento.valor = false;

                if (isSelected(tipoDocumento, tipoEntidadSeleccionado))
                    tipoDocumento.valor = true;

                return tipoDocumento
            });
        } // end function mapearTiposDocumentosPermitidos


        function isSelected(tipoDocumento, tipoEntidadSeleccionado) {
            if (typeof tipoEntidadSeleccionado === "undefined")
                return false;

            if (tipoEntidadSeleccionado.documentosSoportados )
                for (var i = 0; i < tipoEntidadSeleccionado.documentosSoportados.length; i++) {
                    if (tipoDocumento.id === tipoEntidadSeleccionado.documentosSoportados[i].id)
                        return true;
                } // end for
            return false;
        } // end function isSelected


        function startAnimation() {
            document.getElementById(vm.idLoad).style.visibility = "visible";
            vm.procesando = true;
        }
        function stopAnimation() {
            document.getElementById(vm.idLoad).style.visibility = "hidden";
            vm.procesando = false;
        }

    }
} // end EntidadController
)();
