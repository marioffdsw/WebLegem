(function () {
    "use strict";

    angular
        .module("WebLegemApp.GestionDocumental")
        .controller("DocumentoController", DocumentoController);

    DocumentoController.$inject = ["TipoDocumentoResource", "EntidadService", "DocumentoResource", "FileUploader", "$state" , "$scope"];
    function DocumentoController(TipoDocumentoService, EntidadService, DocumentoResource,  FileUploader, $state, $scope) {
        var vm = this;
        vm.entidadSeleccionada = { id: 0 };
        vm.tipoDocSeleccionado = { id: 0 };
        
        var estadoActual = 0;

        var estadosArchivo = [
            {
                estado: { nombre: "Subir Documento", enlace: "gestion-documental.crear-documento.subir-archivo", limpiarEstados: limpiarEstados },
                preparar: function () {
                    vm.documento = {};
                }
            },
            {
                estado: { nombre: "Información Documento", enlace: "gestion-documental.crear-documento.informacion-documento", limpiarEstados: limpiarEstados },
                preparar: function(){
                    vm.documento = {};
                }
            },
            {
                estado: { nombre: "Asunto", enlace: "gestion-documental.crear-documento.asunto", limpiarEstados: limpiarEstados },
                preparar: function () {
                    vm.documento = {};
                }
            }
        ];


        $scope.$parent.vm.estados.push( estadosArchivo[0].estado );

        vm.documento = {
            docId: {
                entidad: 0,
                tipoDocumento: 0,
                numero: "",
                fechaPublicacion: ""
            },
            asunto: "",
            rutaAlArchivo: "ruta",
            nombreDocumentoProcesado: "nombre",
            fechaExpedicion: ""
        }
                
        vm.uploader = new FileUploader({ url: "http://localhost:50349/api/Files/" });
        vm.crear = crear;

        vm.uploader.onSuccessItem = function (item, response, status, headers) {
            vm.documento.rutaAlArchivo = response[0].path;
            vm.documento.nombreDocumentoProcesado = response[0].name;
            vm.documento.resultadoOcr = response[0].result;
            console.log( response );
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

        vm.avanzar = avanzar;        

        function dialogo() {
            alert("¡Felicidades!, El documento ha sido añadido con exito\nAhora regresara a la pantalla principal");
            $state.go( "home" );
        } // end function dialogo

        function cancelar() {
            $state.go( "home" );
        } // end function cancelar

        function avanzar( posicion ) {
            estadoActual = posicion;
            estadosArchivo[estadoActual].preparar();
            $scope.$parent.vm.estados.push( estadosArchivo[estadoActual].estado );
            $state.go( estadosArchivo[estadoActual].estado.enlace );
        } // end function

        function limpiarEstados( posicion ) {
            while ($scope.$parent.vm.estados.length > posicion + 1) {
                $scope.$parent.vm.estados.pop();
            } // end while
            $state.go( $scope.$parent.vm.estados[posicion].enlace  );
        } // end function limpiarEstados

    } // end Documento Controller
})();