
(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("headerController", headerController);

    headerController.$inject = ["screenSize","$state"];

    function headerController(screenSize,$state) {
        var vm = this;
        vm.$state = $state;
        vm.desplegarMenu = desplegarMenu;
        vm.loggeado = true;
        vm.LogOut = LogOut;

        vm.usuario = { username: "admin", password: "1234", foto: "recursos/itachichibi.jpg" }

        //Items del Menu  ------------------------------------------------>>
        vm.arregloMenu = [
            {
                nombre: "Busqueda",
                icono: "ico-search",
                link: "busqueda",
                condicion: "vm.$state.current.name !='busqueda'"
            },
            {
                nombre: "Inicio",
                icono: "ico-home",
                link: "home",
                condicion: "true"
            },
            {
                nombre: "Actualidad",
                icono: "ico-newspaper-o",
                link: "home",
                condicion: "true"
            },
            {
                nombre: "Ingresar",
                icono: "ico-sign-in",
                link: "login",
                condicion: "!vm.loggeado"
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
                link: "usuarios",
                icono: "ico-users",
                condicion:"true"
            }
        ];


        //Fin Items del Menu  -------------------------------------------->>

        //Funciones del menu --------------------------------------------->>

        function LogOut() {
            $state.go("home");
            vm.opcionesAMostrar = vm.opcionesNoLoggeado;
            vm.loggeado = false;
        }

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
            menu.classList.remove("responsive");
            toggle_btn.classList.remove("responsive");
        });       

        function desplegarMenu() {
            menu.classList.toggle("responsive");
            toggle_btn.classList.toggle("responsive");
        }

        //Fin menu responsive---------------------------------------------->>
    } // end controller
})();