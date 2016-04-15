/// <reference path="   common/directives/fotografia/fotorgrafia.html" />
(function () {
    "use strict";

    angular
        .module("WebLegemApp.Usuarios")
        .controller("controlUsuariosController", controlUsuariosController)

    .directive('ewl', function ($parse) {
        return {
            restrict: 'A',
            scope: true,
            link: function (scope, element, attrs) {

                element.bind('load', function (e) {
                    scope.$apply(attrs.wlLoad);
                })
                element.bind('mouseenter', function (e) {
                    scope.$apply(attrs.wlHover);
                });

            }
        };
    });
        

    controlUsuariosController.$inject = ["$scope","$window"];

    function controlUsuariosController( $scope,$window) {
        var vm = this;
        vm.startWebcam = startWebcam;
        vm.stopWebcam = stopWebcam;
        vm.snapshot = snapshot;
        vm.guardarFoto = guardarFoto;
        vm.init = init;
        vm.abrirCamara = abrirCamara;
        vm.cerrarCamara = cerrarCamara;
        vm.repetirFoto = repetirFoto;
        vm.seleccionarArchivo = seleccionarArchivo;
        vm.foto = true;
        vm.trash = false;
        vm.cargarFoto = vm.cargarFoto;
        vm.pass_usu;

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
            mesureStrength: function (p) {
                var _force = 0;

                var _lowerLetters = /[a-z]+/.test(p);
                var _upperLetters = /[A-Z]+/.test(p);
                var _numbers = /[0-9]+/.test(p);    

                var _flags = [_lowerLetters, _upperLetters, _numbers];
                var _passedMatches = grep(_flags, function (el) { return el === true; }).length;
                
                _force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
                _force += _passedMatches * 10;

                // penality (short password)
                _force = (p.length <= 6) ? Math.min(_force, 10) : _force;

                // penality (poor variety of characters)
                _force = (_passedMatches == 1) ? Math.min(_force, 10) : _force;
                _force = (_passedMatches == 2) ? Math.min(_force, 20) : _force;

                return _force;
            },

            getColor: function (s) {

            var idx = 0;
            if (s <= 10) { idx = 0; }
            else if (s <= 20) { idx = 1; }
            else if (s <= 30) { idx = 2; }
            else if (s <= 40) { idx = 3; }
            else { idx = 4; }

            return { idx: idx + 1, col: this.colors[idx] };

        }

        }
        
        $scope.$watch('vm.pass_usu', function () {
            var widget_seguridad = document.getElementById("widget_seguridad");
            if(vm.pass_usu ===''){
                widget_seguridad.style.display = "none";
            }
            else {
                var c = strength.getColor(strength.mesureStrength(vm.pass_usu));
                console.log(c);
                widget_seguridad.style.display = "unset";

                if (vm.pass_usu == "a") {
                    widget_seguridad.style.display = "unset";
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
            vm.camaraToggle = !vm.camaraToggle;
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
