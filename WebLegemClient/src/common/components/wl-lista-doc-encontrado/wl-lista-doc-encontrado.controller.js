(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("WlListaDocEncontradoController", WlListaDocEncontradoController);

    WlListaDocEncontradoController.$inject = ["serviceUrl", "language"];
    function WlListaDocEncontradoController(serviceUrl, language) {
        var vm = this;
        vm.serviceUrl = serviceUrl;
        vm.language = language;

        vm.next = next;

        vm.quitarSeleccion = quitarSeleccion;        
        vm.docSeleccionado;
        vm.crearAnotacion = crearAnotacion;
        vm.mostrarVistaPrevia = mostrarVistaPrevia;
        vm.ocultarVistaPrevia = ocultarVistaPrevia;
        vm.isTheSelectedDocument = isTheSelectedDocument;
        vm.llamarAccion = llamarAccion;

        vm.ban_visorPdf = false;
        vm.ban_itemSelected = false;
        vm.ho_ = [];

        function quitarSeleccion() {
            //vm.ban_itemSelected = false;
            //for (var i = 1; i <= 3 ; i++) {
            //    vm.ho_[i] = false;
            //}
        }

        function selectItem(item) {
            vm.seleccionarCallback( item );
        }

        function crearAnotacion() {
            
        }

        function next() {
            vm.nextCallback();
        }

        function mostrarVistaPrevia(docSeleccionado, $event) {
            $event.stopPropagation();
            if (isTheSelectedDocument(docSeleccionado)) {
                
                vm.togglePdf = !vm.togglePdf;
                vm.docSeleccionado = undefined;                
                return;
            }
            vm.docSeleccionado = docSeleccionado;
            vm.togglePdf = true;
        }

        function getPdfUrl() {
            vm.serviceUrl + '/Files/' + vm.docSeleccionado.archivo
        }

        function isTheSelectedDocument(documento) {
            return angular.equals( vm.docSeleccionado, documento );
        }

        function ocultarVistaPrevia( documento, $event ) {
            vm.togglePdf = !vm.togglePdf;            
            vm.docSeleccionado = undefined;
            $event.stopPropagation();
            
        }

        function llamarAccion( documentoAnotante ) {
            vm.accion( documentoAnotante );
        } // end function llamarAccion

        return vm;        
    }
})();