(function () {
    "use strict";

    angular
        .module("WebLegemApp.GestionDocumental")
        .controller("DocumentoController", DocumentoController);

    DocumentoController.$inject = ["TipoDocumentoResource", "EntidadService", "FileUploader"];
    function DocumentoController(TipoDocumentoService, EntidadService, FileUploader) {
        var vm = this;
        vm.documento = {
            docId: {
                entidad: 1,
                tipoDocumento: 1,
                numero: "1025",
                fechaPublicacion: "1999"
            },
            asunto: "Asunto",
            ruta: "ruta",
            nombre: "nombre"
        }

        vm.prueba = "Prueba";
        vm.uploader = new FileUploader({ url: "http://localhost:50349/api/Files/" });

        vm.uploader.onSuccessItem = function (item, response, status, headers) {
            vm.documento.rutaAlArchivo = response[0].path;
            vm.documento.nombreDocumentoProcesado = response[0].name;
            console.log( response );
        };

        TipoDocumentoService.query(function(data){
            vm.tiposDocumento = data;
        });

        EntidadService.query(function (data) {
            vm.entidades = data;
        });        
    } // end Documento Controller
})();