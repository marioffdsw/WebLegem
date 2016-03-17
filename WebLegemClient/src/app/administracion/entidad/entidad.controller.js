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
        vm.entidad = { id: 0, nombre: "", tipoEntidad: {} };
        vm.tipoEntidad = { id: 0, nombre: "" };
        vm.nuevaEntidad = false;

        vm.editando = false;
        vm.entidadSeleccionada;
        var elemento;        
        var algo;

        vm.crear = crear;
        vm.eliminar = eliminar;
        vm.actualizar = actualizar;
        vm.entidad = { id: 0, nombre: "", tipoEntidad: {} };
        vm.tipoEntidad = { id: 0, nombre: "", documentosSoportados: [] };
        vm.editar = editar;
        vm.nuevo = nuevo;
        vm.cancelar = cancelar;
        vm.seleccionarEntidad = seleccionarEntidad;        


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
            vm.tipoEntidad = vm.entidad.tipoEntidad;
            vm.editando = true;
        } // fin function editar

        function cancelar() {            
            vm.entidad = { id: 0, nombre: "", tipoEntidad: {} };
            vm.tipoEntidad = { id: 0, nombre: "", documentosSoportados: [] };            
            vm.editando = false;
            vm.nuevaEntidad = false;
            algo.checked = false;
            elemento = null;
        } // fin function cancelar

        function nuevo() {
            vm.entidad = { id: 0, nombre: "", tipoEntidad: {} };
            vm.editando = true;
            vm.nuevaEntidad = true;
        } // fin function nuevo

        function seleccionarEntidad(entidadSeleccionada) {            
            algo = document.getElementById("e_" + entidadSeleccionada.id);
            vm.entidadSeleccionada = entidadSeleccionada;

            if (elemento == algo) { // ya estaba seleccionado                                                                             
                algo.checked = false;
                elemento = null;
                //document.getElementById('remover_td').style.visibility = 'hidden';
                //document.getElementById('editar_td').style.visibility = 'hidden';
                vm.cancelar();
            }
            else { // no estaba seleccionado
                vm.entidad = angular.copy(entidadSeleccionada);
                elemento = algo;
                document.getElementById('remover_td').style.visibility = 'visible';
                document.getElementById('editar_td').style.visibility = 'visible';
            }

            //vm.entidad = angular.copy(entidadSeleccionada);
        }
    } // end EntidadController
})();
