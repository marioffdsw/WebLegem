(function () {
    "use strict";

    angular
        .module("WebLegemApp.GestionDocumental")
        .controller("DocumentoController", DocumentoController);

    DocumentoController.$inject = ["TipoDocumentoResource", "EntidadService", "DocumentosResource", "FileUploader", "$state","language", "$resource", "serviceUrl"];
    function DocumentoController(TipoDocumentoService, EntidadService, DocumentoResource,  FileUploader, $state,language, $resource, serviceUrl) {
        var vm = this;
        vm.language = language;
        vm.entidadSeleccionada = { id: 0 };
        vm.tipoDocSeleccionado = { id: 0 };
        vm.aceptar = aceptar;
        vm.validarDocumento = validarDocumento;
        vm.default = "Seleccione una opción";
        vm.errorType = false;
        vm.existDocument = false;

        vm.validarArchivo = validarArchivo;

        vm.documento = {
            id: 0,
            entidad: 0,
            tipoDocumento: 0,
            numero: "",
            fechaPublicacion: new Date(),
            idContenido: 0,
            archivo: 0,
            asunto: "",
            ruta: "",            
            //fechaExpedicion: ""
        };
                
        vm.uploader = new FileUploader({ url: serviceUrl + "/Files/" });
        vm.crear = crear;

        vm.uploader.onSuccessItem = function (item, response, status, headers) {            
            vm.documento.asunto = response[0].result;            
            vm.documento.ruta = response[0].path;
            vm.documento.archivo = response[0].name;
            vm.documento.archivoGuid = response[0].guid
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
            vm.uploader = new FileUploader({ url: serviceUrl + "/Files/" } );
        };

        vm.uploader.onCompleteItem = function (item, response, status, headers) {
            vm.uploader.clearQueue();
            vm.uploader = new FileUploader({ url: serviceUrl + "/Files/" });
            console.log(response);
            console.log(status);
            console.log( headers );
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
            vm.documento.entidad.id = vm.entidadSeleccionada.id;
            vm.documento.tipoDocumento.id = vm.tipoDocSeleccionado.id;
            vm.documento.numero = vm.numero;
            vm.documento.asunto = vm.asunto;
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

        function aceptar() {
            
            console.log( vm.documento );
            $state.go("gestion-documental.crear-documento.resultado");

            $resource(serviceUrl + "/Contenido")
                .save(vm.documento)
                .$promise
                .then(function (data) {
                    vm.error = "";
                    vm.success = true;
                })
                .catch(function (response) {
                    console.log( response );
                });

            //DocumentoResource.save(vm.documento, function exitoAlCrearDocumento (data) {
            //    vm.error = "";
            //    vm.success = true;
            //    //alert("¡Felicidades!, El documento ha sido añadido con exito\nAhora regresara a la pantalla principal");
            //}, function problemaCreandoDocumento () {
            //    vm.error = "Error subiendo el documento";
            //});
        }

        function validarDocumento() {


            if (vm.form_info_doc.numero.$invalid == true || vm.form_info_doc.fecha.$invalid == true ||
                vm.documento.entidad == 0 || vm.documento.tipoDocumento == 0) {

                vm.documento.entidad == 0 ? vm.form_info_doc.entidad.$invalid = true : '';
                vm.documento.tipoDocumento == 0 ? vm.form_info_doc.tipo_doc.$invalid = true : '';
                vm.form_info_doc.numero.$invalid ? vm.form_info_doc.numero.$dirty = true : '';
                vm.form_info_doc.fecha.$invalid ? vm.form_info_doc.fecha.$dirty = true : '';
            }
            else {
                $resource(serviceUrl + "/Documento/Identificador")
                .save(vm.documento)
                .$promise
                .then(function (data) {
                    console.log(data);
                    vm.documentoGuid = data;
                    vm.error = "";
                    $state.go("gestion-documental.crear-documento.asunto");
                })
                .catch(function (response) {
                    if (response.statusCode = 409) {
                        vm.error = response.errorMessage;
                    } // end if
                });
            }

                        

            //var query = { $filter: ""};
            //query.$filter = //"contains(FechPublicacion, '" + vm.documento.anioPublicacion + "')" +
            //    "contains(Numero, '" + vm.documento.numero + "')" +
            //    " and Entidad/Id eq " + vm.documento.entidad.id +
            //    " and TipoDocumento/Id eq " + vm.documento.tipoDocumento.id;

            //DocumentoResource.query(query, function (data) {
                
            //    // existe un documento con el mismo identificador?
            //    if (data.length && data.length == 1 &&
            //        data[0].numero == vm.documento.numero &&
            //        data[0].tipoDocumento.id == vm.documento.tipoDocumento.id &&
            //        data[0].entidad.id == vm.documento.entidad.id) {
            //        vm.error = "el documento ya existe";
            //    }
            //    else { // si no existe, el documento sera introducido por primera vez, puede avanzar
            //        vm.error = "";
            //        $state.go("gestion-documental.crear-documento.asunto");
            //    }
            //}, function (error) {
            //    console.log(error);
            //});                       
        }

        function validarArchivo() {
            var fname = document.getElementById('fileType').innerHTML;
            var re = /(\.jpg|\.jpeg|\.bmp|\.gif|\.png)$/i;
            var rex = /(\.gif)$/i;
            if (fname == "") {
                vm.errorType = false;
                vm.existDocument = true;

            }
            else if(!rex.exec(fname))
            {
                vm.existDocument = false;
                vm.errorType = true;
            }
            else {
                vm.existDocument = false;
                vm.errorType = false;
                $state.go("gestion-documental.crear-documento.informacion-documento");
            }
            
        }

    } // end Documento Controller
})();