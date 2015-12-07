(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("DocumentoController", DocumentoController);

    DocumentoController.$inject = [ "TipoDocumentoResource", "EntidadService" ];
    function DocumentoController( TipoDocumentoService, EntidadService ) {
        var vm = this;
        vm.documento = { tipoDocumento: {}, entidad: {} }

        TipoDocumentoService.query(function(data){
            vm.tiposDocumento = data;
        });

        EntidadService.query(function (data) {
            vm.entidades = data;
        });

    } // end Documento Controller
})();