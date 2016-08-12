(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("WlBuscarDocController", WlBuscarDocController);

    WlBuscarDocController.$inject = [ "EntidadService", "TipoDocumentoResource", "DocumentosResource" ];
    function WlBuscarDocController(EntidadService, TipoDocumentoResource, DocumentosResource) {
        var vm = this;

        vm.atras = atras;
        vm.crear = crear;
        vm.buscar = buscar;

        vm.tipoDocumentoAux;
        vm.numeroAux;
        vm.entidadEmisoraAux;
        vm.anioPublicacion;


        vm.entidades;
        vm.tiposDocumento;        


        retrieveData();

        function atras() {
            vm.atrasCallback();
        }

        function crear() {
            vm.crearCallback();
        }

        function buscar() {
            vm.buscarCallback();
        }

        function retrieveData() {
            EntidadService.query(function (data) {
                vm.entidades = data;               
            });

            TipoDocumentoResource.query(function (data) {
                vm.tiposDocumento = data;                
            });
        } // end function getData

        function buscar() {            
            if ( vm.anioPublicacion || vm.entidadEmisoraAux || vm.tipoDocumentoAux || vm.numeroAux ) {                

                var query = { $filter: "" };

                //if (vm.anioPublicacion != "")
                //    query.$filter += "contains(FechaPublicacion, '" + vm.anioPublicacion + "')";

                if (vm.numeroAux)
                    query.$filter += (query.$filter.length > 0 ? " and " : "") +
                        "contains(Numero, '" + vm.numeroAux + "')";

                if (vm.entidadEmisoraAux)
                    query.$filter += (query.$filter.length > 0 ? " and " : "") +
                        "contains(toupper(Entidad/Nombre), toupper('" + vm.entidadEmisoraAux.nombre + "'))";

                if (vm.tipoDocumentoAux)
                    query.$filter += (query.$filter.length > 0 ? " and " : "") +
                        "contains(toupper(TipoDocumento/Nombre), toupper('" + vm.tipoDocumentoAux.nombre + "'))";

                if (query.$filter === "")
                    query = {};                

                console.log( "buscar" );

                DocumentosResource.query(query, function (data) {
                    vm.documentosEncontrados = data;
                    vm.errorMessage = undefined;
                    if (vm.documentosEncontrados.length == 0) {                        
                        vm.errorMessage = "No se encontraron coincidencias para las palabras de busqueda";
                    }
                    vm.entregarResultadoBusqueda(vm.documentosEncontrados);
                }, function (response) {
                    console.log(response);
                    if (response.statusText) {
                        vm.errorMessage = response.statusText + "\r\n";
                    }
                });
            }
            else {
                vm.errorMessage = "Por favor, introduce una palabra o frase de mas de 3 letras o marca al menos una de las categorias de busqueda";
            }

        } // fin function buscar
        
        return vm;
    }
})();