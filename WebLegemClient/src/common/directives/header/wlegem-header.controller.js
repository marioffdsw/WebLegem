
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("headerController", headerController);

    headerController.$inject = ["screenSize","$state","$rootScope"];

    function headerController(screenSize,$state,$rootScope) {
        var vm = this;
        vm.$state = $state;
        vm.desplegarMenu = desplegarMenu;
        vm.desplegarAcce = desplegarAcce;

        vm.loggeado = true;
        vm.LogOut = LogOut;
        vm.scrollTop = scrollTop;
        vm.scrollTop2 = scrollTop2;
        vm.scrollNews = scrollNews;

        vm.usuario = { username: "admin", password: "1234", foto: "recursos/itachichibi.jpg" }

        //Items del Menu  ------------------------------------------------>>
        vm.arregloMenu = [
            {
                nombre: "Busqueda",
                icono: "ico-search",
                link: "busqueda",
                condicion: "true",
                accion: vm.scrollTop

            },
            {
                nombre: "Inicio",
                icono: "ico-home",
                link: "home",
                condicion: "true",
                accion: vm.scrollTop
            },
            //{
            //    nombre: "Actualidad",
            //    icono: "ico-newspaper-o",
            //    link: "home",
            //    condicion: "true",
            //    accion:vm.scrollNews
            //},
            {
                nombre: "Ingresar",
                icono: "ico-sign-in",
                link: "login",
                condicion: "!vm.loggeado",
                accion:vm.scrollTop
            }
        ];

        vm.arregloOpciones = [
            {
                nombre: "Gestión Documental",
                link: "gestion-documental.crear-documento.subir-archivo",
                icono: "ico-stack-overflow",
                condicion:"true"
            },
            {
                nombre: "Administración",
                link: "administracion.tipo-documento",
                icono: "ico-tasks",
                condicion:"true"
            },
            {
                nombre: "Usuarios",
                link: "usuarios.control-usuarios",
                icono: "ico-users",
                condicion:"true"
            },
            {
                nombre: "Anotaciones",
                link: "anotacion.crear-anotacion",
                icono: "ico-files-o",
                condicion: "true"
            },
            {
                nombre: "Auditoria",
                link: "auditoria.auditoria1",
                icono: "ico-files-o",
                condicion: "true"
            }
        ];


        //Fin Items del Menu  -------------------------------------------->>

        //Funciones del menu --------------------------------------------->>

        function LogOut() {
            $state.go("home");
            vm.opcionesAMostrar = vm.opcionesNoLoggeado;
            vm.loggeado = false;
        }

        //scroll to 0
        function scrollTop() {
            window.scrollTo(0, 0);
        }


        //scroll to 0
        function scrollTop2() {
            if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
                //que suba en 10% de la posicion de donde este
                window.scrollBy(0, -200);//LO QUE VA SUBIENDO
                arriba = setTimeout(scrollTop2, 10);//cada cuanto se ejecuta el metodo, entre mas pequeñomejor
            }
            else clearTimeout(arriba);
        }


        //scroll to news
        function scrollNews() {
            $state.go("home").then(

                window.setTimeout(function () {
                    window.scrollTo(0, 0);
                    var news = document.getElementById("news-section");
                    var posicion = news.getBoundingClientRect();
                    window.scrollTo(0, posicion.top);

                }), 1000);
        }

        //scroll solido

        var box_header;
        var ban_solido = false;
        var ban_arriba = false;
        var btn_arriba;
        var y;
        btn_arriba = document.getElementById('ir_arriba');
        box_header = document.getElementById('header1');

        window.onscroll = function () {
            y = document.documentElement.scrollTop;
            if (vm.$state.current.name == 'home')volverSolido();
            llevameArriba();
        };

        function volverSolido() {//Volver Solido ================================>

            if (y > 25 || document.body.scrollTop > 25) {
                if(!ban_solido){
                    box_header.classList.add('solido');
                    ban_solido = true;    
                }
            } 
            else if (y < 25 || document.body.scrollTop < 25){
                if (ban_solido) {
                    box_header.classList.remove('solido');
                    ban_solido = false;
                }
            }
        }

        //-------------------------------------------------------------------------------------------

        function llevameArriba() {// Llevarme arriba ============================>
            if (document.body.scrollTop > 600 || y > 600) {
                if (!ban_arriba) {
                    btn_arriba.classList.add('visible');
                    ban_arriba = true;
                }          
            }
            else if (document.body.scrollTop < 600 || y < 600) {
                if (ban_arriba) {
                    btn_arriba.classList.remove('visible');
                    ban_arriba = false;
                }
            }
        }

        //-------------------------------------------------------------------------------------------

        //Fin Funciones del menu ----------------------------------------->>



        //menu responsive------------------------------------------------->>
        screenSize.rules = {
            custom: '(max-width:768px)'
        }

        var menu = document.getElementsByClassName("ul_nav")[0];
        var toggle_btn = document.getElementById("toggle-menu");

        vm.resize = screenSize.on('custom',function (xmen) {
            vm.resize = xmen;
            vm.toggle_menu = false;
            vm.toggle_usu = false;
            vm.toggle_acce = false;

            menu.classList.remove("responsive");
            toggle_btn.classList.remove("responsive");
        });       

        function desplegarMenu() {

            vm.toggle_acce = false;
            menu.classList.toggle("responsive");
            toggle_btn.classList.toggle("responsive");
        }

        function desplegarAcce() {
            menu.classList.remove("responsive");
            vm.toggle_acce = !vm.toggle_acce;
            toggle_btn.classList.remove("responsive");
        }

        //Fin menu responsive---------------------------------------------->>



        //accesibilidad---------------------------------------------------->>
        vm.activo = activo;

        function activo($event) {
            
            if ($event.target.className.match(/(?:^|\s)activo(?!\S)/)) {
            }
            else {
                var size = $event.target.parentNode.getElementsByTagName('button').length;
                for (var i = 0; i < size; i++) {
                    $event.target.parentElement.getElementsByTagName('button')[i].classList.remove("activo");
                }
                $event.target.className += ' activo';
            }
        }

        //funcion tamaño de letra
        vm.funcion_tamano = function (v, $event) {
            vm.activo($event);
            var obj = document.getElementById("body_index");

            switch (v) {
                case "fuente1":
                    obj.style.fontSize = 120 + "%";
                    break;
                case "fuente2":
                    obj.style.fontSize = 110 + "%";
                    break;
                case "fuente3":
                    obj.style.fontSize = 100 + "%";
                    break;
            }
        };

        //funcion idioma
        vm.funcion_idioma = function (v, $event) {
            vm.activo($event);
            switch (v) {
                case "en":
                    break;
                case "es":
                    break;
            }
        };

        vm.$rootScope = $rootScope;
        //funcion contraste
        vm.funcion_contraste = function (v, $event) {
            vm.activo($event);
            switch (v) {
                case "bajo":
                    $rootScope.val_contraste = 1;
                    break;
                case "alto":
                    $rootScope.val_contraste = 0;
                    break;
            }

            
        };



    } // end controller
})();