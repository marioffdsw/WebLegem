(function () {
    angular.module("WebLegemApp")
        .service("SessionService", SessionService);

    SessionService.$inject = ["$resource", "serviceUrl", "$state", "language"];
    function SessionService($resource, serviceUrl, $state, language) {
        var service = $resource(serviceUrl + "/session/");
        var vm = this;
        vm.language = language;
        console.log(vm.language);
        service.loggeado = false;        
        service.permisos;
        service.opcionesAMostrar;

        //"Administración"

        function mappearPermisosAOpciones(permisos) {            
            
            service.permisos = permisos;
            opciones = [];
            if (service.permisos.find(function (permiso) { return permiso.id == 1; }))
                opciones.push({
                    nombre: correo,
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
})();