(function(){
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("CuentaController", CuentaController);

    CuentaController.$inject = ["language", "$window", "serviceUrl"];
    function CuentaController(language, $window, serviceUrl) {
        var vm = this;
        vm.language = language;
        vm.abrirCamara = abrirCamara;
        vm.mostrarFoto = mostrarFoto;
        vm.borrarFoto = borrarFoto;
        vm.seleccionarArchivo = seleccionarArchivo;

        var img = $window.document.getElementById("laimagen");
        var btn_input = document.getElementById("input_usu_foto");
        btn_input.onchange = cargarFoto;
        
        vm.nombre = "pedro";
        vm.apellido = "perez";
        vm.correo = "pepito@hotmail.com";
        vm.contrasena = "123";


        //---------------------------------------------------
        function seleccionarArchivo() {
            console.log("hola");
            btn_input.click();
        };
        //---------------------------------------------------
        function borrarFoto() {
            img.src = "";
            vm.trash = false;
            img.style.visibility = "hidden";
        };
        //---------------------------------------------------
        function mostrarFoto() {
            vm.trash = true;
            img.style.visibility = " unset";
        }
        //---------------------------------------------------
        function abrirCamara() {
            vm.camaraToggle = true;
        };
        //---------------------------------------------------
        function cargarFoto(e) {

            var files = e.target.files;
            var f = files[0];
            var leerArchivo = new FileReader();

            leerArchivo.onload = function (e) {
                img.src = e.target.result;
            };

            //console.log(f.name);//nombreArchivo
            leerArchivo.readAsDataURL(f);//para q el archivo sea leido            
        };
        //--------------------------------------------------

        return vm;
    } // end controller

})();