(function () {
    "use strict";

    angular
        .module("WebLegemApp.Administracion")
        .controller("TipoEntidadController", TipoEntidadController);

    TipoEntidadController.$inject = ["TipoEntidadService", "TipoDocumentoResource", "$filter"];
    function TipoEntidadController(TipoEntidadService, TipoDocumentoResource, $filter) {
        var vm = this;
        //variables de andres
        var elemento;
        var algo;
        
        //vm.tiposEntidad = [];
        vm.tipoEntSeleccionada = { id: 0, nombre:"", documentosSoportados: [] }
        vm.editando = false;
        //vm.tipoEntidad = { id: 0, nombre: "", documentosSoportados: [] };
        vm.tiposDocumento = [];
        vm.tiposSoportados = []; // arreglo de booleanos
        vm.tiposEntidad;


        vm.create = create;
        vm.cancelar = cancelar;
        vm.editar = editar;
        vm.guardar = guardar;
        vm.remover = remover;
        vm.listadoTipoEntidad = listadoTipoEntidad;
        vm.nuevoFuncion = nuevoFuncion;
        vm.cambiar_vista_lista = cambiar_vista_lista;
        vm.cambiar_vista_bloque = cambiar_vista_bloque;

        

        TipoEntidadService.query(function (data) {
            vm.tiposEntidad = data;
        });

        TipoDocumentoResource.query(function(data) {
            vm.tiposDocumento = data;
            inicializarDocumentosSoportados();
        });

        /*
         * public method implementation 
         */

        function create() {
            vm.tipoEntSeleccionada.id = 0;
            vm.tipoEntSeleccionada.documentosSoportados = [];
            
            for (var i = 0; i < vm.tiposSoportados.length; i++ ){
                if( vm.tiposSoportados[ i ] === true ){            
                    vm.tipoEntSeleccionada.documentosSoportados.push($filter("orderBy")(vm.tiposDocumento, 'nombre')[i]);
                }
            } // end for
           
            TipoEntidadService.save(vm.tipoEntSeleccionada, function (data) {
                TipoEntidadService.query(function (data) {
                    vm.tiposEntidad = data;
                });
            });
            cancelar();
        } // end function create

        function cancelar() {
            vm.editando = false;
            vm.tipoEntSeleccionada = { id:0, nombre:"", documentosSoportados:[] };
            inicializarDocumentosSoportados();
            vm.nuevo = false;
            algo.checked = false;
            algo = undefined;
            elemento = null;
            
            //vm.tipoEntidad = { id: 0, nombre: "" }
            
        } // end function cancel

        function editar() {
            vm.tipoEntidad = angular.copy(vm.tipoEntSeleccionada);
            vm.editando = true;            
        } // end function editar

        function guardar() {
            TipoEntidadService.update(vm.tipoEntSeleccionada, function (data) {
                TipoEntidadService.query(function ( data ) {
                    vm.tiposEntidad = data;
                });
            });

            cancelar();
        } // end method guardar   

        function nuevoFuncion() {            
            vm.tipoEntSeleccionada = { id: 0, nombre: "", documentosSoportados: [] };
            vm.editando = true;
            vm.nuevo = true;
            console.log(vm.tiposSoportados);
            checkearDocumentosSoportados();
        }

        function remover() {
            TipoEntidadService.remove(vm.tipoEntSeleccionada, function () {
                TipoEntidadService.query(function (data) {
                    vm.tiposEntidad = data;
                });
                cancelar();
            });        
        } // end function remover

        function listadoTipoEntidad(tipoEntidad) {
            vm.tipoEntSeleccionada = angular.copy( tipoEntidad );
            algo = document.getElementById(tipoEntidad.id);

            if (elemento == algo) {
                algo.checked = false;
                elemento = null;
                document.getElementById('remover_te').style.visibility = 'hidden';
                document.getElementById('editar_te').style.visibility = 'hidden';
                inicializarDocumentosSoportados();
                vm.tipoEntSeleccionada = { id:0, nombre:"", documentosSoportados:[] };
            }
            else {
                elemento = algo;
                checkearDocumentosSoportados(vm.tipoEntSeleccionada.documentosSoportados);
                document.getElementById('remover_te').style.visibility = 'visible';
                document.getElementById('editar_te').style.visibility = 'visible';
            }            
            
        }

        function cambiar_vista_lista() {
            var aux = document.getElementsByClassName("te_li_lista");

            for (var i = 0; i < aux.length; i++) {
                var padre = aux[i].parentElement;
                var hijo = aux[i].lastElementChild;
                var hijo2 = aux[i].firstElementChild;

                padre.className = "a_listado";
                hijo.className = "styled";
                hijo2.className = "styled";
                padre.parentElement.style.justifyContent = "center";
            }            
        }

        function cambiar_vista_bloque() {
            var aux = document.getElementsByClassName("te_li_lista");

            for (var i = 0; i < aux.length; i++) {
                var padre = aux[i].parentElement;
                var hijo = aux[i].lastElementChild;
                var hijo2 = aux[i].firstElementChild;

                padre.className = "a_bloques";
                hijo.className = "styled1 note rounded";
                hijo2.className = "";
                padre.parentElement.style.justifyContent = "flex-start";
            }
        }

        /*
         * private methods
         */
        

        function inicializarDocumentosSoportados() {            
            for (var i = 0; i < vm.tiposDocumento.length; i++) {
                vm.tiposSoportados[i] = false;
            }
        } // fin funcition inicializarDocumentosSoportados

        function checkearDocumentosSoportados(documentosACheckear) {
            inicializarDocumentosSoportados();
            var test = $filter('orderBy')(vm.tiposDocumento, "nombre");
            for (var i = 0; i < test.length; i++) {
                for (var j = 0; j < documentosACheckear.length; j++ ){
                    if (test[i].id == documentosACheckear[j].id) {
                        vm.tiposSoportados[i] = true;
                    }                    
                }
            } // fin for
        } // fin function checkearDocumentosSoportados
       
    } // end TipoEntidadController

})();
