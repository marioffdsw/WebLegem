(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller( "WlListaTipoDocHojitasController", WlListaTipoDocHojitasController );

    WlListaTipoDocHojitasController.$inject = [];
    function WlListaTipoDocHojitasController() {
        var vm = this;                       
        vm.ban_lista = false;
                       

        return vm;
    } // end controller
})();