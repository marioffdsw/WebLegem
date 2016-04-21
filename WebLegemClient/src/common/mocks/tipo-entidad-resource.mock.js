(function () {
    "use strict";

    angular
        .module("common.mocks")
        .run(run);

    run.$inject = ["$httpBackend"]
    function run($httpBackend) {
        var tiposEntidad = [
            { id: 1, nombre: "Facultad", documentosSoportados: [{ id: 1, nombre: "Resolución" }, { id: 2, nombre: "Ley" }] },
            { id: 2, nombre: "Departamento", documentosSoportados: [{ id: 3, nombre: "Circular" }, { id: 4, nombre: "Acuerdo" }] },
            { id: 3, nombre: "Rectoria", documentosSoportados: [{ id: 4, nombre: "Acuerdo" }, { id: 5, nombre: "Carta" }] },
            { id: 4, nombre: "Secretaría de Educación", documentosSoportados: [{ id: 1, nombre: "Resolución" }, { id: 3, nombre: "Circular" }] },
            { id: 5, nombre: "SuperEntidad", documentosSoportados: [{ id: 2, nombre: "Ley" }] }
        ];

        var tiposEntidadUrl = "/api/TipoEntidad";

        $httpBackend.whenGET(tiposEntidadUrl).respond(tiposEntidad);

        var tipoEntidadRegExp = new RegExp(tiposEntidadUrl + "/[0.-9][0-9]*");
        $httpBackend.whenGET(tipoEntidadRegExp).respond(function (method, url, data) {
            var tipoEntidad = { id: 0 };
            var parameters = url.split("/");
            var id = parameters[parameters.length - 1];

            if (id > 0) {
                for (var i = 0; i < tiposEntidad.length; i++) {
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
                for (var i = 0; i < tiposEntidad.length; i++) {
                    if (tiposEntidad[i].id == tipoEntidad.id) {
                        tiposEntidad[i] = tipoEntidad;
                        break;
                    } // end if 
                } // end for
            }

            return [200, tipoEntidad, {}]
        });


        $httpBackend.whenPUT(tiposEntidadUrl).respond(function (method, url, data) {
            var tipoEntidad = angular.fromJson(data);

            if (!tipoEntidad.id || tipoEntidad.id == 0) { // es un tipoEntidad nuevo
                tipoEntidad.id = tiposEntidad[tiposEntidad.length - 1].id + 1;
                tiposEntidad.push(tipoEntidad);
            }
            else { // actualizar el tipoDoc
                for (var i = 0; i < tiposEntidad.length; i++) {
                    if (tiposEntidad[i].id == tipoEntidad.id) {
                        tiposEntidad[i] = tipoEntidad;
                        break;
                    } // end if 
                } // end for
            }

            return [200, tipoEntidad, {}];
        });

        $httpBackend.whenDELETE(tipoEntidadRegExp).respond(function (method, url, data) {            
            var parameters = url.split("/");
            var id = parameters[parameters.length - 1];
            var id = parseInt(id);

            if (id > 0) {
                for (var i = 0; i < tiposEntidad.length; i++) {
                    if (tiposEntidad[i].id == id) {
                        tiposEntidad.splice(i, 1);
                        break;
                    } // end if
                } // end for
            } // end if

            return [200, null, {}];
        });

        $httpBackend.whenGET(/app/).passThrough();
    } // end run function
})();
