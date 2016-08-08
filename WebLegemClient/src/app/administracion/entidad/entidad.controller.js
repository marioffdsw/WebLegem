(function () {
    "use strict";

    angular
        .module("WebLegemApp.Administracion")
        .controller("EntidadController", EntidadController);

    EntidadController.$inject = [ "TipoEntidadService", "EntidadService","language" ];
    function EntidadController( TipoEntidadService, EntidadService,language ) {
        var vm = this;
        vm.language = language;
        /**********************************************************************************
         *
         *   PROPERTIES
         *   
         **********************************************************************************/
        
        vm.entidades = [];
        vm.tiposEntidades = [];
        vm.entidadSeleccionada = undefined;
        vm.editando = false;




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
            if (vm.entidadSeleccionada.id == 0) {
                crear( vm.entidadSeleccionada );
            }
            else {
                guardar(vm.entidadSeleccionada);
            }
            cancelar();
        }


        function cancelar() {
            vm.editando = false;
            vm.entidadSeleccionada = undefined;
        }


        function retrieveData() {

            TipoEntidadService.query( function( data ){
                vm.tiposEntidades = data;
            });

            EntidadService.query(function (data) {
                vm.entidades = data;                
            });
        }


        function nuevo() {
            vm.entidadSeleccionada = { id: 0, nombre: "", tipoEntidad: {} };
        }


        function crear( entidad ) {
            EntidadService.save(entidad, function (data) {
                retrieveData();
            });
            cancelar();
        } // end function create       


        function guardar(entidad) {
            EntidadService.update(entidad, function (data) {
                for (var i = 0; i < vm.entidades.length; i++) {
                    if (vm.entidades[i].id == data.id) {
                        vm.entidades[i] = data;
                        break;
                    }
                }
            });
            cancelar();
        } // end method guardar

        function remover(entidad) {
            EntidadService.remove(entidad, function () {
                retrieveData();
            });
            cancelar();
        } // end function remover

        }
    } // end EntidadController
)();
