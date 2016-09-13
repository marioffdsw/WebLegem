(function () {
    "use strict";

    angular
        .module("WebLegemApp.Anotacion")
        .controller("crearAnotacionController", crearAnotacionController)    
        

    crearAnotacionController.$inject = ["_", "language", "DocumentosResource"];

    function crearAnotacionController(_, language, DocumentosResource ) {
        var vm = this;
        vm.language = language;
        vm.nextStep = nextStep;
        vm.backStep = backStep;
        vm.crearAnotacion = crearAnotacion;
        vm.buscar = buscar;

        vm.documentos;
        vm.seleccionarDocumentoAnotante = seleccionarDocumentoAnotante;
        vm.documentoAnotante;

        vm.ban_exito_anotacion;
        vm.ban_crear_doc = false; //flag para habilitar la creacion de un doc cuando no se encuentra resultados
        vm.ban_crear_ano = false; //flag para habilitar el form de crear anotacion cuando ya se selecciona un documento de la lista

        vm.index = 0;

        vm.pasos = [{ titulo: "paso1" }, { titulo: "paso2" }];
        vm.actual = [{ titulo: "paso1" }];
        vm.idProgreso = "anotacionManual";

        //------------------------------------------------------------------------------------------------------------------

        function crearAnotacion() {
            // TODO llenar metodo anotacion
            vm.ban_exito_anotacion = true;
        }

        //------------------------------------------------------------------------------------------------------------------

        function nextStep() {//siguiente paso
                vm.index = (_.map(vm.pasos, function (num) { return num.titulo; }).indexOf(vm.actual[0].titulo));
                if (vm.index < (vm.pasos.length - 1)) vm.actual[0].titulo = vm.pasos[vm.index + 1].titulo;
                vm.index = (_.map(vm.pasos, function (num) { return num.titulo; }).indexOf(vm.actual[0].titulo));
        }

        //------------------------------------------------------------------------------------------------------------------

        function backStep() {//paso anterior
            vm.index = (_.map(vm.pasos, function (num) { return num.titulo; }).indexOf(vm.actual[0].titulo));
            if (vm.index > 0) vm.actual[0].titulo = vm.pasos[vm.index - 1].titulo;
            vm.index = (_.map(vm.pasos, function (num) { return num.titulo; }).indexOf(vm.actual[0].titulo));
        }

        function seleccionarDocumentoAnotante( documentoAnotante ) {
            vm.documentoAnoatante = documentoAnotante;
            nextStep();
        } // end function seleccionarDocumentoAnotante

        function buscar( anioPublicacion, entidadEmisoraAux, tipoDocumentoAux, numeroAux ) {
            if ( anioPublicacion || entidadEmisoraAux || tipoDocumentoAux || numeroAux) {

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

        } // fin function buscar
        
        return vm;

    } // end crearAnotacionController

})();
