(function () {
    "use strict";

    angular
        .module("WebLegemApp.Administracion")
        .controller("TipoEntidadController", TipoEntidadController);

    TipoEntidadController.$inject = [ "TipoEntidadService" ];
    function TipoEntidadController( TipoEntidadService ) {
        var vm = this;        

        vm.tipoEntidad = { id: 0, nombre: "Oficina Juridica", tipo: "interna"};

        TipoEntidadService.query(function (data) {
            vm.tiposEntidad = data;
        });
       
    } // end TipoEntidadController

})();
