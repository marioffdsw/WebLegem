﻿(function () {
    "use strict";

    angular
        .module("WebLegemApp.Administracion")
        .controller("TipoDocumentoController", TipoDocumentoController);

    TipoDocumentoController.$inject = [ "TipoDocumentoResource" ];
    function TipoDocumentoController( TipoDocumentoResource ) {
        var vm = this;
        var elemento;

        /*
         * vm properties 
         */

        vm.tipoDoc = { id: 0, nombre: "" };
        vm.tiposDoc = [];
        vm.tipoDocSeleccionado = {}
        vm.editando = false;

        /* 
         * public method definition 
         */

        vm.nuevo = nuevo;
        vm.create = create;
        vm.cancelar = cancelar;
        vm.editar = editar;
        vm.guardar = guardar;
        vm.remover = remover;
        vm.listadoTipoDocumento = listadoTipoDocumento;
        

        /*
         * data retrieving calls 
         */

        TipoDocumentoResource.query(function (data) {
            vm.tiposDoc = data;
        });

        /*
         * public method implementation 
         */

        function nuevo() {
            vm.tipoDoc = { id: 0, nombre: "" };
            vm.tipoDocSeleccionado = {};
            vm.editando = true;
        } // fin function nuevo

        function create() {
            TipoDocumentoResource.save(vm.tipoDoc, function (data) {
                TipoDocumentoResource.query(function (data) {
                    vm.tiposDoc = data;
                });
            });
            cancelar();
        } // end function create

        function cancelar() {            
            vm.editando = false;
            vm.tipoDoc = { id: 0, nombre: "" };
            var algo = document.getElementById(vm.tipoDocSeleccionado.id);
            algo.checked = false;
            elemento = null;
            document.getElementById('remover_td').style.visibility = 'hidden';
            document.getElementById('editar_td').style.visibility = 'hidden';
        } // end function cancel

        function editar() {
            vm.tipoDoc = angular.copy(vm.tipoDocSeleccionado);
            console.log( vm.tipoDoc );
            vm.editando = true;            
        } // end function editar

        function guardar() {            
            TipoDocumentoResource.update(vm.tipoDoc, function (data) {                
                for (var i = 0; i < vm.tiposDoc.length; i++) {
                    if (vm.tiposDoc[i].id == data.id) {                        
                        vm.tiposDoc[i] = data;
                        break;
                    }
                }
            });

            cancelar();
        } // end method guardar

        function remover() {
            console.log(vm.tipoDocSeleccionado);
            TipoDocumentoResource.remove(vm.tipoDocSeleccionado, function () {                
                TipoDocumentoResource.query(function (data) {
                    vm.tiposDoc = data;
                });
            });
        } // end function remover

        function listadoTipoDocumento(tipoDocSeleccionado) {
            var algo = document.getElementById(tipoDocSeleccionado.id);
            vm.tipoDocSeleccionado = tipoDocSeleccionado
            if (elemento == algo) {
                vm.tipoDoc = angular.copy(tipoDocSeleccionado);
                algo.checked = false;
                elemento = null;
                document.getElementById('remover_td').style.visibility = 'hidden';
                document.getElementById('editar_td').style.visibility = 'hidden';
            }
            else {
                vm.tipoDoc = { id: 0, nombre: "" };
                elemento = algo;
                document.getElementById('remover_td').style.visibility = 'visible';
                document.getElementById('editar_td').style.visibility = 'visible';
            }

            vm.tipoDoc = angular.copy(tipoDocSeleccionado);
        }

        /*
         * private methods
         */

    } // end TipoDocuementoController

})();
