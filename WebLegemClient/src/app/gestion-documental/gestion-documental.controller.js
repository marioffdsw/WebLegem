(function () {
    "use strict";

    angular
        .module("WebLegemApp.GestionDocumental")
        .controller("GestionDocumentalController", GestionDocumentalController);

    GestionDocumentalController.$inject = [ "$state"];
    function GestionDocumentalController( $state ) {
        var vm = this;

        var estadoHome = { nombre: "Home", enlace: "home", limpiarEstados: limpiarEstados }
        vm.estados = [estadoHome];

        function limpiarEstados( posicion ) {
            $state.go( "home" );
        }

    } // end controller
})();