(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("homeController", homeController);

    homeController.$inject = [ "$state" ];
    function homeController( $state ) {
        var vm = this;
        vm.a = "recursos/botones/jv.png";
        vm.loggeado = true;
        vm.usuario = { username:"admin", password: "1234" }

        vm.opcionesNoLoggeado = [
            {
                texto: "Inicio",
                estado: "home"
            },
            {
                texto: "Buscar",
                estado: "busqueda"
            },
            {
                texto: "Ingresar",
                estado: "login"
            },
        ];

        vm.opcionesLoggeado = [
            {
                texto: "Administración",
                estado: "administracion"
            },
            {
                texto: "Gestión Documental",
                estado: "gestion-documental.crear-documento.subir-archivo"
            },
            {
                texto: "Buscar",
                estado: "busqueda"
            },
            {
                texto: "Salir",
                estado: "home",
                click: LogOut
            },
        ];

        vm.opcionesAMostrar =  vm.loggeado ? vm.opcionesLoggeado : vm.opcionesNoLoggeado;

        function LogOut() {
            $state.go("home");
            vm.opcionesAMostrar = vm.opcionesNoLoggeado;
        }

        

        vm.funcionPerro = function () {
            if (vm.a=="recursos/botones/jv.png") {
                vm.a = "recursos/botones/path4.png";
            }
            else {
                vm.a = "recursos/botones/jv.png";
            }
        };

    } // end TipoEntidadController

})();