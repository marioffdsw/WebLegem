(function () {
    angular.module("WebLegemApp")
        .service("SessionService", SessionService);

    SessionService.$inject = ["$resource", "serviceUrl", "$state", "language"];
    function SessionService($resource, serviceUrl, $state, language) {
        var service = $resource(serviceUrl + "/session/");        
        service.loggeado = false;        
        service.permisos;
        service.opcionesAMostrar;

        service.traerOpciones = function mapaa() {
            actualizarIdioma(language);
            for (i = 0 ; i < opciones.length ; i++) {
                switch (opciones[i].link) {
                    case "administracion.tipo-documento":
                        opciones[i].nombre = administracion;
                        break;
                    case "gestion-documental.crear-documento.subir-archivo":
                        opciones[i].nombre = gestionDocumental;
                        break;
                    case "anotacion.crear-anotacion":
                        opciones[i].nombre = anotaciones;
                        break;
                    case "usuarios.control-usuarios":
                        opciones[i].nombre = usuarios;
                        break;
                }
            }
            return opciones;

        };
        opciones = [];

        //"Administración"

        function mappearPermisosAOpciones(permisos) {             
            actualizarIdioma(language);
            service.permisos = permisos;
            if (service.permisos.find(function (permiso) { return permiso.id == 1; }))
                opciones.push({
                    nombre: administracion,
                    link: "administracion.tipo-documento",
                    icono: "ico-tasks",
                    condicion: "true",                    
                });
            if (service.permisos.find(function (permiso) { return permiso.id == 2; })) {
                opciones.push({
                    nombre: gestionDocumental,
                    link: "gestion-documental.crear-documento.subir-archivo",
                    icono: "ico-stack-overflow",
                    condicion: "true"
                });

                opciones.push({
                    nombre: anotaciones,
                    link: "anotacion.crear-anotacion",
                    icono: "ico-files-o",
                    condicion: "true"
                });
            }
            if (service.permisos.find(function (permiso) { return permiso.id == 3 })) {
                opciones.push({
                    nombre: usuarios,
                    link: "usuarios.control-usuarios",
                    icono: "ico-users",
                    condicion: "true"
                });
            } // end if
            
            return opciones;
        } // end function mappearPermisosAOpciones        

        service.LogIn = function logIn(usuario)
        {                        
            if (usuario == null || usuario == undefined)
                console.log("Tienes que pasar como parametro el usuario!!!");
            // TODO - cambiar el console, log por un mensaje de retroalimentación adecuado

            service.usuario = usuario;

            service.opcionesAMostrar = mappearPermisosAOpciones(usuario.rol.permisosAsignados);

            if (service.opcionesAMostrar.length > 0) {                
                service.loggeado = true;
                $state.go("home");
            }
        } // end method logIn

        service.LogOut = function logOut() {
            service.loggeado = false;
            $state.go("home");
        } // end function logOut

        return service;
    } // end function SessionService 

     function actualizarIdioma(language) {
        administracion = language.strings.Administracion;
        gestionDocumental = language.strings.GestionDocumental;
        anotaciones = language.strings.Anotaciones;
        usuarios = language.strings.Usuarios1;
    }


})();