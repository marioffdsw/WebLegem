
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("wlegemResultadoBusquedaController", wlegemResultadoBusquedaController);

    function wlegemResultadoBusquedaController() {
        var vm = this;
        
        console.log( vm.predicate );
    } // end
})();