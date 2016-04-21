(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller( "WlListaTipoDocHojitasController", WlListaTipoDocHojitasController );

    WlListaTipoDocHojitasController.$inject = ["TipoDocumentoResource"];
    function WlListaTipoDocHojitasController(TipoDocumentoResource) {
        var vm = this;        
        vm.tiposDocumentos = [];        
        //vm.editando = true;
        vm.checkearObjeto = checkearObjeto;
        vm.isAlreadyChecked = isAlreadyChecked;

        retrieveData();        

        function retrieveData() {
            TipoDocumentoResource.query(function (data) {
                vm.tiposDocumentos = data;                
            });
        }

        function checkearObjeto(tipoDocumento) {                       

            if (!vm.editando)
                return;

            if (!vm.documentosSoportados) {
                return;
            }

            if (isAlreadyChecked(tipoDocumento)) {
                var index = getIndex(tipoDocumento);                
                var variable = vm.documentosSoportados.splice(index, 1);                
            } // end if
            else {
                vm.documentosSoportados.push(tipoDocumento);
            } // end else
        } // end function

        function isAlreadyChecked(tipoDocumento) {

            if (!vm.documentosSoportados) {
                return false;
            }

            for (var i = 0; i < vm.documentosSoportados.length; i++) {
                if ( angular.equals(vm.documentosSoportados[i].id, tipoDocumento.id) ) {
                    return true;
                }
            } // end for

            return false;                
        } // end function

        function getIndex(tipoDocumento) {
            for (var i = 0; i < vm.documentosSoportados.length; i++) {
                if(angular.equals(vm.documentosSoportados[i].id, tipoDocumento.id) ){
                    return i;
                } // if
            } // end for
        } // end function getIndex


        return vm;
    } // end controller
})();