(function () {
    "use strict";

    angular
        .module("WebLegemApp.Usuarios")
        .controller("controlUsuariosController", controlUsuariosController)    
        

    controlUsuariosController.$inject = ["$window", "UsuariosResource", "RolResource", "serviceUrl", "_", "language"];

    function controlUsuariosController($window, UsuariosResource, RolResource, serviceUrl, _, language) {
        var vm = this;
        var blob;        

        vm.dialogResponse = false;
        vm.responseMessage = "";
        vm.default = "Seleccione una opción";
        vm.procesando = false;
        vm.error = false;

        vm.language = language;
        vm.subido = false;
        vm.ban_click = false;

        vm.editando = false;
        vm.roles = [];
        vm.seleccionar = seleccionar;
        vm.cancelar = cancelar;
        vm.nuevo = nuevo;
        vm.mostrarDialogo = mostrarDialogo;

        vm.abrirCamara = abrirCamara;
        vm.seleccionarArchivo = seleccionarArchivo;
        vm.usuarios;
        vm.aceptar = aceptar;
        vm.remover = eliminar;

        vm.trash = false;
        vm.cargarFoto = vm.cargarFoto;        
        
        RetrieveData();

        function RetrieveData() {
            UsuariosResource.query(function (data) {
                vm.usuarios = data;
            });

            RolResource.query(function (data) {
                vm.roles = data;
            });
        } // end function RetrieveData
       
        function seleccionar(usuario) {
            if (vm.editando) return;

            if (vm.usuarioSeleccionado && vm.usuarioSeleccionado.id === usuario.id)
                return vm.usuarioSeleccionado = undefined;
                
            var usuario = angular.copy(usuario, {});            
            usuario.contrasena = _.map(usuario.contrasena.split(''), function (character) {
                return '*';
            }).join('');
            
            vm.usuarioSeleccionado = usuario;
        } // end fnction seleccionar

        function nuevo() {
            vm.usuarioSeleccionado = {id: 0}
        } // end function nuevo

        function aceptar() {
            if (vm.form_usuario.nombre.$invalid || vm.form_usuario.apellido.$invalid || vm.form_usuario.nick.$invalid ||
                vm.form_usuario.pass.$invalid || vm.form_usuario.pass_confirm.$invalid || vm.form_usuario.correo.$invalid
                || vm.form_usuario.tipo.$invalid || vm.form_usuario.rad.$invalid) {

                vm.form_usuario.nombre.$invalid     ? vm.form_usuario.nombre.$dirty = true : '';
                vm.form_usuario.apellido.$invalid   ? vm.form_usuario.apellido.$dirty = true : '';
                vm.form_usuario.nick.$invalid       ? vm.form_usuario.nick.$dirty = true : '';
                vm.form_usuario.pass.$invalid       ? vm.form_usuario.pass.$dirty = true : '';
                vm.form_usuario.pass_confirm.$invalid   ? vm.form_usuario.pass_confirm.$dirty = true : '';
                vm.form_usuario.correo.$invalid         ? vm.form_usuario.correo.$dirty = true : '';
                vm.form_usuario.tipo.$invalid           ? vm.form_usuario.tipo.$dirty = true : '';
                vm.form_usuario.rad.$invalid ? vm.ban_click = true : vm.ban_click = true;

            }
            else
            {
                if (vm.usuarioSeleccionado.id === 0)
                    return crear(vm.usuarioSeleccionado);
                guardar(vm.usuarioSeleccionado);
            }
        } // end function

        function crear(usuario) {
            console.log("crear");
            var fileInput = document.querySelector("#hidden_input");
            var xhr = new XMLHttpRequest();
            xhr.open('POST', serviceUrl + '/Fotos'); // with form data

            xhr.onload = function ( data ) {
                vm.subido = true;

                var nombreCompletoArray = JSON.parse(this.responseText).nombre[0].split( "\\" );
                var nombre = nombreCompletoArray[ nombreCompletoArray.length - 1 ];
                
                usuario.foto = nombre;
                UsuariosResource.save(usuario, function (data) {
                    RetrieveData();
                });
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
            UsuariosResource.update(usuario, function (data) {
                RetrieveData();
            });

            cancelar();
        } // end function guardar

        function eliminar(usuario) {
            UsuariosResource.remove(usuario, function () {
                RetrieveData();
            })
            cancelar();
        } // end fucntion eliminar

        function cancelar() {
            vm.editando = false;
            vm.usuarioSeleccionado = undefined;
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




        function mostrarDialogo(a) {
            
            
            //arreglo para comparar

            var permisos = ['nombrex','Crear', 'Leer', 'Actualizar', 'Eliminar']
              

            var arrayAux1 = [];
            var arrayAux2 = [];

            //crear arreglo
            
            for (var x in a.permisos) {

                var arreglo_permisos = {
                    modulo:   a.permisos[x].recurso.modulo.nombre,
                    permiso:  a.permisos[x].accion.nombre
                }
                arrayAux1.push(arreglo_permisos);
            }

            var arrayModulos = _.unique(arrayAux1,'modulo');
            
            
            for (var i in arrayModulos) {
                var x = [arrayModulos[i].modulo];
                for(var j in arrayAux1){
                    if (arrayModulos[i].modulo == arrayAux1[j].modulo)
                        x.push(arrayAux1[j].permiso);    
                }
                arrayAux2.push(x);
            }

            arrayAux1.length = 0;   
            for (var i in arrayAux2) {
                var x = arrayAux2[i];
                var resultado = [x[0]];

                for (var j = 1; j < permisos.length; j++) {         
                    var index = x.indexOf(permisos[j]);
                    if (index < 0) {
                        index = "no";
                    }
                    else {
                        index = "si";
                    }
                    resultado.push(index);
                }
                arrayAux1.push(resultado);
            }

            vm.usuariox = arrayAux1;
            
            vm.infoRol = true;
            document.getElementById("body_index").style.overflow = "hidden";

        }


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
