(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller( "WlListaPermisosController", WlListaPermisosController );

    WlListaPermisosController.$inject = [ "modulos" ];
    function WlListaPermisosController( modulos ){
        var vm = this;

        vm.modulos = modulos;

        return vm;
    } // end WlListaPermisosController
})();