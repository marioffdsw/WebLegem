(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("WlBuscarDocController", WlBuscarDocController);

    WlBuscarDocController.$inject = ["EntidadService", "TipoDocumentoResource", "DocumentosResource", "language"];
    function WlBuscarDocController(EntidadService, TipoDocumentoResource, DocumentosResource, language) {
        var vm = this;       
        vm.language = language;
        vm.tipoDocumentoAux;
        vm.numeroAux;
        vm.entidadEmisoraAux;
        vm.anioPublicacion;

        vm.llamarAccion = llamarAccion;


        vm.entidades;
        vm.tiposDocumento;        


        retrieveData();        

        function retrieveData() {
            EntidadService.query(function (data) {
                vm.entidades = data;               
            });

            TipoDocumentoResource.query(function (data) {
                vm.tiposDocumento = data;                
            });
        } // end function getData


        function llamarAccion() {            
            vm.accion( vm.anioPublicacion, vm.entidadEmisoraAux, vm.tipoDocumentoAux, vm.numeroAux );
        }
                
        return vm;
    }
})();