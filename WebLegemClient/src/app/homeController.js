(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .controller("homeController", homeController);

    homeController.$inject = ["$state", "DocumentosResource", "$anchorScroll", "$location", "EntidadService", "fileId", "contraste"];

    function homeController($state, DocumentosResource, $anchorScroll, $location, EntidadService, fileId, contraste ) {
        var vm = this;
        vm.$state = $state;

        vm.cargarDocumentos = cargarDocumentos;
        //-------------------------------------------------------------------------------------------


        EntidadService.query(function (data) {
            vm.entidades = data;
        });

        vm.documentos = [];
        vm.verDocumento = verDocumento;
        

        DocumentosResource.query({ $top: 14 },function (data) {
            vm.documentos = data;
        });

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
