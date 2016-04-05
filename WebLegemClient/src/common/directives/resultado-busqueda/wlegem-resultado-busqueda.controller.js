
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("wlegemResultadoBusquedaController", wlegemResultadoBusquedaController);

    wlegemResultadoBusquedaController.$inject = [ "fileId", "$state" ];
    function wlegemResultadoBusquedaController( fileId, $state ) {
        var vm = this;

        vm.ver = ver;

        console.log( vm.arregloDocs );

        function ver( id ) {
            fileId.id = id;
            $state.go( "ver-documento" );
        } // end function ver
                
    } // end controller
})();