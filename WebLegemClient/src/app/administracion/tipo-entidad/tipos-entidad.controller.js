(function () {
    "use strict";

    angular
        .module("WebLegemApp.Administracion")
        .controller("TipoEntidadController", TipoEntidadController);

    TipoEntidadController.$inject = [ "TipoEntidadService" ];
    function TipoEntidadController( TipoEntidadService ) {
        var vm = this;
        //variables de andres
        var elemento;
        
        //vm.tiposEntidad = [];
        vm.tipoEntSeleccionada = {}
        vm.editando = false;
        vm.tipoEntidad = { id: 0, nombre: "", tipo: "" };


        vm.create = create;
        vm.cancelar = cancelar;
        vm.editar = editar;
        vm.guardar = guardar;
        vm.remover = remover;
        vm.listadoTipoEntidad = listadoTipoEntidad;
        vm.cambiar_vista_lista = cambiar_vista_lista;
        vm.cambiar_vista_bloque = cambiar_vista_bloque;

        

        TipoEntidadService.query(function (data) {
            vm.tiposEntidad = data;
        });

        /*
         * public method implementation 
         */

        function create() {
            TipoEntidadService.save(vm.tipoEntidad, function (data) {
                TipoEntidadService.query(function (data) {
                    vm.tiposEntidad = data;
                });
            });
            cancelar();
        } // end function create

        function cancelar() {
            vm.editando = false;
            vm.tipoEntidad = { id: 0, nombre: "" }
        } // end function cancel

        function editar() {
            vm.tipoEntidad = angular.copy(vm.tipoEntSeleccionada);
            vm.editando = true;
        } // end function editar

        function guardar() {
            TipoEntidadService.update(vm.tipoEntidad, function (data) {
                for (var i = 0; i < vm.tiposEntidad.length; i++) {
                    if (vm.tiposEntidad[i].id == data.id) {
                        vm.tiposEntidad[i] = data;
                        break;
                    }
                }
            });

            cancelar();
        } // end method guardar   

        function remover() {
            TipoEntidadService.remove(vm.tipoEntSeleccionada, function () {
                TipoEntidadService.query(function (data) {
                    vm.tiposEntidad = data;
                });
            });        
        } // end function remover

        function listadoTipoEntidad(tipoEntidad) {
            vm.tipoEntSeleccionada = angular.copy( tipoEntidad );
            var algo = document.getElementById(tipoEntidad.id);

            if (elemento == algo) {
                algo.checked = false;
                elemento = null;
                document.getElementById('remover_te').style.visibility = 'hidden';
                document.getElementById('editar_te').style.visibility = 'hidden';
            }
            else {
                elemento = algo;
                document.getElementById('remover_te').style.visibility = 'visible';
                document.getElementById('editar_te').style.visibility = 'visible';
            }       
        }

        function cambiar_vista_lista() {
            var aux = document.getElementById("te_li_lista");
            var padre = aux.parentElement;
            var hijo = aux.lastElementChild;
            var hijo2 = aux.firstElementChild;

            padre.className = "a_listado";
            hijo.className = "styled";
            hijo2.className = "styled";
            padre.parentElement.style.justifyContent = "center";
        }

        function cambiar_vista_bloque() {
            var aux = document.getElementById("te_li_lista");
            var padre = aux.parentElement;
            var hijo = aux.lastElementChild;
            var hijo2 = aux.firstElementChild;

            padre.className = "a_bloques";
            hijo.className = "styled1 note rounded";
            hijo2.className = " ";
            padre.parentElement.style.justifyContent = "flex-start";
        }

        /*
         * private methods
         */
       
    } // end TipoEntidadController

})();
