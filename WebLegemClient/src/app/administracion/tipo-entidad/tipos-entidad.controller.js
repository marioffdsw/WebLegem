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
        vm.tipoEntidadSeleccionado = undefined;
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


        function cancelar() {
            vm.editando = false;
            vm.tipoEntidadSeleccionado = undefined;
            vm.tiposDocumentos = mapearTiposDocumentoPermitidos( vm.tiposDocumentos, vm.tipoEntidadSeleccionado );
        }


        function retrieveData() {

            TipoEntidadService.query(function (data) {
                vm.tiposEntidades = data;
            });

            TipoDocumentoResource.query(function (data) {
                vm.tiposDocumentos = mapearTiposDocumentoPermitidos(data, vm.tipoEntidadSeleccionado);                
            });
        }        


        function nuevo() {
            vm.tipoEntidadSeleccionado = { id: 0, nombre: "", documentosSoportados: [] };
        }


        function crear(tipoEntidad) {            
            TipoEntidadService.save(tipoEntidad, function (data) {
                retrieveData();
            });

            cancelar();
        } // end function create       


        function guardar(tipoEntidad) {            
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

        function seleccionar(tipoEntidad) {
            if (vm.editando === true)
                return;

            if (angular.equals(vm.tipoEntidadSeleccionado, tipoEntidad) )
                vm.tipoEntidadSeleccionado = undefined;                           
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

            for (var i = 0; i < tipoEntidadSeleccionado.documentosSoportados.length; i++) {
                if (tipoDocumento.id === tipoEntidadSeleccionado.documentosSoportados[i].id)
                    return true;
            } // end for
            return false;
        } // end function isSelected

    }
} // end EntidadController
)();
