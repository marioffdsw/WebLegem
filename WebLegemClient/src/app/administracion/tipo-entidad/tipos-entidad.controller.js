(function () {
    "use strict";

    angular
        .module("WebLegemApp.Administracion")
        .controller("TipoEntidadController", TipoEntidadController);

    TipoEntidadController.$inject = ["TipoEntidadService", "TipoDocumentoResource"];
    function TipoEntidadController(TipoEntidadService, TipoDocumentoResource) {
        var vm = this;

        /**********************************************************************************
         *
         *   PROPERTIES
         *   
         **********************************************************************************/

        vm.tiposDocumentos = [];
        vm.tiposEntidades = [];
        vm.tipoEntidadSeleccionado = undefined;
        vm.editando = false;




        /**********************************************************************************
         *
         *   PUBLIC METHOD DEFINITION
         *   
         **********************************************************************************/

        vm.remover = remover;
        vm.cancelar = cancelar;
        vm.aceptar = aceptar;




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
            if (vm.tipoEntidadSeleccionado.id == 0) {
                crear(vm.tipoEntidadSeleccionado);
            }
            else {
                guardar(vm.tipoEntidadSeleccionado);
            }
            cancelar();
        }


        function cancelar() {
            vm.editando = false;
            vm.tipoEntidadSeleccionado = undefined;
        }


        function retrieveData() {

            TipoEntidadService.query(function (data) {
                vm.tiposEntidades = data;
            });

            TipoDocumentoResource.query(function (data) {
                vm.tiposDocumentos = data;                
            });
        }


        function crear(tipoEntidad) {
            TipoEntidadService.save(tipoEntidad, function (data) {
                retrieveData();
            });
            cancelar();
        } // end function create       


        function guardar(tipoEntidad) {
            TipoEntidadService.update(tipoEntidad, function (data) {
                for (var i = 0; i < vm.entidades.length; i++) {
                    if (vm.tiposEntidades[i].id == data.id) {
                        vm.tiposEntidades[i] = data;
                        break;
                    }
                }
            });
            cancelar();
        } // end method guardar

        function remover(tipoEntidad) {
            TipoEntidadService.remove(tipoEntidad, function () {
                retrieveData();
            });
            cancelar();
        } // end function remover

    }
} // end EntidadController
)();
