(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("VerDocumentoController", VerDocumentoController);

    VerDocumentoController.$inject = [ "fileId","language", "serviceUrl", "$stateParams" ];
    function VerDocumentoController( fileId, language, serviceUrl, $stateParams ) {
        var vm = this;
        vm.language = language;
        console.log( $stateParams );
        vm.id = serviceUrl + "/Files/" + $stateParams.id;
        return vm;
    }
})();