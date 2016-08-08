(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("wlListaRolesController", wlListaRolesController);

    wlListaRolesController.$inject = ["language"];
    function wlListaRolesController(language) {
        var vm = this;                
        vm.language = language;


        return vm;
    } // end wlListaRolesController
})();