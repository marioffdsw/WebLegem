(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller( "WlListaPermisosController", WlListaPermisosController );

    WlListaPermisosController.$inject = [ "modulos","language" ];
    function WlListaPermisosController( modulos ,language){
        var vm = this;
        vm.language = language;        

        return vm;
    } // end WlListaPermisosController
})();