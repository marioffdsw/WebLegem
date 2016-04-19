(function () {
    "use strict";

    angular
        .module("common.mocks")
        .run(run);

    run.$inject = ["$httpBackend"]
    function run($httpBackend) {
        var roles = [
            {
                id: 1, nombre: "Super Admin", permisos: [
                    { id: 1, recurso: { id: 1, nombre: "Tipo Documento", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 1, nombre: "Crear" } },
                    { id: 2, recurso: { id: 1, nombre: "Tipo Documento", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 2, nombre: "Leer" } },
                    { id: 3, recurso: { id: 1, nombre: "Tipo Documento", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 3, nombre: "Actualizar" } },
                    { id: 4, recurso: { id: 1, nombre: "Tipo Documento", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 4, nombre: "Eliminar" } },

                    { id: 5, recurso: { id: 2, nombre: "Tipo Entidad", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 1, nombre: "Crear" } },
                    { id: 6, recurso: { id: 2, nombre: "Tipo Entidad", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 2, nombre: "Leer" } },
                    { id: 7, recurso: { id: 2, nombre: "Tipo Entidad", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 3, nombre: "Actualizar" } },
                    { id: 8, recurso: { id: 2, nombre: "Tipo Entidad", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 4, nombre: "Eliminar" } },

                    { id: 9, recurso: { id: 3, nombre: "Entidad", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 1, nombre: "Crear" } },
                    { id: 10, recurso: { id: 3, nombre: "Entidad", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 2, nombre: "Leer" } },
                    { id: 11, recurso: { id: 3, nombre: "Entidad", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 3, nombre: "Actualizar" } },
                    { id: 12, recurso: { id: 3, nombre: "Entidad", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 4, nombre: "Eliminar" } },

                    { id: 13, recurso: { id: 4, nombre: "Tipo Anotación", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 1, nombre: "Crear" } },
                    { id: 14, recurso: { id: 4, nombre: "Tipo Anotación", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 2, nombre: "Leer" } },
                    { id: 15, recurso: { id: 4, nombre: "Tipo Anotación", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 3, nombre: "Actualizar" } },
                    { id: 16, recurso: { id: 4, nombre: "Tipo Anotación", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 4, nombre: "Eliminar" } },

                    /* Modulo GestionDocumental */
                    { id: 17, recurso: { id: 5, nombre: "Archivos", modulo: { id: 2, nombre: "Gestión Documental" } }, accion: { id: 1, nombre: "Crear" } },
                    { id: 18, recurso: { id: 5, nombre: "Archivos", modulo: { id: 2, nombre: "Gestión Documental" } }, accion: { id: 2, nombre: "Leer" } },
                    { id: 19, recurso: { id: 5, nombre: "Archivos", modulo: { id: 2, nombre: "Gestión Documental" } }, accion: { id: 3, nombre: "Actualizar" } },
                    { id: 20, recurso: { id: 5, nombre: "Archivos", modulo: { id: 2, nombre: "Gestión Documental" } }, accion: { id: 4, nombre: "Eliminar" } },

                    { id: 21, recurso: { id: 6, nombre: "Documentos", modulo: { id: 2, nombre: "Gestión Documental" } }, accion: { id: 1, nombre: "Crear" } },
                    { id: 22, recurso: { id: 6, nombre: "Documentos", modulo: { id: 2, nombre: "Gestión Documental" } }, accion: { id: 2, nombre: "Leer" } },
                    { id: 23, recurso: { id: 6, nombre: "Documentos", modulo: { id: 2, nombre: "Gestión Documental" } }, accion: { id: 3, nombre: "Actualizar" } },
                    { id: 24, recurso: { id: 6, nombre: "Documentos", modulo: { id: 2, nombre: "Gestión Documental" } }, accion: { id: 4, nombre: "Eliminar" } },

                    /* Modulo Usuarios */
                    { id: 25, recurso: { id: 7, nombre: "Roles", modulo: { id: 3, nombre: "Usuarios" } }, accion: { id: 1, nombre: "Crear" } },
                    { id: 26, recurso: { id: 7, nombre: "Roles", modulo: { id: 3, nombre: "Usuarios" } }, accion: { id: 2, nombre: "Leer" } },
                    { id: 27, recurso: { id: 7, nombre: "Roles", modulo: { id: 3, nombre: "Usuarios" } }, accion: { id: 3, nombre: "Actualizar" } },
                    { id: 28, recurso: { id: 7, nombre: "Roles", modulo: { id: 3, nombre: "Usuarios" } }, accion: { id: 4, nombre: "Eliminar" } },

                    { id: 29, recurso: { id: 8, nombre: "Usuarios", modulo: { id: 3, nombre: "Usuarios" } }, accion: { id: 1, nombre: "Crear" } },
                    { id: 30, recurso: { id: 8, nombre: "Usuarios", modulo: { id: 3, nombre: "Usuarios" } }, accion: { id: 2, nombre: "Leer" } },
                    { id: 31, recurso: { id: 8, nombre: "Usuarios", modulo: { id: 3, nombre: "Usuarios" } }, accion: { id: 3, nombre: "Actualizar" } },
                    { id: 32, recurso: { id: 8, nombre: "Usuarios", modulo: { id: 3, nombre: "Usuarios" } }, accion: { id: 4, nombre: "Eliminar" } }
                ]
            },
            {
                id: 2, nombre: "Administrador", permisos: [
                    { id: 1, recurso: { id: 1, nombre: "Tipo Documento", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 1, nombre: "Crear" } },
                    { id: 2, recurso: { id: 1, nombre: "Tipo Documento", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 2, nombre: "Leer" } },
                    { id: 3, recurso: { id: 1, nombre: "Tipo Documento", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 3, nombre: "Actualizar" } },
                    { id: 4, recurso: { id: 1, nombre: "Tipo Documento", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 4, nombre: "Eliminar" } },

                    { id: 5, recurso: { id: 2, nombre: "Tipo Entidad", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 1, nombre: "Crear" } },
                    { id: 6, recurso: { id: 2, nombre: "Tipo Entidad", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 2, nombre: "Leer" } },
                    { id: 7, recurso: { id: 2, nombre: "Tipo Entidad", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 3, nombre: "Actualizar" } },
                    { id: 8, recurso: { id: 2, nombre: "Tipo Entidad", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 4, nombre: "Eliminar" } },

                    { id: 9, recurso: { id: 3, nombre: "Entidad", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 1, nombre: "Crear" } },
                    { id: 10, recurso: { id: 3, nombre: "Entidad", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 2, nombre: "Leer" } },
                    { id: 11, recurso: { id: 3, nombre: "Entidad", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 3, nombre: "Actualizar" } },
                    { id: 12, recurso: { id: 3, nombre: "Entidad", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 4, nombre: "Eliminar" } },

                    { id: 13, recurso: { id: 4, nombre: "Tipo Anotación", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 1, nombre: "Crear" } },
                    { id: 14, recurso: { id: 4, nombre: "Tipo Anotación", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 2, nombre: "Leer" } },
                    { id: 15, recurso: { id: 4, nombre: "Tipo Anotación", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 3, nombre: "Actualizar" } },
                    { id: 16, recurso: { id: 4, nombre: "Tipo Anotación", modulo: { id: 1, nombre: "Administración" } }, accion: { id: 4, nombre: "Eliminar" } }
                ]
            },
            {
                id: 3, nombre: "Secretaria", permisos: [
                    { id: 17, recurso: { id: 5, nombre: "Archivos", modulo: { id: 2, nombre: "Gestión Documental" } }, accion: { id: 1, nombre: "Crear" } },
                    { id: 18, recurso: { id: 5, nombre: "Archivos", modulo: { id: 2, nombre: "Gestión Documental" } }, accion: { id: 2, nombre: "Leer" } },
                    { id: 19, recurso: { id: 5, nombre: "Archivos", modulo: { id: 2, nombre: "Gestión Documental" } }, accion: { id: 3, nombre: "Actualizar" } },
                    { id: 20, recurso: { id: 5, nombre: "Archivos", modulo: { id: 2, nombre: "Gestión Documental" } }, accion: { id: 4, nombre: "Eliminar" } },

                    { id: 21, recurso: { id: 6, nombre: "Documentos", modulo: { id: 2, nombre: "Gestión Documental" } }, accion: { id: 1, nombre: "Crear" } },
                    { id: 22, recurso: { id: 6, nombre: "Documentos", modulo: { id: 2, nombre: "Gestión Documental" } }, accion: { id: 2, nombre: "Leer" } },
                    { id: 23, recurso: { id: 6, nombre: "Documentos", modulo: { id: 2, nombre: "Gestión Documental" } }, accion: { id: 3, nombre: "Actualizar" } },
                    { id: 24, recurso: { id: 6, nombre: "Documentos", modulo: { id: 2, nombre: "Gestión Documental" } }, accion: { id: 4, nombre: "Eliminar" } },
                ]
            }            
        ];

        var rolesUrl = "/api/Roles";

        $httpBackend.whenGET(rolesUrl).respond(roles);
        //$httpBackend.expectGET( tiposDocumentoUrl );

        var rolesRegExp = new RegExp(rolesUrl + "/[0.-9][0-9]*");
        $httpBackend.whenGET(rolesRegExp).respond(function (method, url, data) {
            var rol = { id: 0 };
            var parameters = url.split("/");
            var id = parameters[parameters.length - 1];

            if (id > 0) {
                for (var i = 0; roles.length; i++) {
                    if (roles[i].id = id) {
                        rol = roles[i];
                        break;
                    } // end if
                } // end for
            } // end if

            return [200, rol, {}];

        });

        $httpBackend.whenPOST(rolesUrl).respond(function (method, url, data) {
            var rol = angular.fromJson(data);

            if (!rol.id || !rol.id === 0) { // es un tipoDocumento nuevo
                rol.id = roles[roles.length - 1].id + 1;
                roles.push(rol);
            }
            else { // actualizar el tipoDoc
                for (var i = 0; roles.length; i++) {
                    if (roles[i].id == rol.id) {
                        roles[i] = rol;
                        break;
                    } // end if 
                } // end for
            }

            return [200, rol, {}]
        });

        $httpBackend.whenPUT(rolesUrl).respond(function (method, url, data) {
            var rol = angular.fromJson(data);

            if (!rol.id || rol.id == 0) { // es un tipoDocumento nuevo
                rol.id = roles[roles.length - 1].id + 1;
                roles.push(rol);
            }
            else { // actualizar el tipoDoc
                for (var i = 0; roles.length; i++) {
                    if (roles[i].id == rol.id) {
                        roles[i] = rol;
                        break;
                    } // end if 
                } // end for
            }

            return [200, rol, {}];
        });

        $httpBackend.whenDELETE(rolesRegExp).respond(function (method, url, data) {            
            var parameters = url.split("/");
            var id = parameters[parameters.length - 1];
            var id = parseInt(id);

            if (id > 0) {
                for (var i = 0; roles.length; i++) {
                    if (roles[i].id == id) {
                        roles.splice(i, 1);
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
