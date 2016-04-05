(function () {
    "use strict";

    angular
        .module( "common.mocks" )
        .run(run);

    run.$inject = [ "$httpBackend" ]
    function run( $httpBackend ) {
        var tiposDocumento = [
            { id: 1, nombre: "Resolución" },
            { id: 2, nombre: "Ley" },
            { id: 3, nombre: "Circular" },
            { id: 4, nombre: "Acuerdo" },
            { id: 5, nombre: "Carta" }
        ];

        var tiposDocumentoUrl = "/api/TipoDocumento";        

        $httpBackend.whenGET(tiposDocumentoUrl).respond( tiposDocumento );
        //$httpBackend.expectGET( tiposDocumentoUrl );

        var tipoDocRegExp = new RegExp( tiposDocumentoUrl + "/[0.-9][0-9]*");
        $httpBackend.whenGET(tipoDocRegExp).respond(function (method, url, data) {
            var tipoDoc = { id: 0 };
            var parameters = url.split("/");
            var id = parameters[parameters.length - 1];

            if (id > 0) {
                for (var i = 0; tiposDocumento.length; i++) {
                    if (tiposDocumento[i].id = id) {
                        tipoDoc = tiposDocumento[i];
                        break;
                    } // end if
                } // end for
            } // end if

            return [200, tipoDoc, {} ];

        });

        $httpBackend.whenPOST(tiposDocumentoUrl).respond(function ( method, url, data ) {
            var tipoDoc = angular.fromJson(data);

            if (!tipoDoc.id || !tipoDoc.id == 0) { // es un tipoDocumento nuevo
                tipoDoc.id = tiposDocumento[tiposDocumento.length - 1].id + 1;
                tiposDocumento.push(tipoDoc);
            }
            else { // actualizar el tipoDoc
                for (var i = 0; tiposDocumento.length; i++) {
                    if (tiposDocumento[i].id == tipoDoc.id) {
                        tiposDocumento[i] = tipoDoc;
                        break;
                    } // end if 
                } // end for
            }

            return [200, tipoDoc, {} ]
        });

        $httpBackend.whenPUT(tiposDocumentoUrl).respond(function (method, url, data) {
            var tipoDoc = angular.fromJson(data);

            if (!tipoDoc.id || tipoDoc.id == 0) { // es un tipoDocumento nuevo
                tipoDoc.id = tiposDocumento[tiposDocumento.length - 1].id + 1;
                tiposDocumento.push(tipoDoc);
            }
            else { // actualizar el tipoDoc
                for (var i = 0; tiposDocumento.length; i++) {
                    if (tiposDocumento[i].id == tipoDoc.id) {
                        tiposDocumento[i] = tipoDoc;
                        break;
                    } // end if 
                } // end for
            }

            return [200, tipoDoc, {}];
        });

        $httpBackend.whenDELETE(tipoDocRegExp).respond(function (method, url, data) {
            var tipoDoc = { id: 0 };
            var parameters = url.split("/");
            var id = parameters[parameters.length - 1];
            var id = parseInt(id);            

            if (id > 0) {
                for (var i = 0; tiposDocumento.length; i++) {
                    if (tiposDocumento[i].id == id) {
                        tiposDocumento.splice(i, 1);
                        break;
                    } // end if
                } // end for
            } // end if

            return [200, null, {}];
        });

        //$httpBackend.expectDELETE(tipoDocRegExp);

        //$httpBackend.whenGET(/\.html$/).passThrough();
        //$httpBackend.whenGET(/\.css$/).passThrough();
        //$httpBackend.whenGET(/\.json$/).passThrough();
        //$httpBackend.whenGET(/\.jpeg$/).passThrough();
        //$httpBackend.whenGET(/\.svg$/).passThrough();
        //$httpBackend.whenGET(/\.png$/).passThrough();
        $httpBackend.whenGET(/app/).passThrough();
    } // end run function
})();
