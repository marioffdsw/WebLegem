(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("UsuariosController", UsuariosController);

    UsuariosController.$inject = [ "$state","language" ];
    function UsuariosController($state, language) {
        var vm = this;
        vm.activo = activo;
        vm.tabActivo = tabActivo;
        vm.lastTab;
        vm.language = language;

        vm.$state = $state;

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
        
        
        function activo($event) {
            if ($event.target.className.match(/(?:^|\s)active_tab(?!\S)/)) {
            }
            else {
                var size = $event.target.parentNode.getElementsByTagName('li').length;
                for (var i = 0; i < size;i++){
                    $event.target.parentElement.getElementsByTagName('li')[i].
                        className = " ";
                }
                $event.target.className += ' active_tab';
            }           
        }

    }
})();