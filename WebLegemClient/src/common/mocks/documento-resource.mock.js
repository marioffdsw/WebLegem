(function () {
    "use strict";

    angular
        .module("common.mocks")
        .run(run);

    run.$inject = ["$httpBackend"];
    function run($httpBackend) {

        var documentos = [
            {
                id: 1,
                entidad: {
                    id: 1,
                    nombre: "Facultad de Ingenieria",
                    tipoEntidad: { id: 1, nombre: "Facultad" }
                },
                tipoDoc: {
                    id: 1,
                    nombre: "Circular"
                },
                anioPublicacion: "2001",
                numero: "001",
                archivo: 1
            },
            {
                id: 2,
                entidad: {
                    id: 2,
                    nombre: "Facultad de Medicina",
                    tipoEntidad: { id: 1, nombre: "Facultad" }
                },
                tipoDoc: {
                    id: 1,
                    nombre: "Carta"
                },
                anioPublicacion: "2002",
                numero: "002",
                archivo: 2
            }
        ];

        var documentosUrl = new RegExp("/api/Documento"+ ".*" );

        $httpBackend.whenGET(documentosUrl).respond(documentos);

        //var documentosRegEx = new RegExp(documentosUrl + "/[0.-9][0-9]*");        

        $httpBackend.whenGET(/app/).passThrough();
        $httpBackend.resetExpectations();
    } // end function run
})();