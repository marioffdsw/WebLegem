/// <reference path="   common/directives/fotografia/fotorgrafia.html" />
(function () {
    "use strict";

    angular
        .module("WebLegemApp.Usuarios")
        .controller("controlUsuariosController", controlUsuariosController)
        .directive("ngWlonload", function ($window) {
            return {
                scope: {
                    ngWlonload: "="
                },
                link: function ($scope, element, attrs) {
                    angular.element($window).on("load", function () {
                        $scope.ngWlonload = "Smith";
                        $scope.$apply();
                    });
                }
            }
        })

            .directive("ngWlonchange", function ($window) {
                return {
                    scope: {
                        ngWlonchange: "="
                    },
                    link: function ($scope, element, attrs) {
                        angular.element($window).on("change", function () {
                            $scope.ngWlonchange = "Smith";
                            $scope.$apply();
                        });
                    }
                }
            })

    .directive('ewl', function ($parse) {
        return {
            restrict: 'A',
            scope: true,
            link: function (scope, element, attrs) {

                element.bind('click', function (e) {
                    scope.$apply(attrs.wlOnload);
                })
                element.bind('mouseenter', function (e) {
                    scope.$apply(attrs.wlOnhover);
                });
            }
        };
    });
        

    controlUsuariosController.$inject = ["$scope","$window","$parse"];

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
        vm.unavez = unavez;
        vm.foto = true;
        vm.trash = false;
        vm.name = "John";
        vm.cargarFoto = vm.cargarFoto;

        vm.doIt = function () {
            alert('hihola');
        }
        vm.doIts = function () {
            alert('homero');
        };

        var btn_input = document.getElementById("input_usu_foto");

        btn_input.onchange = cargarFoto;//existe otra forma de asignar eventos, pero con angular 
        //al parecer no funciona (addevenlistener)

        var img2 = $window.document.getElementById("laimagen");
        img2.onload = holamundo;

        function unavez() {
        }


        function holamundo() {
            console.log(vm.trash);
        }

        

        function seleccionarArchivo() {
            btn_input.click();
            img2.onload = holamundo(vm);
        };


        function cargarFoto(e) {

            var files = e.target.files;
            var f = files[0];
            var leerArchivo = new FileReader();
            var img = document.getElementById("laimagen");            

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
            trash = true;
        }

        function repetirFoto() {
            canvas.width = canvas.width;//limpiar contenido del canvas  
        }
    } // end TipoEntidadController

})();
