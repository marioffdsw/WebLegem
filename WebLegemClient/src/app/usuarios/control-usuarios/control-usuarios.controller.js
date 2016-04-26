(function () {
    "use strict";

    angular
        .module("WebLegemApp.Usuarios")
        .controller("controlUsuariosController", controlUsuariosController)    
        

    controlUsuariosController.$inject = ["$scope", "$window", "UsuariosResource"];

    function controlUsuariosController($scope, $window, UsuariosResource) {
        var vm = this;
        vm.editando = false;
        vm.seleccionar = seleccionar;
        vm.cancelar = cancelar;
        vm.nuevo = nuevo;


        vm.startWebcam = startWebcam;
        vm.stopWebcam = stopWebcam;
        vm.snapshot = snapshot;
        vm.guardarFoto = guardarFoto;
        vm.init = init;
        vm.abrirCamara = abrirCamara;
        vm.cerrarCamara = cerrarCamara;
        vm.repetirFoto = repetirFoto;
        vm.seleccionarArchivo = seleccionarArchivo;
        vm.usuarios;
        vm.aceptar = aceptar;
        vm.remover = eliminar;

        vm.foto = true;
        vm.trash = false;
        vm.cargarFoto = vm.cargarFoto;
        vm.pass_usu;
        
        RetrieveData();

        function RetrieveData() {
            UsuariosResource.query(function (data) {
                vm.usuarios = data;
            });
        } // end function RetrieveData
       
        function seleccionar(usuario) {            
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
            if (vm.usuarioSeleccionado.id === 0)
                return crear( vm.usuarioSeleccionado );
            guardar( vm.usuarioSeleccionado );
        } // end function

        function crear(usuario) {
            UsuariosResource.save(usuario, function (data) {
                RetrieveData();
            });
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
            vm.pass_usu = "";
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
        
        $scope.$watch('vm.pass_usu', function () {
            var widget_seguridad = document.getElementById("widget_seguridad");
            var content_span = document.getElementById("content_span");
            if (vm.pass_usu === '') {
                widget_seguridad.style.display = "none";
            }
            else {
                var c = strength.getColor(strength.mesureStrength(vm.pass_usu));
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

            leerArchivo.onloadstart = function (e) {
                
            };

            leerArchivo.onload = function (e) {
                img.src = e.target.result;

            };
            //console.log(f.name);//nombreArchivo
            leerArchivo.readAsDataURL(f);//para q el archivo sea leido 
        };



        function abrirCamara() {
            vm.camaraToggle = true;
            init();
            startWebcam();
        };


        function cerrarCamara() {
            vm.camaraToggle = false;
            stopWebcam();
        };
 

        //++++++++++++++++++++++++++++++++++++

        //--------------------
        // GET USER MEDIA CODE
        //--------------------
        navigator.getUserMedia = (navigator.getUserMedia ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia ||
                           navigator.msGetUserMedia);

        var video;
        var webcamStream;
        var copia;

        function startWebcam() {
            if (navigator.getUserMedia) {
                navigator.getUserMedia(

                   // constraints
                   {
                       video: true,
                       audio: false
                   },

                   // successCallback
                   function (localMediaStream) {
                       video = document.getElementById("camaraUsu");
                       video.src = window.URL.createObjectURL(localMediaStream);
                       webcamStream = localMediaStream;
                   },


                   // errorCallback
                   function (err) {
                       console.log("The following error occured: " + err);
                   }
                );
            } else {
                console.log("getUserMedia not supported");
            }
        }

        function stopWebcam() {
            webcamStream.getVideoTracks()[0].stop();
        }
        //---------------------
        // TAKE A SNAPSHOT CODE
        //---------------------
        var canvas, ctx;
        var img = document.getElementById("laimagen");
        
        function init() {
            // Get the canvas and obtain a context for
            // drawing in it
            vm.foto = true;
            canvas = document.getElementById("fotoUsu");
            ctx = canvas.getContext('2d');
        }

        function snapshot() {
            // Draws current image from the video element into the canvas
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            img.src = canvas.toDataURL("../../../common/directives/fotografia/png");
        }

        function guardarFoto() {
            var canvasAux = document.createElement("canvas");
            canvasAux.id = "canvasAux";
            canvasAux.height = 170;
            canvasAux.width = 150;
            var context = canvasAux.getContext('2d');

            context.drawImage(img,85, 40, 150, 170, 0, 0, 150, 170);
            img.src = canvasAux.toDataURL("../../../common/directives/fotografia/png");
            img.style.visibility = "unset";
        }

        function repetirFoto() {
            canvas.width = canvas.width;//limpiar contenido del canvas  
        }
    } // end TipoEntidadController

})();
