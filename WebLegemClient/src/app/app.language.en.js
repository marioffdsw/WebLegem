﻿(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .constant("en", {
            contraste: "Contrast",
            idioma: "Language",
            tamanoFuente: "Font Size",
            spa: "Español",
            eng: "English",
            listadoTiposDocumento: "Document type list",
            //-------------Entidad---------//
            NombreEntidad: "Entity name",
            IngreseNombreEntidad: "Enter entity name ",
            TipoEntidad: "Entity type",
            ListaEntidades: "List of entities",
            ListaTipoEntidades: "Entity type list ",
            //-----------Tipos_entidad---------------------//
            NombreTipoEntidad: "Entity type name ",
            IngreseNombreTipoEntidad: "Enter the entity type name",
            IngreseCorreoElectronico: "Enter email",
            CorreoNoValido:"Correo no valido",
            //-------------Tipo_documneto-------//
            NombreTipoDocumento: "Document type name",
            //---------------------administracion-------------//
            TipoDocumento: "Document type",
            Entidad: "Entity",
            //--------------crear anotacion----------//
            SeleccionarDocumentoAnota:"Select document to record",
            NoEncontroNingunDocumentoConIdentificacion: "No document found with this identification",
            SeleccioneDocumentoAnotara:"Select the document to be annotated",
            CompleteDatosCrearDocumento:"Complete data to create the document",
            NoEcontroNingunDocumentoIdentificacionDeseaCrear:"No document found with this identification, You want to create a",
            NuevoDocumento:"New document",
            TipoAnotacion: "Annotation type",
            EscribaEntidadEmisora: "Type Issuing entity",
            DescripcionDeAnotacion:"Description Annotation",
            CrearAnotacion: "Create Annotation",
          
            //------------Editar anotacion------//
            BuscarDocumento: "Search document",
            VistaPreviaDocumento:"Document preview ",
            GuardarCambios: "Save changes",
            VistaPrevia: "Preview",
            SeGuardaronCambionExito:"Changes saved successfully",
            ModificarAnotacionSeguro: "it will edit this annotation, Are you sure?",
            //--------------Eliminar anotacion----------//
            SeleccioneDocumentoEliminarAnotacione: "Select the document you want to delete annotations",
            EliminarAnotacion: "Delete Annotation",
            EliminarAnotacionSeguro:"It will delete this annotation, Are you sure?",
            Confirmar: "Confirm",
            EliminadoAnotacionesExito: "Annotations has been deleted successfully",
             
            //------------anotacion mayusculas-----------------//
            CrearAnotacionM: "CREATE ANOTATION ",
            EliminarAnotacionM: "DELETE ANOTATION",
            EditarAnotacionM:"EDIT ANOTATION",
            DeseaAñadirAnotacionesDocumento:"¿You want to add annotations to this document?",
            seleccioneDocumentoDeseaAnotacion: "Select the document to which you want to annotate",
            NumeroDocumento: "Document number",
            Si:"Yes",
            No:"No",
            //----------anotacion-------//
            Confirmacion:"Confirmation",
            DeseaUtilizarAsistenteAnotaciones: "You want to use the annotation assistant?",
            ContinuarManualmente:"Continue manually",
            //---------seleccionar anotacion-----//
            AnotacionesExistentes:"Existing annotations",
            NoEncontroConcordanciasAnotaciones:"No annotation matches found",
            //----------------tipo anotacion-----------------//
            Nombre: "Name",
            RolActivoAnotacion: "Active Role annotation",
            RolPasivoAnotacion: "Passive Role annotation",
            Anadir: "Add",
            Remover: "Remove",
            NombreTipoAnotacion: "Name Annotation type",
            IngreseNombreTipoAnotacion: "Enter name of the annotation type",
            IngreseRaizTipoAnotacion: "Enter the root of the notation type",
            
            //--------------lista anotaciones -----------------//
            NAnotacionesEncontradas: "N annotations found",
            Detalles: "Details",
            QuitarSeleccion:"Delete selection",
            Descripcion:"Description",
            CompleCamposRealizarAnotacion: "Complete the fields to make the annotation",
            DescripcionAnotacion: "Annotation description",
            //---------------crear anotacion ----------------------//
            AnoExpedicion: "Year of issue",
            verificar: "Check",
            seleccioneDocumentoAnotar: "Select the document that you want to annotate",           
            //---------------------pregunta anadir anotaciones---------------------//
            DeseaAnadirAnotacionesDocumento: "¿You want to add annotations to this document?",
            //------------------seleccionar anotacion -------------------------------//           
            ExistenPresenteDocumento: "There are n possible documents which records this document",             
            Aceptar: "OK",            
            Emitido: "Issued by",
            seleccionarDocumento: "Select document",
            EntidadEmisora: "Issuing entity",
            AnoPublicacion: "Year of publication",            
            FechaPublicacion: "Publication date",
            //----------control usuarios-------//
            ArchivoCargadoServidor: "The file has been uploaded on the server",
            ArchivoNoCargadoServidor: "The file has NOT uploaded on the server",
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
            ConfirmarContrasena: "Confirm password",
            CorreoElectronico: "Email",
            RolUsuario: "User role",
            EstadoUsuario: "User state",
            Activo: " Active",
            Bloqueado: "Locked",
            //---------cuenta-----------------//
            ConfiguracionCuenta: "Account settings",
            Guardar: "Save",
            //--------------recuperar clave------//
            RecuperacionContrasena: "Password recovery",
            IngreseNombreBotonVerificar: "Enter the user name with which you registered, and then click the check button",
            IngreseCorreoBotonRecuperar: "Now Enter the email with which you registered, and click below the Recover button",
            EmailEnviadoRevise: "An email has been sent to your email with the new password. Check your mail please",
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
            Asunto: "Issue",
            ProsesandoArchivo: "Processing file",
            Atras: "Back",
            Siguiente: "Next",
            //------------informacion_documento------------//
            IdentificacionDocumento: "Document identification",
            Numero: "Number",            
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
            ArrastreloAqui: "Or drag it here.",
            Anotacion: "Annotation",
            ExisteAnota: "Annotation exists",
            //----------------login--------------//
            IngresoSistema: "Login",
            CompleteCampo: "Complete this field.",
            CamposObligatorios: "* Required fields.",
            Ingresar: "LOGIN",
            OlvideContrasena: " I forgot my password",
            NombreUsuarioI:"Username",            
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
            Descargar: "Download",
            Anotado: "Annotated",
            EscribaNumeroDocumento: "Write document number",
            EscribaAnoPublicacion: "Write year of publication",
            Fecha: "Date",
            Relevancia: "Relevance",
            //---roless----
            Filtro: "Filter",
            //---------------wlwgem-news---------//
            Ninguna: "Any",
            ActualidadDocumental: "Current documentary",
            //-----componentes-------//
            Menu: "Menu",
            Componentes: "Components",
            ConfigurarCuenta: "Account settings",
            Salir: "Exit",
            Contraste: "Contrast",
            Idioma: "Language",
            Espanol: "Spanish",
            Ingles: "English",
            
            Irarriba: "Go up",
            //---------------place--------//
           
            NoEntontroDocumento: "No document found with that identification",
            IngreseNombre: "Enter name",               
            //----- info anotaciones-----//
            Anotaciones: "Annotations",            
            EncuentrAnotado: "It is annotated by",
            del: "of the",            
            Deroga: "Repeals",
            //-------Permisos-------//
            PermitirTodo: "Allow all",
            NoPermitido: "Not allowed",
            //--------adminCrud----------------//
            Nuevo:"New",
            Eliminar: "Delete",
            //-------------rolDirective--------//
            permisos: "Permits",
            Modulo: "Module",
            Lectura: "Reading",
            Escritura: "Writing",
            Edicion: "Edition",
            Eliminacion: "Removal",
            //----subir documento-----//
            SeleccioneOpcion:"Select an option",
            
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