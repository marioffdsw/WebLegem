(function(){
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("CuentaController", CuentaController);

    CuentaController.$inject = [];
    function CuentaController(){
        var vm = this;
        vm.verificado = 1;

        return this;
    } // end controller

})();