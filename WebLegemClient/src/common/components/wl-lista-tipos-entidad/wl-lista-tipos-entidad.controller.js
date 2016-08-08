(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("WlListaTiposEntidadesController", WlListaTiposEntidadesController);

    WlListaTiposEntidadesController.$inject = ["language"];
    function WlListaTiposEntidadesController(language) {
        var vm = this;                              
        vm.language = language;
        return vm;
    } // end controller
})();