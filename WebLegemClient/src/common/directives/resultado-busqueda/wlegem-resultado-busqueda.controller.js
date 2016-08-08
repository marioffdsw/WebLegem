
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("wlegemResultadoBusquedaController", wlegemResultadoBusquedaController);

    wlegemResultadoBusquedaController.$inject = [ "fileId", "$state","language" ];
    function wlegemResultadoBusquedaController( fileId, $state, language ) {
        var vm = this;
        vm.language = language;
        vm.ver = ver;

        console.log( vm.arregloDocs );

        function ver( id ) {
            fileId.id = id;
            $state.go( "ver-documento" );
        } // end function ver
                
    } // end controller
})();