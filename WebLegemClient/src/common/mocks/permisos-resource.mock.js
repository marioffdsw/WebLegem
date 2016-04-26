(function () {
    "use strict";

    angular
        .module("common.mocks")
        .run(run);

    run.$inject = ["$httpBackend"]
    function run($httpBackend) {

        var permisos = [

            /* Modulo Administración */
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
        ];
        
        var permisosUrl = "/api/Permisos";

        $httpBackend.whenGET(permisosUrl).respond(permisos);        
    } // end run function
})();
