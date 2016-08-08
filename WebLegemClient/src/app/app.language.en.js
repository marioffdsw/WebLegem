(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .constant("en", {
            contraste: "Contrast",
            idioma: "Language",
            tamanoFuente: "Font Size",
            spa: "Español",
            eng: "English",
            listadoTiposDocumento: "Document Type List",
            //-------------Entidad---------//
            NombreEntidad: "Entity name",
            IngreseNombreEntidad: "Enter the name of txhe entity",
            TipoEntidad: "Entity Type",
            ListaEntidades: "List of entities",
            ListaTipoEntidades: "Listde type of entities",
            //-----------Tipos_entidad---------------------//
            NombreTipoEntidad: "Type name of the entity",
            IngreseNombreTipoEntidad: "Enter the entity type name",
            //-------------Tipo_documneto-------//
            NombreTipoDocumento: "Document type name",
            //---------------------administracion-------------//
            TipoDocumento: "Document type",
            Entidad: "Entity",
            //--------------crear anotacion----------//
            SeleccionarDocumentoAnota:"Select document that notes",
            NoEncontroNingunDocumentoConIdentificacion: "No document found with that identification",
            SeleccioneDocumentoAnotara:"Select the document which will be recorded",
            CompleteDatosCrearDocumento:"Complete data to create the document",
            NoEcontroNingunDocumentoIdentificacionDeseaCrear:"No document found with that identification, You want to create a",
            NuevoDocumento:"new document",
            TipoAnotacion: "Annotation type",
            EscribaEntidadEmisora: "Type Issuing entity",
            DescripcionDeAnotacion:"Description Annotation",
            CrearAnotacion: "Create Annotation",
          
            //------------Editar anotacion------//
            BuscarDocumento: "Search document",
            VistaPreviaDocumento:"Preview of the document",
            GuardarCambios: "Save changes",
            VistaPrevia: "Preview",
            SeGuardaronCambionExito:"Changes saved successfully",
            //--------------Eliminar anotacion----------//
            SeleccioneDocumentoEliminarAnotacione: "Select the document you want to delete annotations",
            EliminarAnotacion: "Delete Annotation",
            EliminarNAnotacionesSeguro:"It will remove N annotations,Are you sure?",
            Confirmar: "Confirm",
            EliminadoAnotacionesExito: "Annotations has been removed successfully",
             
            //------------anotacion mayusculas-----------------//
            CrearAnotacionM: "CREATE ANOTATION ",
            EliminarAnotacionM: "DELETE ANOTATION",
            EditarAnotacionM:"EDIT ANOTATION",
            DeseaAñadirAnotacionesDocumento:"¿You want to add annotations to this document?",
            seleccioneDocumentoDeseaAnotacion: "Select the document to which you want to make annotation",
            NumeroDocumento: "Document number",
            Si:"Yes",
            No:"No",
            //----------anotacion-------//
            Confirmacion:"Confirmation",
            DeseaUtilizarAsistenteAnotaciones: "To use the assistant annotations?",
            ContinuarManualmente:"continue manually",
            //---------seleccionar anotacion-----//
            AnotacionesExistentes:"Existing annotations",
            NoEncontroConcordanciasAnotaciones:"It did not find matches annotations",
            //----------------tipo anotacion-----------------//
            Nombre: "Name",
            RolActivoAnotacion: "Active Role annotation",
            RolPasivoAnotacion: "Passive Role annotation",
            Anadir: "Add",
            Remover: "Stir",
            NombreTipoAnotacion: "Name Annotation type",
            IngreseNombreTipoAnotacion: "Enter the name of the annotation type",
            IngreseRaizTipoAnotacion: "Enter the root of the type notation",
            TipoAnotacion:"Annotation type",
            //--------------lista anotaciones -----------------//
            NAnotacionesEncontradas: "N annotations found",
            Detalles: "Details",
            QuitarSeleccion:"Remove selection",
            Descripcion:"Description",
            //---------------crear anotacion ----------------------//
            AnoExpedicion: "Year of issue",
            verificar: "Check",
            seleccioneDocumentoAnotar: "select the document that you want to annotate",
            CompleCamposRealizarAnotacion: "Complete the fields for annotation",
                        DescripcionAnotacion: "Description annotation",
            //---------------------pregunta anadir anotaciones---------------------//
            DeseaAnadirAnotacionesDocumento: "¿You want to add annotations to this document?",
            //------------------seleccionar anotacion -------------------------------//
            
            ExistenPresenteDocumento: "There possible documents which noted here in",             
            Aceptar: "OK",
            
            Emitido: "issued by",
            seleccionarDocumento: "Select document",
            EntidadEmisora: "Issuing entity",
            AnoPublicacion: "Year of publication",
            
            FechaPublicacion: "Publication date",
            //----------control usuarios-------//
            ArchivoCargadoServidor: "The file has been uploaded to the serverr",
            ArchivoNoCargadoServidor: "The file was NOT loaded on the server",
            TomarFoto: "Take photo",
            RepetirFoto: "Repeat photo",
            GuardarFoto: "Save photo",
            BorrarFoto: "Delete photo",
            Fotografia: "Picture",
            Nombres: "Names",
            Apellidos: "Lastnames",
            NombreUsuario: "Username",
            Contrasena: "Password",
            NivelSeguridad: "Security level",
            ConfirmarContrasena: "Confirm Password",
            CorreoElectronico: "Email",
            RolUsuario: "User Role",
            EstadoUsuario: "User state",
            Activo: " Active",
            Bloqueado: "Locked",
            //---------cuenta-----------------//
            ConfiguracionCuenta: "Account settings",
            Guardar: "Save",
            //--------------recuperar clave------//
            RecuperacionContrasena: "Password recovery",
            IngreseNombreBotonVerificar: "Enter the user name with which you registered, and below click on the button check",
            IngreseCorreoBotonRecuperar: "Now Enter the email with which you registered, and click below the Recover button",
            EmailEnviadoRevise: "It sent an email to your email with the new password. Check your mail please",
            Recuperar: "Get it back",
            CuentaUsuario: "User account",
            Verificar:"Check",
            //-----------recuperar contraseña---------------//
            Email: "E-mail",
            Enviar: "Submit",
            //---------------auditoria----------//
            Roles: "ROLES",
            Usuarios: "USERS",
            //---------------Busqueda-------------//
            BusquedaAvanzada: "Advanced search",
            Buscar: "Search",
            EscribaBusqueda: "Type in your search (Example: Decree)",
            documentosEncontrados: "Documents found",
            //----------- ----asunto--------------//
            CrearDocumento: "Create document",
            Asunto: "Affair",
            ProsesandoArchivo: "Processing file",
            Atras: "Back",
            Siguiente: "Next",
            //------------informacion_documento------------//
            IdentificacionDocumento: "Document identification",
            Numero: "Number",
            FechaDocumentacion: "Date documentation",
            //------------------resultado_ocr--------------//
            ResultadoOcr: "OCR result",
            Editar: "Edit",
            Cancelar: "Cancel",
            //------------------resultado---------------//
            Resultado: "Result",
            Trabajando: "Working",
            DocumentoCreadoExito: "Document created successfully",
            ErrorCrearDocumento: "Error creating document",
            Regresar: "Return",
            //------------------Subir_archivo--------//

            
            SubirDocumento: "Upload Document",
            EscogaUnArchivo: "Choose a file",
            ArrastreloAqui: "Or drag here.",
            Anotacion: "Annotation",
            ExisteAnota: "There annotation",
            //----------------login--------------//
            IngresoSistema: "Entry system",
            CompleteCampo: "Complete this field.",
            CamposObligatorios: "* Required fields.",
            Ingresar: "LOGIN    ",
            OlvideContrasena: " I forgot my password",
            
            //------------------noticias-----------//
            Legem: "Legem",
           
            
                //------------------------footer--------------------//
            Contactenos: "Contact",
            UniversidadNarino: "University of Nariño",
            Torobajo: "Torobajo - Street 18 Crr 50",
            PBX: "PBX: (2)-7311449 - 18000957071",
            Siguenos: "Follow",
            AcercaSitio: "About Site",
            DesarrolladoPor: "Developed by:",
            Copyright: "Copyright © 2016 - University of Nariño - San Juan de Pasto - Colombia",
            //-------------------resultado busqueda---------------//
            Descargar: "Dowland",
            Anotado: "Annotated",
            EscribaNumeroDocumento: "Write document number",
            EscribaAnoPublicacion: "Write year of publication",
            Fecha: "Date",
            Relevancia: "Relevance",
            //---roless----
            Filtro: "Filter",
            //---------------wlwgem-news---------//
            Ninguna: "Any",
            ActualidadDocumental: "Today Documentary",
            //-----componentes-------//
            Menu: "Menu",
            Componentes: "Components",
            ConfigurarCuenta: "configure Account",
            Salir: "Get out",
            Contraste: "Contrast",
            Idioma: "Language",
            Espanol: "Spanish",
            Ingles: "English",
            
            Irarriba: "Go up",
            //---------------place--------//
           
            NoEntontroDocumento: "No document found with that identification",
            IngreseNombre: "Enter name",
            
            EscribaEntidadEmisora:"Type the issuer  entity",
            
            //----- info anotaciones-----//
            Anotaciones: "Annotations",
            
          
            EncuentrAnotado: "It is noted by",
            del: "of the",
            
            Deroga: "Repeals",
            //-------Permisos-------//
            PermitirTodo: "Allow all",
            NoPermitido: "Do not allow",
            //--------adminCrud----------------//
            Nuevo:"New",
            Eliminar: "Remove",
            //-------------rolDirective--------//
            permisos: "Permits",
            Modulo: "Module",
            Lectura: "Reading",
            Escritura: "Writing",
            Edicion: "Edition",
            Eliminacion: "Removal",
            
            //------------------OJO

            arregloOpciones: [
            {
                nombre: "GestiN filely",
                link: "gestion-documental.crear-documento.subir-archivo",
                icono: "ico-stack-overflow",
                condicion: "true"
            },
            {
                nombre: "Administration",
                link: "administracion.tipo-documento",
                icono: "ico-tasks",
                condicion: "true"
            },
            {
                nombre: "Users",
                link: "usuarios.control-usuarios",
                icono: "ico-users",
                condicion: "true"
            },
            {
                nombre: "Annotations",
                link: "anotacion.crear-anotacion",
                icono: "ico-files-o",
                condicion: "true"
            },
            {
                nombre: "Audit",
                link: "auditoria.auditoria1",
                icono: "ico-files-o",
                condicion: "true"
            }
            ]

        });
})();