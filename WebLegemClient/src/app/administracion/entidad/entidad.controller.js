(function () {
    "use strict";

    angular
        .module("WebLegemApp.Administracion")
        .controller("EntidadController", EntidadController);

    EntidadController.$inject = [ "TipoEntidadService", "EntidadService", "$scope" ];
    function EntidadController( TipoEntidadService, EntidadService, $scope ) {
        var vm = this;
        vm.tiposEntidad;
        vm.entidades;
        
        var estado = { nombre: "Entidad", enlace: "administracion.entidad" };
        var ban = false;
        var i = 0;

        while (!ban && i < $scope.$parent.vm.estados.length ) {
            if( $scope.$parent.vm.estados[i].nombre == estado.nombre  ){
                ban = true;
            }
            i++;
        }

        if ($scope.$parent.vm.estados.length > 1) {
            $scope.$parent.vm.estados.pop();
        }

        if (ban == false) {
            $scope.$parent.vm.estados.push(estado);
        }
        

        TipoEntidadService.query(function (data) {
            vm.tiposEntidad = data;
        });

        EntidadService.query(function (data) {
            vm.entidades = data;
        });

        vm.entidad = { id: 0, nombre: "Oficina Juridica", tipo: "interna" };                

    } // end TipoEntidadController

})();
