(function () {
    "use strict";

    angular
        .module("WebLegemApp.Usuarios")
        .controller("controlRolesController", controlRolesController);

    controlRolesController.$inject = ["RolResource", "PermisosService", "_", "language"];
    function controlRolesController(RolResource, PermisosService, _, language) {
        var vm = this;
        vm.language = language;
        /**********************************************************************************
         *
         *   PROPERTIES
         *   
         **********************************************************************************/

        vm.roles = [];
        vm.permisos = [];
        vm.rolSeleccionado = undefined;
        vm.editando = false;
        vm.seleccionar = seleccionar;




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

            if (vm.form_rol.nombre.$invalid) {

                vm.form_rol.nombre.$invalid ? vm.form_rol.nombre.$dirty = true : '';
                
            }
            else {

                var rol = angular.copy(vm.rolSeleccionado);

                rol.permisos = _.chain(vm.permisos)
                    .filter(function (item) { return item.valor; })
                    .map(function (item) { delete item.valor; return item; })
                    .value();

                rol.id == 0 ? crear(rol) : guardar(rol);

                cancelar();
            }


        } // end function aceptar


        function cancelar() {
            vm.editando = false;
            vm.rolSeleccionado = undefined;
            vm.permisos = mapearPermisosAsignados(vm.permisos, vm.rolSeleccionado);
            vm.form_rol.$setPristine();
        } // end function cancelar        


        function retrieveData() {
            RolResource.query(function (data) {
                vm.roles = data;
                console.log( data );
            });


            PermisosService.query(function (data) {
                vm.permisos = mapearPermisosAsignados(data, vm.rolSeleccionado);                
            });
        } // end function retrieveData


        function nuevo() {
            vm.rolSeleccionado = { id: 0, nombre: "", permisos: [] }
        } // end function nuevo


        function crear( rol ) {
            RolResource.save(rol, function (data) {
                retrieveData();
            });

            cancelar;
        } // end method crear


        function guardar( rol ){
            RolResource.update(rol, function (data) {
                retrieveData();
            });

            cancelar();
        } // end method guardar


        function remover( rol ) {
            RolResource.remove(rol, function () {
                retrieveData();
            });

            cancelar();
        } // end function remover

        function seleccionar(rol) {
            if (vm.editando === true) return;

            angular.equals(vm.rolSeleccionado, rol) ?
                vm.rolSeleccionado = undefined :
                vm.rolSeleccionado = angular.copy(rol);

            vm.permisos = mapearPermisosAsignados(vm.permisos, vm.rolSeleccionado);            
        } // end function seleccionar

        function mapearPermisosAsignados( permisos, rol ) {
            return _.map(permisos, function (permiso) {
                permiso.valor = false;

                if (isSelected(permiso, rol))
                    permiso.valor = true;

                return permiso;
            });
        } // end function mapearPermisosAsignados

        function isSelected( permiso, rol ) {
            if (typeof rol === "undefined") return false;

            for (var i = 0; i < rol.permisosAsignados.length; i++)
                if (permiso.id === rol.permisosAsignados[i].id) return true;

            return false;
        } // end function isSelected


        return vm;
    } // end controlRolesController

})();
