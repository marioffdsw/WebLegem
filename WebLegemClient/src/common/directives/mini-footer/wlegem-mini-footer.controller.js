
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("miniFooterController", miniFooterController);

    miniFooterController.$inject = ["language"]
    function miniFooterController(language) {
        var vm = this;
        vm.language = language;
        return vm;
    } // end controller
})();