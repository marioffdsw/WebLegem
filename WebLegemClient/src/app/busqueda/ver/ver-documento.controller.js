(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("VerDocumentoController", VerDocumentoController);

    VerDocumentoController.$inject = [ "fileId","language" ];
    function VerDocumentoController( fileId,language ) {
        var vm = this;
        vm.language = language;
        console.log( fileId );

        vm.id =  "http://localhost:50555/api/Files/" + fileId.id;

        console.log( vm.id );
        return vm;
    }
})();