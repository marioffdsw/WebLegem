(function () {
    "use strict";

    angular
        .module("common.mocks")
        .run(run);

    run.$inject = ["$httpBackend"]
    function run($httpBackend) {
        var tiposAnotaciones = [
            { id: 1, nombre: "Deroga", rolActivo: "Deroga", rolPasivo: "Derogado" },
            { id: 2, nombre: "Actualiza", rolActivo: "Actualiza", rolPasivo: "Actualizado" },
            { id: 3, nombre: "Modifica", rolActivo: "Modifica", rolPasivo: "Modificado" }
        ];

        var tiposAnotacionesUrl = "/api/TipoAnotacion";

        $httpBackend.whenGET(tiposAnotacionesUrl).respond(tiposAnotaciones);
        $httpBackend.expectGET(tiposAnotacionesUrl);

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

        $httpBackend.whenGET(/app/).passThrough();
    } // end run function
})();
