(function(){
    "use strict";

    angular
        .module("common.mocks")
        .run(run);

    run.$inject = [ "$httpBackend" ];
    function run( $httpBackend ) {
        var usuarios = [
            {
                id: 1,
                nombreUsuario: "sa",
                nombre: "Super",
                apellido: "Administrador",
                contrasena: '1234',
                correo: "sa@udenar.edu.co",
                foto: "sa.jpg",
                estado: "A",
                rol: {
                    id: 1,
                    nombre: "Super Admin"
                }
            }, // end usuario sa -- superadmin
            {
                id: 2,
                nombreUsuario: "admin",
                nombre: "Admin",
                apellido: "Istrador",
                correo: "admin@udenar.edu.co",
                estado: "A",
                foto: "admin.jpg",
                contrasena: "admin",
                rol: {
                    id: 2,
                    nombre: "Administrador"
                }
            },
            {
                id: 3,
                nombreUsuario: "secre",
                nombre: "Secre",
                apellido: "Taria",
                contrasena: '987',
                correo: "secre@udenar.edu.co",
                foto: "secre.jpg",
                rol: {
                    id: 3,
                    nombre: "Secretaria"
                }
            } // end usuario secre -- Secretaria
        ];

        var usuariosUrl = "/api/Usuarios";
        var usuariosRegExp = new RegExp(usuariosUrl + "/[0.-9][0-9]*");

        $httpBackend.whenGET(usuariosUrl).respond(usuarios);

        $httpBackend.whenGET(usuariosRegExp).respond(function (method, url, data) {
            var usuario = { id: 0 }
            var parameters = url.split("/");
            var id = parameters[parameters.length - 1];

            if( id > 0 ){
                for (var i = 0; usuarios.length; i++) {
                    if( usuarios[i].id = id ){
                        usuario = usuarios[i];
                        break;
                    } // end if
                } // end for
            } // end if
           
            return [ 200, usuario, {} ];
        });

        $httpBackend.whenPOST(usuariosUrl).respond(function (method, url, data) {
            var usuario = angular.fromJson(data);

            if (!usuario.id || !usuario.id == 0) {
                usuario.id = usuarios[usuarios.length - 1].id + 1;
                usuarios.push(usuario);
            } // end if
            else {
                for (var i = 0; usuarios.length; i++) {
                    if( usuarios[i].id == usuario.id ){
                        usuarios[i] = usuario;
                        break;
                    } // end if
                } // end for
            } // end else

            return [200, usuario, {}];
        });

        $httpBackend.whenPUT(usuariosUrl).respond(function (method, url, data) {
            
            var usuario = angular.fromJson(data);

            if( !usuario.id || usuario.id == 0 ){
                usuario.id = usuarios[usuarios.length - 1].id + 1;
                usuarios.push( usuario );
            } // end if
            else {
                for (var i = 0; i < usuarios.length; i++ ){
                    if (usuarios[i].id == usuario.id) {
                        usuarios[i] = usuario;
                        break;
                    } // end if
                } // end for
            } // end else

            return [ 200, usuario,  {} ];
        });
        
        $httpBackend.whenDELETE(usuariosRegExp).respond(function (method, url, data) {
            var parameters = url.split("/");
            var id = parameters[parameters.length - 1];
            id = parseInt(id);

            if( id > 0 ){
                for (var i = 0; usuarios.length; i++ ){
                    if (usuarios[i].id == id) {
                        usuarios.splice(i, 1);
                        break;
                    } // end if
                } // end for
            } // end if

            return [200, null, {} ];
        });
    } // end function run
})();