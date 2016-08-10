(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("asociarDocumentoController", asociarDocumentoController);
    asociarDocumentoController.$inject=["language"]
    function asociarDocumentoController(language) {
        var vm = this;
        var url;
        vm.language = language;
        vm.ban_buscar = false;

        vm.cerrarDialogo = cerrarDialogo;
        vm.nuevoDocumento = nuevoDocumento;
        vm.aceptarAnotacion = aceptarAnotacion;
        vm.aceptarProcesando = aceptarProcesando;
        vm.atrasResumen = atrasResumen;//atras del resumen

        //metodo del wl-lista-doc-encontrado
        vm.seleccionarDoc = seleccionarDoc;

        //metodos del wl-buscar-doc
        vm.atrasBuscar = atrasBuscar;
        vm.crearBuscar = crearBuscar;
        vm.buscarBuscar = buscarBuscar;

        //include templates
        vm.vista1 = "common/directives/asociar-documento/template/lista_documentos.html";
        vm.vista2 = "common/directives/asociar-documento/template/form_crear_doc.html";
        vm.vista3 = "common/directives/asociar-documento/template/resumen_crear_anotacion.html";
        vm.vista4 = "common/directives/asociar-documento/template/procesando.html";
        vm.vistas = vm.vista1;

        //----------------------------------------------------------------------
        function cerrarDialogo() {
            vm.show = false;
        }
        //----------------------------------------------------------------------
        function nuevoDocumento() {
            vm.vistas = vm.vista2;
        }
        //----------------------------------------------------------------------
        function aceptarAnotacion() {
            //codigo para crear una anotacion;
            vm.vistas = vm.vista4;//mensaje de exito o =(
        }
        //----------------------------------------------------------------------
        function aceptarProcesando() {
            cerrarDialogo();
        }


        //----------------------------------------------------------------------
        function seleccionarDoc() {
            vm.vistas = vm.vista3;
            url = vm.vista1;
        }


        //----------------------------------------------------------------------
        function atrasResumen() {//atras del resumen
            vm.vistas = url;
        }
        //----------------------------------------------------------------------
        function atrasBuscar() {//atras del wl-buscar-doc
            vm.vistas = vm.vista1;
        }
        //----------------------------------------------------------------------
        function crearBuscar() {//crear del wl-buscar-doc
            vm.vistas = vm.vista3;
            url = vm.vista2;
        }
        //----------------------------------------------------------------------
        function buscarBuscar() {//buscar del wl-buscar-doc
            vm.ban_buscar = true;
        }
        //----------------------------------------------------------------------
                
    } // end controller
})();