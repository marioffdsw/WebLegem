﻿(function () {
    "use strict";

    angular
        .module("WebLegemApp.Usuarios")
        .controller("controlUsuariosController", controlUsuariosController)


    controlUsuariosController.$inject = ["$window", "UsuariosResource", "RolResource", "serviceUrl", "_", "language", "stringService"];

    function controlUsuariosController($window, UsuariosResource, RolResource, serviceUrl, _, language, stringService) {
        var vm = this;
        var blob;

        vm.dialogResponse = false;
        vm.responseMessage = "";
        vm.default = "Seleccione una opción";
        vm.procesando = false;
        vm.error = false;
        vm.idLoad = "wl-lista";

        vm.language = language;
        vm.subido = false;
        vm.ban_click = false;

        vm.editando = false;
        vm.roles = [];
        vm.seleccionar = seleccionar;
        vm.cancelar = cancelar;
        vm.nuevo = nuevo;
        vm.usuarioSeleccionado;

        vm.abrirCamara = abrirCamara;
        vm.seleccionarArchivo = seleccionarArchivo;
        vm.usuarios;
        vm.aceptar = aceptar;
        vm.remover = eliminar;

        vm.trash = false;
        vm.cargarFoto = vm.cargarFoto;

        RetrieveData();

        function RetrieveData() {
            startAnimation();
            UsuariosResource.query()
                .$promise.then(function (data) {
                    stopAnimation();
                    vm.usuarios = data;                    
                },
                function errorCallback(error) {
                    stopAnimation();
                    vm.error = true;
                }
            );

            startAnimation();
            RolResource.query()
                .$promise.then(function (data) {
                    stopAnimation
                    vm.roles = data;
                },
                function errorCallback(error) {
                    stopAnimation();
                    vm.error = true;
                }
            );
        } // end function RetrieveData

        function seleccionar(usuario) {            
            if (vm.editando) return;

            if (vm.usuarioSeleccionado && vm.usuarioSeleccionado.id === usuario.id) {
                vm.borrarFoto();
                return vm.usuarioSeleccionado = undefined;
            }

            var usuario = angular.copy(usuario, {});
            usuario.contrasena = _.map(usuario.contrasena.split(''), function (character) {
                return '*';
            }).join('');

          
            vm.usuarioSeleccionado = usuario;
            vm.usuarioSeleccionado.estado = (usuario.estado == "A");

            //img.src = serviceUrl + "/Fotos?photoName=" + vm.usuarioSeleccionado.foto;            
        } // end fnction seleccionar

        function nuevo() {            
            vm.usuarioSeleccionado = { id: 0 }
            vm.usuarioSeleccionado.estado = true;
        } // end function nuevo

        function aceptar() {
            if (vm.form_usuario.nombre.$invalid || vm.form_usuario.apellido.$invalid || vm.form_usuario.nick.$invalid ||
                vm.form_usuario.pass.$invalid || vm.form_usuario.correo.$invalid || vm.form_usuario.tipo.$invalid ||
                vm.form_usuario.documento.$invalid) {

                vm.form_usuario.nombre.$invalid ? vm.form_usuario.nombre.$dirty = true : '';
                vm.form_usuario.apellido.$invalid ? vm.form_usuario.apellido.$dirty = true : '';
                vm.form_usuario.nick.$invalid ? vm.form_usuario.nick.$dirty = true : '';
                vm.form_usuario.pass.$invalid ? vm.form_usuario.pass.$dirty = true : '';
                vm.form_usuario.correo.$invalid ? vm.form_usuario.correo.$dirty = true : '';
                vm.form_usuario.tipo.$invalid ? vm.form_usuario.tipo.$dirty = true : '';
                vm.form_usuario.documento.$invalid ? vm.form_usuario.documento.$dirty = true : '';

            }
            else {
                vm.usuarioSeleccionado.estado = (vm.usuarioSeleccionado.estado ? "A" : "I");
                if (vm.usuarioSeleccionado.id === 0) {
                    return crear(vm.usuarioSeleccionado);
                } else {
                    return guardar(vm.usuarioSeleccionado);
                }
                    
            }
        } // end function

        function crear(usuario) {
            usuario.nombre = stringService.toTitleCase(usuario.nombre);

            var fileInput = document.querySelector("#hidden_input");
            var xhr = new XMLHttpRequest();
            xhr.open('POST', serviceUrl + '/Fotos'); // with form data

            xhr.onload = function (data) {
                vm.subido = true;

                var nombreCompletoArray = JSON.parse(this.responseText).nombre[0].split("\\");
                var nombre = nombreCompletoArray[nombreCompletoArray.length - 1];

                usuario.foto = nombre;
                startAnimation();
                UsuariosResource.save(usuario)
                    .$promise.then(
                    function (data) {
                        stopAnimation();
                        RetrieveData();
                    },
                    function errorCallback(error) {
                        vm.responseMessage = error.data.message;
                        vm.dialogResponse = true;
                        stopAnimation();
                    }
                );
            } // end onload callback

            var form = new FormData();

            var canvas = document.createElement("CANVAS");
            canvas.width = img.width;
            canvas.height = img.height;
            var context = canvas.getContext("2d");
            context.drawImage(img, 0, 0);
            canvas.toBlob(function (blob) {
                form.append('file', blob);
                form.append('fileName', 'image' + '.png');
                xhr.setRequestHeader('FileName', 'image' + '.png');

                //xhr.setRequestHeader("Content-type", "multipart/form-data");
                xhr.send(form);
            }, "image/png");

            //form.append('file', fileInput);            


            //UsuariosResource.save(usuario, function (data) {
            //    RetrieveData();
            //});
            cancelar();
        } // end function crear

        function guardar(usuario) {
            UsuariosResource.update(usuario)
                .$promise.then(function (data) {
                    stopAnimation();
                    RetrieveData();
                },
                function errorCallback(error) {
                    stopAnimation();
                    vm.responseMessage = error.data.message;
                    vm.dialogResponse = true;
                }
            );

            cancelar();
        } // end function guardar

        function eliminar(usuario) {
            UsuariosResource.remove(usuario)
                .$promise.then(function (data) {                    
                    RetrieveData();
                    stopAnimation();
                },
                function errorCallback(error) {
                vm.responseMessage = error.data.message;
                vm.dialogResponse = true;
                stopAnimation();
            });

            cancelar();
        } // end fucntion eliminar

        function cancelar() {
            vm.editando = false;
            vm.usuarioSeleccionado = undefined;
            vm.borrarFoto();
            vm.form_usuario.$setPristine();
            vm.ban_click = false;
        } // end function cancelar

        var img = $window.document.getElementById("laimagen");
        var btn_input = document.getElementById("input_usu_foto");
        btn_input.onchange = cargarFoto;

        vm.borrarFoto = function () {
            img.src = "";
            vm.trash = false;
            img.style.visibility = "hidden";
        };

        vm.mostrarFoto = function () {
            vm.trash = true;
            img.style.visibility = " unset";
        }


        function seleccionarArchivo() {
            btn_input.click();
        };


        function cargarFoto(e) {

            var files = e.target.files;
            var f = files[0];
            var leerArchivo = new FileReader();

            //leerArchivo.onloadstart = function (e) {

            //};

            leerArchivo.onload = function (e) {
                img.src = e.target.result;
            };

            //console.log(f.name);//nombreArchivo
            leerArchivo.readAsDataURL(f);//para q el archivo sea leido            
        };



        function abrirCamara() {
            vm.camaraToggle = true;
        };




        //---------------------------------------------------------------------------------
        function startAnimation() {
            document.getElementById(vm.idLoad).style.visibility = "visible";
            vm.procesando = true;
        }
        function stopAnimation() {
            document.getElementById(vm.idLoad).style.visibility = "hidden";
            vm.procesando = false;
        }

    } // end TipoEntidadController

})();
