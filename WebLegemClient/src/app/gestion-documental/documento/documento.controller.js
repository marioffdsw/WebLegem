(function () {
    "use strict";

    angular
        .module("WebLegemApp.GestionDocumental")
        .controller("DocumentoController", DocumentoController);

    DocumentoController.$inject = ["TipoDocumentoResource", "EntidadService", "DocumentosResource", "FileUploader", "$state"];
    function DocumentoController(TipoDocumentoService, EntidadService, DocumentoResource,  FileUploader, $state) {
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
        };
                
        vm.uploader = new FileUploader({ url: "http://localhost:50555/api/Files/" });
        vm.crear = crear;

        vm.uploader.onSuccessItem = function (item, response, status, headers) {
            vm.documento.rutaAlArchivo = response[0].path;
            vm.documento.nombreDocumentoProcesado = response[0].name;
            vm.documento.resultadoOcr = response[0].result;
            console.log( response );
        };

        vm.uploader.autoUpload = true;
        vm.uploader.removeAfterUpload = true;

        //vm.uploader.onAfterAddingFile = function (item) {
        //    vm.uploader.uploadAll();
        //};

        vm.uploader.onConpleteAll = function () {
            vm.uploader.clearQueue();
        };

        vm.uploader.onErorItem = function (item, response, status, headers) {
            vm.uploader.clearQueue();
        };

        vm.uploader.onCompleteItem = function (item, response, status, headers) {
            vm.uploader.clearQueue();
            vm.uploader = new FileUploader({ url: "http://localhost:50555/api/Files/" });
        };

        vm.dialogo = dialogo;
        vm.cancelar = cancelar;

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

        function dialogo() {
            alert("¡Felicidades!, El documento ha sido añadido con exito\nAhora regresara a la pantalla principal");
            $state.go( "home" );
        } // end method dialogo

        function cancelar() {
            $state.go( "home" );
        } // end function cancelar

    } // end Documento Controller
})();