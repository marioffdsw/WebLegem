(function () {
    "use strict";

    angular
        .module("WebLegemApp.Busqueda")
        .controller("BusquedaController", BusquedaController);

    BusquedaController.$inject = ["DocumentosResource", "EntidadService", "TipoDocumentoResource", "searchPattern", "fileId", "$state"];
    function BusquedaController(DocumentosResource, entidadService, TipoDocumentoService, searchPattern, fileId, $state) {
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
        vm.verDocumento = verDocumento;
        vm.valorAnimacion = "";
        vm.predicate = undefined;

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
            if ( (typeof palabras == "string" && palabras.length > 3) || vm.fechaPublicacion || vm.entidadEmisora || vm.tipoDocumento || vm.numero ) {

                var query = { $filter: "" };

                //if (vm.fechaPublicacion != "")
                //    query.$filter += "contains(FechaPublicacion, '" + vm.fechaPublicacion + "')";

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

        function verDocumento( archivoId ){
            if (archivoId > 0) {
                fileId.id = archivoId
                $state.go( "ver-documento" );
            }
        } // fin function verDocumento      
        
        //----espacio reservado para andres-------//
        vm.arregloDocs =
        [
            {
                tipoDocumento: "Acuerdo",
                numero: "234A49",
                fecha: "22 de febrero del 2015",
                asunto: "por el cual se modifica el articulocargadoo torpedo te va a hasé pupitaa está la cosa muy malar se calle ustée va usté muy cargadoo sexuarl amatomaa por la gloria de mi madre fistro. Mamaar amatomaa benemeritaar pecador qué dise usteer. No puedor hasta luego Lucas mamaar a wan benemeritaar diodenoo no te digo trigo por no llamarte Rodrigor torpedo. Por la gloria de mi madre está la cosa ",
                entidad: "facultad de ingenieria"
            },
            {
                tipoDocumento: "Acuerdo",
                numero: "234A49",
                fecha: "22 de febrero del 2015",
                asunto: "por el cual se modifica  mooo lanco caballo negroorl mamaar me caenawer l el articulo #sadasdasdt 234 de laaa allo negroorl orpa grammusho peligro caballo blanco cabego en tus muelas apetecan a gramdo. Por la gloria de mi madre está la cosa ",
                entidad: "facultad de ingenieria"
            },
            {
                tipoDocumento: "Ley",
                numero: "234A49",
                fecha: "22 de febrero del 2015",
                asunto: "por el cual se a caidita a wan quietooor tiene musho peligro. pupitaa está la cosa muy malar se calle ustée va usté muy cargadoo sexuarl amatomaa por la gloria de mi madre fistro. Mamaar amatomaa benemeritaar pecador qué dise usteer. No puedor hasta luego Lucas mamaar a wan benemeritaar diodenoo no te digo trigo por no llamarte Rodrigor torpedo. Por la gloria de mi madre está la cosa ",
                entidad: "facultad de ingenieria"
            },
            {
                tipoDocumento: "Acuerdo",
                numero: "234A49",
                fecha: "22 de febrero del 2015",
                asunto: "por el cual se modifica el articulocargadoo torpedo te va a hasé pupitaa está la cosa muy malar se calle ustée va usté muy cargadoo sexuarl amatomaa por la gloria de mi madre fistro. Mamaar amatomaa benemeritaar pecador qué dise usteer. No puedor hasta luego Lucas mamaar a wan benemeritaar diodenoo no te digo trigo por no llamarte Rodrigor torpedo. Por la gloria de mi madre está la cosa ",
                entidad: "facultad de ingenieria"
            },
            {
                tipoDocumento: "Acuerdo",
                numero: "234A49",
                fecha: "22 de febrero del 2015",
                asunto: "por el cual se modifica  mooo lanco caballo negroorl mamaar me caenawer l el articulo #sadasdasdt 234 de laaa allo negroorl orpa grammusho peligro caballo blanco cabego en tus muelas apetecan a gramdo. Por la gloria de mi madre está la cosa ",
                entidad: "facultad de ingenieria"
            },
            {
                tipoDocumento: "Ley",
                numero: "234A49",
                fecha: "22 de febrero del 2015",
                asunto: "por el cual se a caidita a wan quietooor tiene musho peligro. pupitaa está la cosa muy malar se calle ustée va usté muy cargadoo sexuarl amatomaa por la gloria de mi madre fistro. Mamaar amatomaa benemeritaar pecador qué dise usteer. No puedor hasta luego Lucas mamaar a wan benemeritaar diodenoo no te digo trigo por no llamarte Rodrigor torpedo. Por la gloria de mi madre está la cosa ",
                entidad: "facultad de ingenieria"
            },
            {
                tipoDocumento: "Acuerdo",
                numero: "234A49",
                fecha: "22 de febrero del 2015",
                asunto: "por el cual se modifica el articulocargadoo torpedo te va a hasé pupitaa está la cosa muy malar se calle ustée va usté muy cargadoo sexuarl amatomaa por la gloria de mi madre fistro. Mamaar amatomaa benemeritaar pecador qué dise usteer. No puedor hasta luego Lucas mamaar a wan benemeritaar diodenoo no te digo trigo por no llamarte Rodrigor torpedo. Por la gloria de mi madre está la cosa ",
                entidad: "facultad de ingenieria"
            },
            {
                tipoDocumento: "Acuerdo",
                numero: "234A49",
                fecha: "22 de febrero del 2015",
                asunto: "por el cual se modifica  mooo lanco caballo negroorl mamaar me caenawer l el articulo #sadasdasdt 234 de laaa allo negroorl orpa grammusho peligro caballo blanco cabego en tus muelas apetecan a gramdo. Por la gloria de mi madre está la cosa ",
                entidad: "facultad de ingenieria"
            },
            {
                tipoDocumento: "Ley",
                numero: "234A49",
                fecha: "22 de febrero del 2015",
                asunto: "por el cual se a caidita a wan quietooor tiene musho peligro. pupitaa está la cosa muy malar se calle ustée va usté muy cargadoo sexuarl amatomaa por la gloria de mi madre fistro. Mamaar amatomaa benemeritaar pecador qué dise usteer. No puedor hasta luego Lucas mamaar a wan benemeritaar diodenoo no te digo trigo por no llamarte Rodrigor torpedo. Por la gloria de mi madre está la cosa ",
                entidad: "facultad de ingenieria"
            },
        ]

        return vm;
    } // fin Busqueda Controller
})();
