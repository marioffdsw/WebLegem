(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("TipoAnotacionController", TipoAnotacionController);

    TipoAnotacionController.$inject = [ "TipoAnotacionResource" ];
    function TipoAnotacionController( TipoAnotacionResource ) {
        var vm = this;

        TipoAnotacionResource.query(function (data) {
            vm.tiposAnotaciones = data;
        });
    } // end TipoAnotacion Controller
})();