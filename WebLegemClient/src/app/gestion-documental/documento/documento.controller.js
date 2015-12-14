(function () {
    "use strict";

    angular
        .module("WebLegemApp.GestionDocumental")
        .controller("DocumentoController", DocumentoController);

    DocumentoController.$inject = ["TipoDocumentoResource", "EntidadService", "DocumentoResource", "FileUploader"];
    function DocumentoController(TipoDocumentoService, EntidadService, DocumentoResource,  FileUploader) {
        var vm = this;
        vm.entidadSeleccionada = { id: 0 };
        vm.tipoDocSeleccionado = { id: 0 };

        vm.documento = {
            docId: {
                entidad: 0,
                tipoDocumento: 0,
                numero: "1025",
                fechaPublicacion: "1999"
            },
            asunto: "Asunto",
            rutaAlArchivo: "ruta",
            nombreDocumentoProcesado: "nombre",
            fechaExpedicion: ""
        }
        

        vm.prueba = "Prueba";
        vm.uploader = new FileUploader({ url: "http://localhost:50349/api/Files/" });
        vm.crear = crear;

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

        function crear() {
            vm.documento.docId.entidad = vm.entidadSeleccionada.id;
            vm.documento.docId.tipoDocumento = vm.tipoDocSeleccionado.id;
            console.log(vm.documento);
            DocumentoResource.save(vm.documento, function (data) {
                console.log( data );
            });
        }

    } // end Documento Controller
})();