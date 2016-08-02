
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("asociarDocumentoController", asociarDocumentoController);

    function asociarDocumentoController() {
        var vm = this;
        vm.cerrarDialogo = cerrarDialogo;
        vm.crearDocumento = crearDocumento;

        function cerrarDialogo() {
            vm.show = false;
        }

        function crearDocumento() {//resive 4 parametros id del documento
            //crear documento
            //mientras se crear mostrar mensaje a la view
            //finalizar la creacion y actualizar la vista para la seleccion del doc
        }
                
    } // end controller
})();