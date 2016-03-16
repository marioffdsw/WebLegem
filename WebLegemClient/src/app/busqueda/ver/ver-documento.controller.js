(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("VerDocumentoController", VerDocumentoController);

    VerDocumentoController.$inject = [ "fileId" ];
    function VerDocumentoController( fileId ) {
        var vm = this;
        console.log( fileId );

        vm.id =  "http://localhost:50555/api/Files/" + fileId.id;

        console.log( vm.id );
        return vm;
    }
})();