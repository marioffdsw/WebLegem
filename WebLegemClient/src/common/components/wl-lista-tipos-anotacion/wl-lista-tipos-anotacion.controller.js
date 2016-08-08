(function () {
    'use strict';

    angular
      .module('WebLegemApp')
      .controller('WlListaTiposAnotacionController', WlListaTiposAnotacionController );

    WlListaTiposAnotacionController.$inject = ["language"];
    function WlListaTiposAnotacionController(language) {
        var vm = this;
        vm.language = language;
        return vm;
    } // end controller
})();
