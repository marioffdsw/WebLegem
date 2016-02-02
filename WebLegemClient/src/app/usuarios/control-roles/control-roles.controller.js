(function () {
    "use strict";

    angular
        .module("WebLegemApp.Usuarios")
        .controller("controlRolesController", controlRolesController);

    controlRolesController.$inject = ["RolResource", "RecursoService", "_", "language", "stringService"];
    function controlRolesController(RolResource, RecursoService, _, language, stringService) {
        var vm = this;
        vm.language = language;
        /**********************************************************************************
         *
         *   PROPERTIES
         *   
         **********************************************************************************/

        vm.roles = [];
        vm.recursos = [];
        vm.rolSeleccionado = undefined;
        vm.editando = false;
        vm.seleccionar = seleccionar;
        vm.dialogResponse = false;
        vm.responseMessage = "";
        vm.default = "Seleccione una opción";
        vm.procesando = false;
        vm.error = false;
        vm.idLoad = "wl-lista";

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
                rol.permisosAsignados = _.chain(vm.recursos)
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
            vm.recursos = mapearPermisosAsignados(vm.recursos, vm.rolSeleccionado);
            vm.form_rol.$setPristine();
        } // end function cancelar        


        function retrieveData() {
            startAnimation();

            RolResource.query()
                .$promise.then(function (data) {
                    stopAnimation();
                    vm.roles = data;
                },
                function errorCallback(error) {
                    stopAnimation();
                    vm.error = true;
                }
            );

            startAnimation();
            RecursoService.query()
                .$promise.then(function (data) {
                    stopAnimation();
                    vm.recursos = mapearPermisosAsignados(data, vm.rolSeleccionado);
                },
                function errorCallback(error) {
                    stopAnimation();
                    vm.error = true;
                }
            );
        } // end function retrieveData


        function nuevo() {
            vm.rolSeleccionado = { id: 0, nombre: "", permisos: [] }
        } // end function nuevo


        function crear(rol) {
            startAnimation();
            rol.nombre = stringService.toTitleCase(rol.nombre);

            RolResource.save(rol)
                .$promise.then(
                    function (data) {
                        retrieveData();
                        stopAnimation();
                    },
                    function errorCallback(error) {
                        vm.responseMessage = error.data.message;
                        vm.dialogResponse = true;
                        stopAnimation();
                    }
                );
            cancelar();
        } // end method crear


        function guardar(rol) {
            startAnimation();
            rol.nombre = stringService.toTitleCase(rol.nombre);
            RolResource.update(rol)
                .$promise.then(
                    function (data) {
                        stopAnimation();
                        retrieveData();
                    },
                    function errorCallback(error) {
                        stopAnimation();
                        vm.responseMessage = error.data.message;
                        vm.dialogResponse = true;                        
                    }
                );

            cancelar();
        } // end method guardar


        function remover(rol) {
            startAnimation();

            RolResource.remove(rol)
                .$promise.then(
                function (data) {
                    stopAnimation();
                    retrieveData();
                },
                function errorCallback(error) {
                    stopAnimation();
                    vm.responseMessage = error.data.message;
                    vm.dialogResponse = true;                    
                }
                );

            cancelar();
        } // end function remover

        function seleccionar(rol) {
            if (vm.editando === true) return;

            angular.equals(vm.rolSeleccionado, rol) ?
                vm.rolSeleccionado = undefined :
                vm.rolSeleccionado = angular.copy(rol);

            vm.recursos = mapearPermisosAsignados(vm.recursos, vm.rolSeleccionado);
        } // end function seleccionar

        function mapearPermisosAsignados(recursos, rol) {
            return _.map(recursos, function (recurso) {
                recurso.valor = isSelected(recurso, rol);
                return recurso;
            });
        } // end function mapearPermisosAsignados

        function isSelected(recurso, rol) {
            if (typeof rol === "undefined") return false;

            for (var i = 0; i < rol.permisosAsignados.length; i++)
                if (recurso.id === rol.permisosAsignados[i].id) return true;

            return false;
        } // end function isSelected


        //---------------------------------------------------------------------------------
        function startAnimation() {
            document.getElementById(vm.idLoad).style.visibility = "visible";
            vm.procesando = true;
        }
        function stopAnimation() {
            document.getElementById(vm.idLoad).style.visibility = "hidden";
            vm.procesando = false;
        }

        return vm;
    } // end controlRolesController

})();
