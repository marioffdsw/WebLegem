(function () {
    "use strict";

    angular
        .module("common.mocks")
        .run(run);

    run.$inject = ["$httpBackend"]
    function run($httpBackend) {

        var entidades = [
            { id: 1, nombre: "Facultad de Ingeniería", tipoEntidad: { id: 1, nombre: "Facultad", documentosSoportados: [{ id: 1, nombre: "Resolución" }, { id: 2, nombre: "Ley" }] } },
            { id: 2, nombre: "Departamento de Sistemas", tipoEntidad: { id: 2, nombre: "Departamento", documentosSoportados: [{ id: 3, nombre: "Circular" }, { id: 4, nombre: "Acuerdo" }] } },
            { id: 3, nombre: "Rectoria", tipoEntidad: { id: 3, nombre: "Rectoria", documentosSoportados: [{ id: 4, nombre: "Acuerdo" }, { id: 5, nombre: "Carta" }] } },
            { id: 4, nombre: "Secretaría de Educación", tipoEntidad: { id: 4, nombre: "Secretaría de Educación", documentosSoportados: [{ id: 1, nombre: "Resolución" }, { id: 3, nombre: "Circular" }] } }
        ];       

        var entidadesUrl = "/api/Entidad";

        $httpBackend.whenGET(entidadesUrl).respond(entidades);
        $httpBackend.expectGET(entidadesUrl);

        var EntidadRegExp = new RegExp(entidadesUrl + "/[0.-9][0-9]*");
        $httpBackend.whenGET(EntidadRegExp).respond(function (method, url, data) {
            var Entidad = { id: 0 };
            var parameters = url.split("/");
            var id = parameters[parameters.length - 1];

            if (id > 0) {
                for (var i = 0; entidades.length; i++) {
                    if (entidades[i].id = id) {
                        Entidad = entidades[i];
                        break;
                    } // end if
                } // end for
            } // end if

            return [200, Entidad, {}];

        });

        $httpBackend.whenPOST(entidadesUrl).respond(function (method, url, data) {
            var Entidad = angular.fromJson(data);

            if (!Entidad.id || !Entidad.id == 0) { // es un Entidadumento nuevo
                Entidad.id = entidades[entidades.length - 1].id + 1;
                entidades.push(Entidad);
            }
            else { // actualizar el Entidad
                for (var i = 0; entidades.length; i++) {
                    if (entidades[i].id == Entidad.id) {
                        entidades[i] = Entidad;
                        break;
                    } // end if 
                } // end for
            }

            return [200, Entidad, {}]
        });

        $httpBackend.whenPUT(entidadesUrl).respond(function (method, url, data) {
            var entidad = angular.fromJson(data);

            if (!entidad.id || entidad.id == 0) { // es un tipoEntidad nuevo
                entidad.id = entidades[entidades.length - 1].id + 1;
                entidades.push(entidad);
            }
            else { // actualizar el tipoDoc
                for (var i = 0; entidades.length; i++) {
                    if (entidades[i].id == entidad.id) {
                        entidades[i] = entidad;
                        break;
                    } // end if 
                } // end for
            }

            return [200, entidad, {}];
        });

        $httpBackend.whenDELETE(EntidadRegExp).respond(function (method, url, data) {
            var parameters = url.split("/");
            var id = parameters[parameters.length - 1];
            var id = parseInt(id);

            if (id > 0) {
                for (var i = 0; entidades.length; i++) {
                    if (entidades[i].id == id) {
                        entidades.splice(i, 1);
                        break;
                    } // end if
                } // end for
            } // end if

            return [200, null, {}];
        });

        $httpBackend.whenGET(/app/).passThrough();
        $httpBackend.whenGET(/common/).passThrough();
    } // end run function
})();
