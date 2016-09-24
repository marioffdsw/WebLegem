(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("asociarDocumentoController", asociarDocumentoController);
    asociarDocumentoController.$inject = ["language", "DocumentosResource"]
    function asociarDocumentoController(language, DocumentosResource) {
        var vm = this;
        var url;
        vm.language = language;
        vm.ban_buscar = false;

        vm.cerrarDialogo = cerrarDialogo;
        vm.nuevoDocumento = nuevoDocumento;
        vm.aceptarAnotacion = aceptarAnotacion;
        vm.aceptarProcesando = aceptarProcesando;
        vm.atrasResumen = atrasResumen;//atras del resumen
        vm.seleccionarDocumentoAnotante = seleccionarDocumentoAnotante;

        //metodo del wl-lista-doc-encontrado
        vm.seleccionarDoc = seleccionarDoc;                

        //metodos del wl-buscar-doc
        vm.atrasBuscar = atrasBuscar;
        vm.crearBuscar = crearBuscar;
        vm.buscarBuscar = buscarBuscar;


        // methods lista-documentos
        vm.documentos = [];
        vm.buscarDocumentos = buscarDocumentos;

        //include templates
        vm.vista1 = "common/directives/asociar-documento/template/lista_documentos.html";
        vm.vista2 = "common/directives/asociar-documento/template/form_crear_doc.html";
        vm.vista3 = "common/directives/asociar-documento/template/resumen_crear_anotacion.html";
        vm.vista4 = "common/directives/asociar-documento/template/procesando.html";
        vm.vistas = vm.vista1;

        function cerrarDialogo() {
            vm.show = false;
            vm.vistas = vm.vista1;
        }

        function nuevoDocumento() {           
            vm.vistas = vm.vista2;
        }

        function aceptarAnotacion() {
            //codigo para crear una anotacion;
            vm.vistas = vm.vista4;//mensaje de exito o =(
        }

        function aceptarProcesando() {
            cerrarDialogo();
        }
        
        function seleccionarDoc() {
            vm.vistas = vm.vista3;
            url = vm.vista1;
        }
       
        function atrasResumen() {//atras del resumen
            vm.vistas = url;
        }

        function atrasBuscar() {//atras del wl-buscar-doc
            vm.vistas = vm.vista1;
        }

        function crearBuscar() {//crear del wl-buscar-doc
            vm.vistas = vm.vista3;
            url = vm.vista2;
        }

        function buscarBuscar() {//buscar del wl-buscar-doc
            vm.ban_buscar = true;
        }

        function seleccionarDocumentoAnotante( anotado ) {
            vm.anotado = anotado;
            seleccionarDoc();
        } // end function seleccionarDocumentoAnotante

        function buscarDocumentos(anioPublicacion, entidadEmisoraAux, tipoDocumentoAux, numeroAux) {            
            if (anioPublicacion || entidadEmisoraAux || tipoDocumentoAux || numeroAux) {

                var query = { $filter: "" };

                //if (vm.anioPublicacion != "")
                //    query.$filter += "contains(FechaPublicacion, '" + vm.anioPublicacion + "')";

                if (numeroAux)
                    query.$filter += (query.$filter.length > 0 ? " and " : "") +
                        "contains(Numero, '" + numeroAux + "')";

                if (entidadEmisoraAux)
                    query.$filter += (query.$filter.length > 0 ? " and " : "") +
                        "contains(toupper(Entidad/Nombre), toupper('" + entidadEmisoraAux.nombre + "'))";

                if (tipoDocumentoAux)
                    query.$filter += (query.$filter.length > 0 ? " and " : "") +
                        "contains(toupper(TipoDocumento/Nombre), toupper('" + tipoDocumentoAux.nombre + "'))";

                if (query.$filter === "")
                    query = {};


                DocumentosResource.query(query, function (data) {
                    vm.documentos = data;
                    vm.errorMessage = undefined;
                    if (vm.documentos.length == 0) {
                        vm.errorMessage = "No se encontraron coincidencias para las palabras de busqueda";
                    }
                }, function (response) {
                    if (response.statusText) {
                        vm.errorMessage = response.statusText + "\r\n";
                    }
                });
            }
            else {
                vm.errorMessage = "Por favor, introduce una palabra o frase de mas de 3 letras o marca al menos una de las categorias de busqueda";
            }

        } // end method buscarDocumentos
                
    } // end controller
})();