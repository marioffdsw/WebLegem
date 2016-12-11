
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("wlegemResultadoBusquedaController", wlegemResultadoBusquedaController);

    wlegemResultadoBusquedaController.$inject = [ "fileId", "$state","language", "serviceUrl" ];
    function wlegemResultadoBusquedaController( fileId, $state, language, serviceUrl ) {
        var vm = this;
        vm.language = language;
        vm.ver = ver;
        vm.serviceUrl = serviceUrl;

        console.log( vm.arregloDocs );

        function ver( id ) {
            fileId.id = id;
            $state.go( "ver-documento" );
        } // end function ver
                
    } // end controller
})();