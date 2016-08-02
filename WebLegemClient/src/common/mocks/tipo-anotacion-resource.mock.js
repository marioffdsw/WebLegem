(function () {
    "use strict";

    angular
        .module("common.mocks")
        .run(run);

    run.$inject = ["$httpBackend"]
    function run($httpBackend) {
        var tiposAnotaciones = [
            { id: 1, nombre: "Deroga", raiz: "derog" },
            { id: 2, nombre: "Modifica", raiz: "modif" },
            { id: 3, nombre: "Actualiza", raiz: "actuali" },
        ];

        var tiposAnotacionesUrl = "/api/TipoAnotacion";

        $httpBackend.whenGET(tiposAnotacionesUrl).respond(tiposAnotaciones);
        //$httpBackend.expectGET(tiposAnotacionesUrl);

        var tipoAnotacionRegExp = new RegExp(tiposAnotacionesUrl + "/[0.-9][0-9]*");
        $httpBackend.whenGET(tipoAnotacionRegExp).respond(function (method, url, data) {
            var tipoAnotacion = { id: 0 };
            var parameters = url.split("/");
            var id = parameters[parameters.length - 1];

            if (id > 0) {
                for (var i = 0; tiposAnotaciones.length; i++) {
                    if (tiposAnotaciones[i].id = id) {
                        tipoAnotacion = tiposAnotaciones[i];
                        break;
                    } // end if
                } // end for
            } // end if

            return [200, tipoAnotacion, {}];

        });

        $httpBackend.whenPOST(tiposAnotacionesUrl).respond(function (method, url, data) {
            var tipoAnotacion = angular.fromJson(data);

            if (!tipoAnotacion.id || !tipoAnotacion.id == 0) { // es un tipoAnotacionumento nuevo
                tipoAnotacion.id = tiposAnotaciones[tiposAnotaciones.length - 1].id + 1;
                tiposAnotaciones.push(tipoAnotacion);
            }
            else { // actualizar el tipoAnotacion
                for (var i = 0; tiposAnotaciones.length; i++) {
                    if (tiposAnotaciones[i].id == tipoAnotacion.id) {
                        tiposAnotaciones[i] = tipoAnotacion;
                        break;
                    } // end if 
                } // end for
            }

            return [200, tipoAnotacion, {}]
        });

        $httpBackend.whenPUT(tiposAnotacionesUrl).respond(function (method, url, data) {
            var tipoAnotacion = angular.fromJson(data);

            if (!tipoAnotacion.id || tipoAnotacion.id == 0) { // es un tipoAnotacionumento nuevo
                tipoAnotacion.id = tiposAnotaciones[tiposAnotaciones.length - 1].id + 1;
                tiposAnotaciones.push(tipoAnotacion);
            }
            else { // actualizar el tipoAnotacion
                for (var i = 0; tiposAnotaciones.length; i++) {
                    if (tiposAnotaciones[i].id == tipoAnotacion.id) {
                        tiposAnotaciones[i] = tipoAnotacion;
                        break;
                    } // end if 
                } // end for
            }

            return [200, tipoAnotacion, {}]
        });

        $httpBackend.whenDELETE(tipoAnotacionRegExp).respond(function (method, url, data) {
            var parameters = url.split("/");
            var id = parameters[parameters.length - 1];
            var id = parseInt(id);

            if (id > 0) {
                for (var i = 0; i < tiposAnotaciones.length; i++) {
                    if (tiposAnotaciones[i].id == id) {
                        tiposAnotaciones.splice(i, 1);
                        break;
                    } // end if
                } // end for
            } // end if

            return [200, null, {}];
        });

        $httpBackend.whenGET(/app/).passThrough();
        $httpBackend.resetExpectations();
    } // end run function
})();
