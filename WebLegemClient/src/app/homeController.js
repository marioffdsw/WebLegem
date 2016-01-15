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
                texto: "Ingresar",
                estado: "login"
            },       
            {
                texto: "Inicio",
                estado: "home"
            },
        ];

        vm.opcionesLoggeado = [
        {
                texto: vm.usuario.username,
                estado: "home",
                subEstados: [
                    {
                        texto: "Salir",
                        estado: "home",
                        click: LogOut
                    }
                ]
            },                       
            {
                texto: "Gestión Documental",
                estado: "gestion-documental.crear-documento.subir-archivo"
            },
            {
                texto: "Administración",
                estado: "administracion.tipo-documento",
                subEstados: [
                    {
                        texto: "Tipos Documento",
                        estado: "administracion.tipo-documento"
                    },
                    {
                        texto: "Tipos Entidades",
                        estado: "administracion.tipo-entidad"
                    },
                    {
                        texto: "Entidades",
                        estado: "administracion.entidad"
                    }
                ],

            },         
            {
                texto: "Inicio",
                estado: "home"
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