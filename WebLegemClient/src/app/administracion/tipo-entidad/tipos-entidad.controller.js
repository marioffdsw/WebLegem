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
            console.log( "aceptar" );
            if (vm.tipoEntidadSeleccionado.id == 0) {
                crear(vm.tipoEntidadSeleccionado);
            }
            else {
                guardar(vm.tipoEntidadSeleccionado);
            }            
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


        function nuevo() {
            vm.tipoEntidadSeleccionado = { id: 0, nombre: "", documentosSoportados: [] };
        }


        function crear(tipoEntidad) {
            console.log( "crear" );
            TipoEntidadService.save(tipoEntidad, function (data) {
                retrieveData();
            });
            cancelar();
        } // end function create       


        function guardar(tipoEntidad) {
            console.log( "guardar" );
            TipoEntidadService.update(tipoEntidad, function (data) {
                retrieveData();
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
