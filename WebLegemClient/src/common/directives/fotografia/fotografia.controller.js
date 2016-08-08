
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("fotografiaController", fotografiaController);

    fotografiaController.$inject = ["language"]
    function fotografiaController(language) {
        var vm = this;

        vm.language = language;
        vm.foto = true;

        vm.cerrarCamara = cerrarCamara;
        vm.snapshot = snapshot;
        vm.repetirFoto = repetirFoto;
        vm.guardarFoto = guardarFoto;
        vm.startWebcam = startWebcam;
        vm.stopWebcam = stopWebcam;
        vm.iniciar = iniciar;

        // GET USER MEDIA CODE
        navigator.getUserMedia = (navigator.getUserMedia ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia ||
                           navigator.msGetUserMedia);

        var video;
        var webcamStream;
        var existe_canvas;
        var canvas, ctx;
        var img = document.getElementById("laimagen");
        var img2;

        function iniciar() {
            existe_canvas = false;
            canvas = document.getElementById("fotoUsu");// Get the canvas and obtain a context for
            ctx = canvas.getContext('2d');// drawing in it
            startWebcam();
            img2 = document.getElementById("aux_imagen");          
        }
        
        //----------------------------------------------------------------------------
        function cerrarCamara() {
            try {
                stopWebcam();
                existe_canvas = false;
                vm.foto = true;
                vm.show = false;
            }
            catch (error){
                console.log("Existe problemas con su camara");
                vm.show = false;
            }                 
        }
        //----------------------------------------------------------------------------
        function snapshot(){
            // Draws current image from the video element into the canvas
            try {
                if (existe_canvas == true) {
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    img2.src = canvas.toDataURL("image/jpeg");
                    vm.foto = !vm.foto;
                }
                
                else {
                    console.log("Active la camara");
                }
            }
            catch (error){
                console.log("Existe problemas con su camara");
            }
        }
        //----------------------------------------------------------------------------
        function repetirFoto() {
            canvas.width = canvas.width;//limpiar contenido del canvas  
            vm.foto = !vm.foto;
            existe_canvas = true;
        }
        //----------------------------------------------------------------------------
        function guardarFoto() {
            var canvasAux = document.createElement("canvas");
            canvasAux.id = "canvasAux";
            canvasAux.height = 170;
            canvasAux.width = 150;
            var context = canvasAux.getContext('2d');

            context.drawImage(img2, 85, 40, 150, 170, 0, 0, 150, 170);
            img.src = canvasAux.toDataURL("image/jpeg");
            img.style.visibility = "unset";

            var imageData = canvas.toDataURL('image/png');
            var params = "filename=" + imageData;

            document.getElementById("hidden_input").setAttribute("value", params);
            var files = document.getElementById("hidden_input");
            console.log(files);

            canvasAux.toBlob(function (image) { blob = image; });
            vm.foto = true;
            existe_canvas = false;
            cerrarCamara();
        }
        //----------------------------------------------------------------------------
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
                       existe_canvas = true;
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
        //----------------------------------------------------------------------------
        function stopWebcam() {
            webcamStream.getVideoTracks()[0].stop();
        }
        //----------------------------------------------------------------------------

        return vm;
                
    } // end controller
})();