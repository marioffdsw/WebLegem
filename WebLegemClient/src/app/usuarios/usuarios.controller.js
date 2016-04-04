(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("UsuariosController", UsuariosController);

    function UsuariosController() {
        var vm = this;
        vm.tabActivo = tabActivo;
        vm.lastTab;

        function tabActivo($event) {
            var lista = $event.target.classList;

            if (lista.length == 0) {
                $event.target.className = "active_tab";
            }
            if (vm.lastTab) {
                vm.lastTab.className = "";
            }
            else {
                lista.remove("active_tab");
            }

            vm.lastTab = $event.target;

        }

    }
})();