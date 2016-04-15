(function () {
    "use strict";

    angular
        .module("WebLegemApp.Usuarios")
        .controller("controlRolesController", controlRolesController);

    controlRolesController.$inject = ["permisos", "modulos", "RolResource"];
    function controlRolesController( permisos, modulos, RolResource ) {
        var vm = this;

        /**********************************************************************************
         *
         *   PROPERTIES
         *   
         **********************************************************************************/

        vm.roles = [];
        vm.permisos = permisos;
        vm.modulos = modulos;
        vm.rolSeleccionado = undefined;
        vm.editando;




        /**********************************************************************************
         *
         *   PUBLIC METHOD DEFINITION
         *   
         **********************************************************************************/

        vm.remover = remover;
        vm.cancelar = cancelar;
        vm.aceptar = aceptar;
        vm.nuevo = nuevo;




        /**********************************************************************************
         *
         *   DATA RETRIEVING CALLS
         *   
         **********************************************************************************/

        retrieveData();





        /**********************************************************************************
         *
         *   PRIVATE METHODS
         *   
         **********************************************************************************/        
        

        function aceptar() {

            console.log( vm.rolSeleccionado );
            return;

            if (vm.rolSeleccionado.id == 0) {
                crear(vm.rolSeleccionado);
            }
            else {
                guardar( vm.rolSeleccionado );
            }
            cancelar();
        } // end function aceptar


        function cancelar() {
            vm.editando = false;
            vm.rolSeleccionado = undefined;
        } // end function cancelar        


        function retrieveData() {
            RolResource.query(function (data) {
                vm.roles = data;
            });
        } // end function retrieveData


        function nuevo() {
            vm.rolSeleccionado = { id: 0, nombre: "", permisos: [] }
        } // end function nuevo


        function crear() {
            RolResource.save(vm.rolSeleccionado, function (data) {
                retrieveData();
            });

            cancelar;
        } // end method crear


        function guardar( rol ){
            RolResource.update(rol, function (data) {
                for (var i = 0; i < vm.roles.length; i++) {
                    if (vm.roles[i].id === data.id) {
                        vm.roles[i] = data;
                        break;
                    } // end if
                } // end for
            });

            cancelar();
        } // end method guardar


        function remover( rol ) {
            RolResource.remove(rol, function () {
                retrieveData();
            });

            cancelar();
        } // end function remover


        return vm;
    } // end controlRolesController

})();
