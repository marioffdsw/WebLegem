(function () {
    "use strict";

    angular
        .module("WebLegemApp.Busqueda")
        .controller("BusquedaController", BusquedaController);

    BusquedaController.$inject = [ "DocumentosResource" ];
    function BusquedaController( DocumentosResource ) {
        var vm = this;
        vm.palabrasABuscar = "";
        vm.anioPublicacion = "";
        vm.numero = "";
        vm.entidadEmisora = "";
        vm.tipoDocumento = "";
        vm.documentosEncontrados = [];
        vm.limpiar = limpiar;

        vm.cambiarTab = cambiarTab;
        vm.tab_1 = true;
        vm.tab_2 = false;
        

        vm.buscar = buscar;
        
        function buscar( palabras ) {
            // documentos service get + OData query

            var query = { $filter: "" };

            if (vm.anioPublicacion != "")
                query.$filter += "contains(AnioPublicacion, '" + vm.anioPublicacion + "')";

            if (vm.numero != "") 
                query.$filter += (query.$filter.length > 0 ? " and " : "") +
                    "contains(Numero, '" + vm.numero + "')";            

            if (vm.entidadEmisora != "")
                query.$filter += (query.$filter.length > 0 ? " and " : "") +
                    "contains(toupper(Entidad/Nombre), toupper('" + vm.entidadEmisora + "'))";            
            
            if (vm.tipoDocumento != "") 
                query.$filter += (query.$filter.length > 0 ? " and " : "") +
                    "contains(toupper(TipoDocumento/Nombre), toupper('" + vm.tipoDocumento + "'))";            

            if (query.$filter === "") 
                query = {};            

            if (palabras != "")
                query.palabrasABuscar = palabras;            

            DocumentosResource.query( query, function (data) {
                vm.documentosEncontrados = data;
            });

        } // fin function buscar

        function borrar_filtro(id) {
//            var li = document.getElementById(id).parentNode;
            console.log("hola");
           

        };

        function limpiar (){
            vm.anioPublicacion = "";
            vm.documentosEncontrados = [];
            vm.numero = "";
            vm.entidadEmisora = "";
            vm.tipoDocumento = "";
        }

        function cambiarTab(id_tab) {
            if (id_tab == 1) {
                vm.tab_1 = true;
                vm.tab_2 = false;
            }
            else {
                vm.tab_2 = true;
                vm.tab_1 = false;
            }
        }

        return vm;
    } // fin Busqueda Controller
})();