﻿(function () {
    "use strict";

    angular
        .module("WebLegemApp.Usuarios")
        .controller("controlUsuariosController", controlUsuariosController)    
        

    controlUsuariosController.$inject = ["$scope", "$window", "UsuariosResource", "RolResource", "serviceUrl", "_", "language"];

    function controlUsuariosController($scope, $window, UsuariosResource, RolResource, serviceUrl, _, language) {
        var vm = this;
        var blob;        

        vm.language = language;
        vm.subido = false;

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

            console.log( vm.usuarioSeleccionado );

            if (vm.usuarioSeleccionado.id === 0)
                return crear( vm.usuarioSeleccionado );
            guardar( vm.usuarioSeleccionado );            
        } // end function

        function crear(usuario) {            
            var fileInput = document.querySelector("#hidden_input");
            var xhr = new XMLHttpRequest();
            xhr.open('POST', serviceUrl + '/Files'); // with form data

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

            //form.append('file', fileInput);
            form.append('file', blob);
            form.append('fileName', 'image' + '.png');
            xhr.setRequestHeader( 'FileName', 'image' + '.png' );
            ////send the request
            //xhr.send(form);            

            //xhr.setRequestHeader("Content-type", "multipart/form-data");
            xhr.send(form);

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
        } // end function cancelar

        var img = $window.document.getElementById("laimagen");
        var btn_input = document.getElementById("input_usu_foto");
        btn_input.onchange = cargarFoto;


        /*......Seguridad Widget......*/
        var grep = function(arr, callback) {
            var newArr = [],
                len = arr.length,
                i;
            for (i = 0; i < len; i++) {
                var e = arr[i];
                if (callback(e)) {
                    newArr.push(e);
                }
            }
            return newArr;
        }

        var strength = {
            colors: ['#F00', '#F90', '#FF0', '#9F0', '#0F0'],
            valors: ['muy bajo','bajo','medio','alto','muy alto'],
            mesureStrength: function (p) {
                var _force = 0;

                var _lowerLetters = /[a-z]+/.test(p);
                var _upperLetters = /[A-Z]+/.test(p);
                var _numbers = /[0-9]+/.test(p);
                var _regex = /[$-/:-?{-~!"^_`\[\]]/g.test(p);

                var _flags = [_lowerLetters, _upperLetters, _numbers,_regex];
                var _passedMatches = grep(_flags, function (el) { return el === true; }).length;
                var _long = p.length;

                p.length >= 10 ? _force += 20 : p.length >= 6 ? _force += 10 : _force -= 5;
                _force += _passedMatches * 10;

                return _force;
            },

            getColor: function (s) {
                var idx = 1;
                var val = 'muy bajo';
                if (s >= 60) { idx = 5; }
                else if (s >= 50) { idx = 4; }
                else if (s >= 40) { idx = 3; }
                else if (s >= 30) { idx = 2; }
                else { idx = 1; }
                return {
                    idx: idx, col: this.colors[idx-1], val: this.valors[idx-1] 
                };
            }

        }
        
        $scope.$watch('vm.usuarioSeleccionado.contrasena', function () {
            var widget_seguridad = document.getElementById("widget_seguridad");
            var content_span = document.getElementById("content_span");
            if (vm.usuarioSeleccionado.contrasena === '') {
                widget_seguridad.style.display = "none";
            }
            else {
                var c = strength.getColor(strength.mesureStrength(vm.usuarioSeleccionado.contrasena));
                vm.val_seguridad = c.val;
                
                widget_seguridad.style.display = "unset";
                var spans = content_span.getElementsByTagName("span");
                for (var i = 0 ; i < spans.length ; i++) {
                    spans[i].style.background = "#DDD";
                }
                for (var i=0; i < c.idx ;i++) {
                    spans[i].style.background = c.col;
                }
            }
        }, true);

        /*....Fin Seguridad Widget......*/

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
    } // end TipoEntidadController

})();
