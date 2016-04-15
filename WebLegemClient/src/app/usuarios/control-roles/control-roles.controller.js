(function () {
    "use strict";

    angular
        .module("WebLegemApp.Usuarios")
        .controller("controlRolesController", controlRolesController);

    controlRolesController.$inject = ["permisos", "modulos", "RolResource"];
    function controlRolesController( permisos, modulos, RolResource ) {
        var vm = this;
        
        vm.modulos = modulos;
        vm.permisos = permisos;

        vm.roles;

        RolResource.query(function (data) {
            vm.roles = data;
            console.log( vm.roles );
        });
        


        return vm;
    } // end TipoEntidadController

})();
