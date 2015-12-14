(function () {
    "use strict";

    angular
        .module("WebLegemApp.Administracion")
        .controller("TipoDocumentoController", TipoDocumentoController);

    TipoDocumentoController.$inject = [ "TipoDocumentoResource" ];
    function TipoDocumentoController( TipoDocumentoResource ) {
        var vm = this;

        /*
         * vm properties 
         */

        vm.tipoDoc = { id: 0, nombre: "" };
        vm.tiposDoc = [];
        vm.tipoDocSeleccionado = {}
        vm.editando = false;

        /* 
         * public method definition 
         */

        vm.create = create;
        vm.cancelar = cancelar;
        vm.editar = editar;
        vm.guardar = guardar;
        vm.remover = remover;
        

        /*
         * data retrieving calls 
         */

        TipoDocumentoResource.query(function (data) {
            vm.tiposDoc = data;
        });

        /*
         * public method implementation 
         */

        function create() {
            TipoDocumentoResource.save(vm.tipoDoc, function (data) {
                vm.tiposDoc.push( data );
            });
            cancelar();
        } // end function create

        function cancelar() {            
            vm.editando = false;
            vm.tipoDoc = { id: 0, nombre: "" }
        } // end function cancel

        function editar() {
            vm.tipoDoc = angular.copy( vm.tipoDocSeleccionado );
            vm.editando = true;            
        } // end function editar

        function guardar() {
            TipoDocumentoResource.update(vm.tipoDoc, function (data) {                
                for (var i = 0; i < vm.tiposDoc.length; i++) {
                    if (vm.tiposDoc[i].id == data.id) {                        
                        vm.tiposDoc[i] = data;
                        break;
                    }
                }
            });

            cancelar();
        } // end method guardar   

        function remover() {            
            TipoDocumentoResource.remove(vm.tipoDocSeleccionado, function () {
                TipoDocumentoResource.query(function (data) {
                    vm.tiposDoc = data;
                });
            });
        } // end function remover


        /*
         * private methods
         */

    } // end TipoDocuementoController

})();
