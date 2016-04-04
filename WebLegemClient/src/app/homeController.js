(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("homeController", homeController);

    homeController.$inject = ["$state", "DocumentosResource", "$anchorScroll", "$location", "EntidadService", "fileId"];

    function homeController($state, DocumentosResource, $anchorScroll, $location, EntidadService, fileId) {
        var vm = this;
        var btn_arriba;
        var box_header;
        var box_header2;

        vm.load = load;
        vm.$state = $state;
        vm.scrollTo = function (id) {
            $location.hash(id);
            $anchorScroll();
        }

        vm.cargarDocumentos = cargarDocumentos;

        function load() {
            btn_arriba = document.getElementById('ir_arriba');
            box_header = document.getElementById('header1');
        }


        
        window.onscroll = function () { llevameArriba(); volverSolido(); };

        function llevameArriba() {//funcion llevame arriba
            if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
                btn_arriba.classList.add('visible');
            } else {
                btn_arriba.classList.remove('visible');
            }
        }

        function volverSolido() {//Vuelve solido el header
            if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25){
                box_header.classList.add('solido');                
            } else {
                box_header.classList.remove('solido');                
            }
        }
        
     



        EntidadService.query(function (data) {
            vm.entidades = data;
        });

        vm.tamano_letra = 'btn_tamano0';
        vm.val_tamano = 0;

        vm.idioma = "Español";
        vm.clase_idioma = "btn_tamano0";
        vm.val_idioma = 0;

        vm.icono_contraste = "ico-moon-o";
        vm.clase_contraste = "btn_tamano0";
        vm.val_contraste = 0;
        vm.documentos = [];
        vm.verDocumento = verDocumento;

        vm.loggeado = true;
        vm.LogOut = LogOut;
        vm.usuario = { username: "admin", password: "1234" }

        DocumentosResource.query({ $top: 14 },function (data) {
            vm.documentos = data;
        });


        vm.opcionesNoLoggeado = [
            {
                texto: "Ingresar",
                estado: "login"
            },
            {
                texto: "Inicio",
                estado: "home"
            },
            {
                texto: "busqueda",
                estado: "busqueda"
            },
        ];

        vm.opcionesLoggeado = [
            {
                texto: vm.usuario.username,
                estado: "home",
                click: LogOut,
                //subEstados: [
                //    {
                //        texto: "Salir",
                //        estado: "home",
                //        click: LogOut
                //    }
                //]
            },
            {
                texto: "Gestión Documental",
                estado: "gestion-documental.crear-documento.subir-archivo"
            },
            {
                texto: "Administración",
                estado: "administracion.tipo-documento"
            },
            {
                texto: "Usuarios",
                estado:"usuarios"
            }
        ];

        vm.opcionesAMostrar =  vm.loggeado ? vm.opcionesLoggeado : vm.opcionesNoLoggeado;

        function LogOut() {
            $state.go("home");
            vm.opcionesAMostrar = vm.opcionesNoLoggeado;
            vm.loggeado = false;
        }

        vm.funcion_tamano = function () {

            var obj = document.getElementById("body_index");

            switch (vm.val_tamano){
                case 0:
                    vm.tamano_letra = 'btn_tamano1';
                    vm.val_tamano = 1;
                    obj.style.fontSize = 110 + "%";
                    break;
                case 1:
                    vm.tamano_letra = 'btn_tamano2';
                    vm.val_tamano = 2;
                    obj.style.fontSize = 120 + "%";
                    break;
                case 2:
                    vm.tamano_letra = 'btn_tamano0';
                    vm.val_tamano = 0;
                    obj.style.fontSize = 100 + "%";
                    break;
            }
        };

        vm.funcion_idioma = function () {

            switch (vm.val_idioma) {
                case 0:
                    vm.clase_idioma = 'btn_tamano2_a';
                    vm.idioma = "Ingles";
                    vm.val_idioma = 1;
                    break;
                case 1:
                    vm.clase_idioma = 'btn_tamano0';
                    vm.idioma = "Español";
                    vm.val_idioma = 0;
                    break;
            }
        };

        vm.funcion_contraste = function () {

            switch (vm.val_contraste) {
                case 0:
                    vm.icono_contraste = 'ico-moon-o';
                    vm.clase_contraste = 'btn_tamano2';
                    //cambiar los estilos
                    vm.val_contraste = 1;
                    break;
                case 1:
                    vm.icono_contraste = 'ico-sun-o';
                    vm.clase_contraste = 'btn_tamano0';
                    //cambiar los estilos
                    vm.val_contraste = 0;
                    break;
            }
        };

        function cargarDocumentos() {
            console.log( vm.entidadFiltro);
            if (vm.entidadFiltro !== "Ninguna") {
                DocumentosResource.query({ $filter: "contains(toupper(Entidad/Nombre), toupper('" + vm.entidadFiltro + "'))" },
                    function (data) {
                        vm.documentos = data;
                    });
            }
            else {
                DocumentosResource.query(function (data) {
                    vm.documentos = data;
                });
            }
        }

        function verDocumento(archivoId) {
            if (archivoId > 0) {
                fileId.id = archivoId
                $state.go("ver-documento");
            }
        } // fin function verDocumento


    } // end TipoEntidadController



})();
