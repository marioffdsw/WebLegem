(function () {
    "use strict";

    angular
        .module("WebLegemApp.Administracion")
        .controller("TipoDocumentoController", TipoDocumentoController);

    TipoDocumentoController.$inject = [ "TipoDocumentoResource" ];
    function TipoDocumentoController( TipoDocumentoResource ) {
        var vm = this;



        /**********************************************************************************
         *
         *   PROPERTIES
         *   
         **********************************************************************************/
        
        vm.tiposDoc = [];
        vm.tipoDocSeleccionado = undefined;
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
            if (vm.tipoDocSeleccionado.id == 0) {
                crear( vm.tipoDocSeleccionado );
            }
            else {
                guardar(vm.tipoDocSeleccionado);
            }
            cancelar();
        }


        function cancelar() {
            vm.editando = false;
            vm.tipoDocSeleccionado = undefined;
        }


        function retrieveData() {
            TipoDocumentoResource.query(function (data) {
                vm.tiposDoc = data;                
            });
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
