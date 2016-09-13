(function () {
    "use strict";

    angular
        .module("WebLegemApp.Administracion")
        .controller("TipoDocumentoController", TipoDocumentoController);

    TipoDocumentoController.$inject = ["TipoDocumentoResource", "language"];
    function TipoDocumentoController(TipoDocumentoResource, language) {
        var vm = this;
        vm.language = language;
        /**********************************************************************************
        PROPERTIES
        **********************************************************************************/
        
        vm.tiposDoc = [];
        vm.tipoDocSeleccionado = undefined;
        vm.editando = false;
       
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
            if (vm.tipoDocSeleccionado.id == 0)
                crear(vm.tipoDocSeleccionado);
            else
                guardar(vm.tipoDocSeleccionado);           
            cancelar();            
        }


        function cancelar() {
            vm.editando = false;
            vm.tipoDocSeleccionado = undefined;
            vm.form_tipo_doc.$setPristine();            
        }


        function retrieveData() {
            TipoDocumentoResource.query(function (data) {
                vm.tiposDoc = data;                
            });
        }

        function nuevo() {
            vm.tipoDocSeleccionado = { id: 0, nombre: "" }
        }


        function crear() {

            TipoDocumentoResource.save(vm.tipoDocSeleccionado, function (data) {
                retrieveData();
            });
            cancelar();
        } // end function create       


        function guardar(tipo) {
            TipoDocumentoResource.update(tipo, function (data) {
                for (var i = 0; i < vm.tiposDoc.length; i++) {
                    if (vm.tiposDoc[i].id == data.id) {
                        vm.tiposDoc[i] = data;
                        break;
                    }
                }
            });
            cancelar();
        } // end method guardar

        function remover(tipo) {
            TipoDocumentoResource.remove(tipo, function () {
                retrieveData();
            });

            cancelar();
        } // end function remover

    } // end TipoDocuementoController
})();
