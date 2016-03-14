(function () {
    "use strict";

    angular
        .module("WebLegemApp.Busqueda")
        .controller("BusquedaController", BusquedaController);

    BusquedaController.$inject = ["DocumentosResource", "EntidadService", "TipoDocumentoResource", "searchPattern"];
    function BusquedaController(DocumentosResource, entidadService, TipoDocumentoService, searchPattern) {
        var vm = this;
        vm.palabrasABuscar = searchPattern.words ? searchPattern.words : "";
        vm.anioPublicacion = "";
        vm.numero = "";
        vm.entidadEmisora = "";
        vm.tipoDocumento = "";
        vm.documentosEncontrados = [];
        vm.limpiar = limpiar;
        vm.entidades;
        vm.tiposDocumento;
        vm.cambiarTab = cambiarTab;
        vm.tab_1 = true;
        vm.tab_2 = false;
        vm.reverse = false;
        vm.errorMessage = undefined;

        if(vm.palabrasABuscar){
            buscar( vm.palabrasABuscar );
        }


        vm.buscar = buscar;

        entidadService.query(function (data) {
            vm.entidades = data;
        });

        TipoDocumentoService.query(function (data) {
            vm.tiposDocumento = data;
        });

        function buscar( palabras ) {
            // documentos service get + OData query
            if ( (typeof palabras == "string" && palabras.length > 3) || vm.anioPublicacion || vm.entidadEmisora || vm.tipoDocumento || vm.numero ) {

                var query = { $filter: "" };

                if (vm.anioPublicacion != "")
                    query.$filter += "contains(AnioPublicacion, '" + vm.anioPublicacion + "')";

                if (vm.numero != "")
                    query.$filter += (query.$filter.length > 0 ? " and " : "") +
                        "contains(Numero, '" + vm.numero + "')";

                if (vm.entidadEmisora != "")
                    query.$filter += (query.$filter.length > 0 ? " and " : "") +
                        "contains(toupper(Entidad/Nombre), toupper('" + vm.entidadEmisora + "'))";

                if (vm.tipoDocumento != "")
                    query.$filter += (query.$filter.length > 0 ? " and " : "") +
                        "contains(toupper(TipoDocumento/Nombre), toupper('" + vm.tipoDocumento + "'))";

                if (query.$filter === "")
                    query = {};

                if (palabras != "")
                    query.palabrasABuscar = palabras;

                DocumentosResource.query(query, function (data) {
                    vm.documentosEncontrados = data;
                    vm.errorMessage = undefined;
                    if (vm.documentosEncontrados.length == 0) {
                        vm.errorMessage = "No se encontraron coincidencias para las palabras de busqueda";
                    }
                }, function (response) {
                    console.log( response );
                    if (response.statusText) {
                        vm.errorMessage = response.statusText + "\r\n";
                    }

                });
            }
            else {
                vm.errorMessage = "Por favor, introduce una palabra o frase de mas de 3 letras o marca al menos una de las categorias de busqueda";
            }

        } // fin function buscar

        function borrar_filtro(id) {
//            var li = document.getElementById(id).parentNode;
            console.log("hola");


        };

        function limpiar (){
            vm.anioPublicacion = "";
            vm.documentosEncontrados = [];
            vm.numero = "";
            vm.entidadEmisora = "";
            vm.tipoDocumento = "";
        }

        function cambiarTab(id_tab) {
            if (id_tab == 1) {
                vm.tab_1 = true;
                vm.tab_2 = false;
            }
            else {
                vm.tab_2 = true;
                vm.tab_1 = false;
            }
        }

        return vm;
    } // fin Busqueda Controller
})();
