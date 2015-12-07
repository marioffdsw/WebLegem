(function () {
    "use strict";

    angular
        .module("common.mocks")
        .run(run);

    run.$inject = ["$httpBackend"]
    function run($httpBackend) {
        var tiposEntidad = [
            { id: 1, nombre: "Facultad", tipo: "interna", documentosSoportados: [{ id: 1, nombre: "Resolución" }, { id: 2, nombre: "Ley" }] },
            { id: 2, nombre: "Departamento", tipo: "interna", documentosSoportados: [{ id: 3, nombre: "Circular" }, { id: 4, nombre: "Acuerdo" }] },
            { id: 3, nombre: "Rectoria", tipo: "interna", documentosSoportados: [{ id: 4, nombre: "Acuerdo" }, { id: 5, nombre: "Carta" }] },
            { id: 4, nombre: "Secretaría de Educación", tipo: "externa", documentosSoportados: [{ id: 1, nombre: "Resolución" }, { id: 3, nombre: "Circular" }] },
            { id: 5, nombre: "SuperEntidad", tipo: "externa", documentosSoportados: { id: 2, nombre: "Ley" } }
        ];


        var tiposEntidadUrl = "/api/TipoEntidad";

        $httpBackend.whenGET(tiposEntidadUrl).respond(tiposEntidad);
        $httpBackend.expectGET(tiposEntidadUrl);

        var tipoEntidadRegExp = new RegExp(tiposEntidadUrl + "/[0.-9][0-9]*");
        $httpBackend.whenGET(tipoEntidadRegExp).respond(function (method, url, data) {
            var tipoEntidad = { id: 0 };
            var parameters = url.split("/");
            var id = parameters[parameters.length - 1];

            if (id > 0) {
                for (var i = 0; tiposEntidad.length; i++) {
                    if (tiposEntidad[i].id = id) {
                        tipoEntidad = tiposEntidad[i];
                        break;
                    } // end if
                } // end for
            } // end if

            return [200, tipoEntidad, {}];

        });

        $httpBackend.whenPOST(tiposEntidadUrl).respond(function (method, url, data) {
            var tipoEntidad = angular.fromJson(data);

            if (!tipoEntidad.id || !tipoEntidad.id == 0) { // es un tipoEntidadumento nuevo
                tipoEntidad.id = tiposEntidad[tiposEntidad.length - 1].id + 1;
                tiposEntidad.push(tipoEntidad);
            }
            else { // actualizar el tipoEntidad
                for (var i = 0; tiposEntidad.length; i++) {
                    if (tiposEntidad[i].id == tipoEntidad.id) {
                        tiposEntidad[i] = tipoEntidad;
                        break;
                    } // end if 
                } // end for
            }

            return [200, tipoEntidad, {}]
        });

        $httpBackend.whenGET(/app/).passThrough();
    } // end run function
})();
