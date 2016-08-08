(function(){
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("CuentaController", CuentaController);

    CuentaController.$inject = ["language"];
    function CuentaController(language) {
        var vm = this;
        vm.language = language;
        vm.verificado = 1;

        return this;
    } // end controller

})();