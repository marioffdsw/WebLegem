(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("VerDocumentoController", VerDocumentoController);

    VerDocumentoController.$inject = [ "fileId","language", "serviceUrl" ];
    function VerDocumentoController( fileId, language, serviceUrl ) {
        var vm = this;
        vm.language = language;
        console.log( fileId );

        vm.id = serviceUrl + "/Files/" + fileId.id;

        console.log( vm.id );
        return vm;
    }
})();