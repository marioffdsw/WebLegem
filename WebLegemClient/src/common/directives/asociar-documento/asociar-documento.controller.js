
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("asociarDocumentoController", asociarDocumentoController);
    asociarDocumentoController.$inject=["language"]
    function asociarDocumentoController(language) {
        var vm = this;
        vm.language = language;

        vm.ban_nuevo_doc = false;
        vm.ban_buscar_doc = true;
        vm.ban_mostrar_buscador = true;
        vm.ban_anotacion = false;

        vm.cerrarDialogo = cerrarDialogo;
        vm.crearDocumento = crearDocumento;
        vm.nuevoDocumento =nuevoDocumento;

        function cerrarDialogo() {
            vm.show = false;
        }

        //----------------------------------------------------------------------

        function nuevoDocumento() {
            vm.ban_nuevo_doc = true;
            vm.ban_buscar_doc = false;
        }

        //----------------------------------------------------------------------


        function crearDocumento() {//resive 4 parametros id del documento
            //crear documento
            //mientras se crear mostrar mensaje a la view
            //finalizar la creacion y actualizar la vista para la seleccion del doc
        }
                
    } // end controller
})();