(function () {
    "use strict";

    angular
        .module("WebLegemApp.Administracion")
        .controller("AdministracionController", AdministracionController);

    AdministracionController.$inject = ["DocumentosResource", "$state"];

    function AdministracionController(DocumentosResource, $state) {
        var vm = this;
        vm.activo = activo;
        vm.$state = $state;

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


        return vm;
    } // fin Administracion Controller
})();