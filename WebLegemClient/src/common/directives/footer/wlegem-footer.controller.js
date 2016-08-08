
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("WLegemFooterController", WLegemFooterController);

    WLegemFooterController.$inject = ["language"]
    function WLegemFooterController(language) {
        var vm = this;
        vm.language = language;
        return vm;
                
    } // end controller
})();