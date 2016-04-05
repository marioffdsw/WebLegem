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

        retrieveData();        

        function retrieveData() {
            TipoDocumentoResource.query(function (data) {
                vm.tiposDocumentos = data;                
            });
        }

        function checkearObjeto(tipoDocumento) {            

            console.log( vm.documentosSoportados );

            if (isAlreadyChecked(tipoDocumento)) {
                var index = vm.documentosSoportados.indexOf(tipoDocumento);
                vm.documentosSoportados.splice( index, 1 );
            }
            else {
                vm.documentosSoportados.push( tipoDocumento );
            }            
        } // end function

        function isAlreadyChecked(tipoDocumento) {
            for (var i = 0; i < vm.documentosSoportados.length; i++) {
                if (angular.equals(vm.documentosSoportados[i].id, tipoDocumento.id)) {
                    return true;
                }
            } // end for
            return false;                
        } // end function


        return vm;
    } // end controller
})();