(function () {
    "use strict";

    angular
        .module("WebLegemApp.Administracion")
        .controller("EntidadController", EntidadController);

    EntidadController.$inject = [ "TipoEntidadService", "EntidadService" ];
    function EntidadController( TipoEntidadService, EntidadService ) {
        var vm = this;
        vm.tiposEntidad = [];
        vm.entidades = [];
        vm.editando = false;
        vm.crear = crear;
        vm.eliminar = eliminar;
        vm.actualizar = actualizar;
        vm.entidad = { id: 0, nombre: "", tipoEntidad: {} };
        vm.tipoEntidad = { id: 0, nombre: "", documentosSoportados: [] };
        vm.editar = editar;
        vm.cancelar = cancelar;

        vm.log = function () {
            console.log(vm.entidad);
            console.log( vm.entidades );
        };


        TipoEntidadService.query(function (data) {
            vm.tiposEntidad = data;
        });

        EntidadService.query(function (data) {
            vm.entidades = data;
        });

        function crear(entidad) {
            entidad.tipoEntidad = vm.tipoEntidad;
            EntidadService.save(entidad, function (data) {
                EntidadService.query(function (data) {
                    vm.entidades = data;
                });
            });
            cancelar();
        } // fin funcion crear

        function eliminar(entidad) {
            EntidadService.remove(entidad, function () {
                EntidadService.query(function (data) {
                    vm.entidades = data;
                });
            });
            cancelar();
        } // end function remover

        function actualizar(entidad) {
            entidad.tipoEntidad = vm.tipoEntidad;
            EntidadService.update(entidad, function () {
                EntidadService.query(function (data) {
                    vm.entidades = data;
                });
            });
            cancelar();
        } // fin function actualizar                        

        function editar(entidad) {
            vm.entidad = angular.copy(entidad);
            for (var i = 0; i < vm.tiposEntidad.length; i++) {                
                if (vm.tiposEntidad[i]['id'] === entidad.tipoEntidad.id) {
                    vm.tipoEntidad = vm.tiposEntidad[i];
                    break;
                }
            }                        
        } // fin function editar

        function cancelar() {
            vm.entidad = { id: 0, nombre: "", tipoEntidad: {} };
            vm.tipoEntidad = { id: 0, nombre: "", documentosSoportados: [] };
        } // fin function cancelar

        function nuevo() {
            vm.entidad = { id: 0, nombre: "", tipoEntidad: {} };            
        } // fin function nuevo
    } // end EntidadController
})();
