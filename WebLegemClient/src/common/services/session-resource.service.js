(function () {
    angular.module("WebLegemApp")
        .service("SessionService", SessionService);

    SessionService.$inject = [ "$resource", "serviceUrl", "$state" ];
    function SessionService( $resource, serviceUrl, $state ) {
        var service = $resource(serviceUrl + "/session/");

        service.loggeado = false;        
        service.permisos;
        service.opcionesAMostrar;

        function mappearPermisosAOpciones(permisos) {            
            
            service.permisos = permisos;
            opciones = [];
            if (service.permisos.find(function (permiso) { return permiso.id == 1; }))
                opciones.push({
                    nombre: "Administración",
                    link: "administracion.tipo-documento",
                    icono: "ico-tasks",
                    condicion: "true"
                });
            if (service.permisos.find(function (permiso) { return permiso.id == 2; })) {
                opciones.push({
                    nombre: "Gestión Documental",
                    link: "gestion-documental.crear-documento.subir-archivo",
                    icono: "ico-stack-overflow",
                    condicion: "true"
                });

                opciones.push({
                    nombre: "Anotaciones",
                    link: "anotacion.crear-anotacion",
                    icono: "ico-files-o",
                    condicion: "true"
                });
            }
            if (service.permisos.find(function (permiso) { return permiso.id == 3 })) {
                opciones.push({
                    nombre: "Usuarios",
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

            service.usuario = usuario;

            service.opcionesAMostrar = mappearPermisosAOpciones(usuario.rol.permisosAsignados);

            if (service.opcionesAMostrar.length > 0) {
                console.log( "paso" );
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
})();