(function () {
    "use strict";

    angular
        .module("WebLegemApp.Administracion")
        .controller("EntidadController", EntidadController);

    EntidadController.$inject = ["TipoEntidadService", "EntidadService", "language", "stringService"];
    function EntidadController(TipoEntidadService, EntidadService, language, stringService) {
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
        vm.seleccionar = seleccionar;
        vm.dialogResponse = false;
        vm.responseMessage = "";
        vm.idLoad = "wl-lista";
        vm.default = "Seleccione una opción";
        vm.procesando = false;
        vm.error = false;


        /**********************************************************************************
         *
         *   PUBLIC METHOD DEFINITION
         *   
         **********************************************************************************/

        vm.remover = remover;
        vm.cancelar = cancelar;
        vm.aceptar = aceptar;
        vm.nuevo = nuevo;
        vm.actualizar = actualizar;

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
            var x = document.getElementById("tipo");
            var y = x.options[x.selectedIndex];

            if (y.defaultSelected && x.selectedIndex == 0) {
                vm.form_entidad.tipo.$invalid = true;
            }

            if (vm.form_entidad.nombre.$invalid == true || vm.form_entidad.tipo.$invalid == true ||
                vm.form_entidad.correo.$invalid == true) {
                vm.form_entidad.tipo.$invalid ? vm.form_entidad.tipo.$dirty = true : '';
                vm.form_entidad.nombre.$invalid ? vm.form_entidad.nombre.$dirty = true : '';
                vm.form_entidad.correo.$invalid ? vm.form_entidad.correo.$dirty = true : '';
            }
            else {
                if (vm.entidadSeleccionada.id == 0) {
                    crear(vm.entidadSeleccionada);
                }
                else {
                    guardar(vm.entidadSeleccionada);
                }
            }
        }


        function cancelar() {
            actualizar();
            vm.editando = false;
            vm.entidadSeleccionada = undefined;
            vm.form_entidad.$setPristine();
        }

        function retrieveData() {
            startAnimation();
            TipoEntidadService.query()

                .$promise.then(function (data) {
                    stopAnimation();
                    vm.tiposEntidades = data;
                },
                function errorCallback(error) {
                    stopAnimation();
                    vm.error = true;
                });

            EntidadService.query()

                .$promise.then(function (data) {
                    stopAnimation();
                    vm.entidades = data;
                },
                function errorCallback(error) {
                    stopAnimation();
                    vm.error = true;
                });
        }


        function nuevo() {
            vm.entidadSeleccionada = { id: 0, nombre: "", tipoEntidad: {} };
        }


        function crear(entidad) {
            entidad.nombre = stringService.toTitleCase(entidad.nombre);
            EntidadService.save(entidad)
                .$promise.then(
                    function (data) {
                        retrieveData();
                    },
                    function errorCallback(error) {
                        vm.responseMessage = error.data.message;
                        vm.dialogResponse = true;
                        cancelar();
                    },
                    function notifyCallback(error) {
                        cancelar();
                    }
                );
        } // end function create       


        function guardar(entidad) {
            console.log(entidad);
            startAnimation();
            entidad.nombre = stringService.toTitleCase(entidad.nombre);
            EntidadService.update(tipo)
                .$promise.then(
                function (data) {
                    for (var i = 0; i < vm.entidades.length; i++) {
                        if (vm.entidades[i].id == data.id) {
                            vm.entidades[i] = data;
                            break;
                        }
                    }
                    consolo.log(data)
                    cancelar();
                    stopAnimation()
                },
                function errorCallback(error) {
                    vm.responseMessage = error.data.message;
                    vm.dialogResponse = true;
                    cancelar();
                    stopAnimation();
                });
        } // end method guardar

        function remover(entidad) {
            startAnimation();
            EntidadService.remove(entidad)
            .$promise.then(
                function (data) {
                    retrieveData();
                },
                function errorCallback(error) {
                    vm.responseMessage = error.data.message;
                    vm.dialogResponse = true;
                    stopAnimation();
                    cancelar();
                });
        } // end function remover

        function seleccionar(entidadASeleccionar) {
            if (vm.editando === true) {
                return;
            }
            if (vm.entidadSeleccionada && angular.equals(vm.entidadSeleccionada.id, entidadASeleccionar.id)) {
                vm.entidadSeleccionada = undefined;
            }
            else {
                vm.entidadSeleccionada = angular.copy(entidadASeleccionar);
                vm.entidadSeleccionada.tipoEntidad = seleccionarTipoEntidad(vm.entidadSeleccionada, vm.tiposEntidades);
            }
        } // end function seleccionar


        function seleccionarTipoEntidad(entidadSeleccionada, tiposEntidades) {
            return _.find(tiposEntidades, function (te) { return te.id == entidadSeleccionada.tipoEntidad.id });
        } // end method 

        function actualizar() {
            retrieveData();
        }

        //---------------------------------------------------------------------------
        //animaciones carga
        function startAnimation() {
            document.getElementById(vm.idLoad).style.visibility = "visible";
            vm.procesando = true;
        }
        function stopAnimation() {
            document.getElementById(vm.idLoad).style.visibility = "hidden";
            vm.procesando = false;
        }

    } // end entidad controller    
})();
