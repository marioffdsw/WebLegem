(function () {
    "use strict";

    angular
        .module("WebLegemApp")
        .constant("es", {
            contraste: "Contraste",
            idioma: "Idioma",
            tamanoFuente: "Tamaño fuente",
            spa: "Español",
            eng: "English",
            listadoTiposDocumento: "Listado de tipos documento",
            Inicio:"Inicio",
            //-------------Entidad---------//
            NombreEntidad: "Nombre de la entidad",
            IngreseNombreEntidad: "Ingrese el nombre de la entidad",
            TipoEntidad: "Tipo entidad",
            ListaEntidades: "Lista de entidades",
            ListaTipoEntidades: "Lista de tipo de entidades",
            BuscarEntidad:"Buscar entidad",
            Error: "Error",
            Entidades:"Entidades",
            //-----------Tipos_entidad---------------------//
            NombreTipoEntidad: "Nombre del tipo de la entidad",
            IngreseNombreTipoEntidad: "Ingrese el nombre de tipo de entidad",
            IngreseCorreoElectronico: "Ingrese correo electronico",            
            CorreoNoValido: "Correo no valido",
            BuscarTipoEntidad:"Buscar tipo de entidad",
            DocumentosSoportados:"Documentos soportados",
            //-------------Tipo_documneto-------//
            NombreTipoDocumento: "Nombre de tipo documento",
            BuscarDocumento:"Buscar documento",
            //---------------------administracion-------------//
            TipoDocumento: "Tipo de documento",
            Entidad: "Entidad",
            ListaAnotaciones:"Lista de tipo de anotacion",
            //----------control usuarios-------//
            ArchivoCargadoServidor: "El archivo ha sido cargado en el servidor",
            ArchivoNoCargadoServidor: "El archivo No ha sido cargado en el servidor",
            TomarFoto: "Tomar foto",
            RepetirFoto: "Repetir foto",
            GuardarFoto: "Guardar foto",
            BorrarFoto:"Borrar foto",
            Fotografia: "Fotografia",
            Nombres: "Nombres",
            Apellidos: "Apellidos",
            NombreUsuario: "Nombre de usuario",
            Contrasena: "Contraseña",
            NivelSeguridad: "Nivel de seguridad",
            ConfirmarContrasena: "Confirmar contraseña",
            CorreoElectronico: "Correo electronico",
            RolUsuario: "Rol del usuario",
            EstadoUsuario: "Estado del usuario",
            Activo: " Activo",
            Bloqueado: "Bloqueado",
            CerrarDialogo: "Cerrar dialogo",
            InformacionRol:"Información rol",
            //---------cuenta-----------------//
            ConfiguracionCuenta:"Configuración de cuenta",            
            Guardar: "Guardar",
            CorreoNoValido: "Correo no valido",
            //--------------recuperar clave------//
            RecuperacionContrasena: "Recuperación de contraseña",
            IngreseNombreBotonVerificar: "Ingrese el nombre de usuario con el cual se registró, y a continuacion de click en el boton verificar",
            IngreseCorreoBotonRecuperar:"Ahora ingrese el correo electronico con el cual se registró, y a continuacion de click en el boton recuperar",
            EmailEnviadoRevise:"Se ha enviado un mail a su correo electronico con la nueva contraseña. Revise su correo por favor",
            Recuperar: "Recuperar",
            CuentaUsuario: "Cuenta de usuario",
            Verificar:"Verificar",
            //-----------recuperar contraseña---------------//
            Email: "E-mail",
            Enviar:"Enviar",
            //---------------auditoria----------//
            Roles: "Roles",
            Usuarios: "Usuarios",
            Rol:"Rol",
            //---------------Busqueda-------------//
            BusquedaAvanzada: "Busqueda avanzada",
            Buscar: "Buscar",
            EscribaBusqueda: "Escriba aquí su busqueda (Ejemplo: Decreto)",
            DocumentosEncontrados: "Documentos encontrados",    
            //----------- ----asunto--------------//
            CrearDocumento: "Crear documento",
            Asunto: "Asunto",
            ProsesandoArchivo: "Procesando archivo",
            Atras: "Atras",
            Siguiente: "Siguiente",
            //------------informacion_documento------------//
            IdentificacionDocumento: "Identificación del documento",
            Numero: "Número",
            FechaPublicacion: "Fecha de publicación",
            //------------------resultado_ocr--------------//
            ResultadoOcr:"Carga exitosa",
            Editar: "Editar",
            Cancelar: "Cancelar",
            //------------------resultado---------------//
            Resultado: "Resultado",
            Trabajando: "Trabajando",
            DocumentoCreadoExito: "Documento creado con exito",
            ErrorCrearDocumento: "Error al crear documento",
            Regresar: "Regresar",
            //------------------Subir_archivo--------//
            SubirDocumento: "Subir documento",
            EscogaUnArchivo: "Escoga un archivo",
            ArrastreloAqui: "ó arrastrelo aquí.",
            Anotacion: "Anotacion",
            ExisteAnota: "Existe anotación",
            TipoArchivoNoSoportado: "Tipo de archivo no soportado",
            SeleccioneArchivo: "Seleccione un archivo",
            //----------------login--------------//
            IngresoSistema: "Ingreso al sistema",
            CompleteCampo: "Complete este campo.",
            CamposObligatorios: "* Campos obligatorios.",
            Ingresar: "INGRESAR",
            OlvideContrasena: " Olvide mi contraseña",
            NombreUsuarioI:"Nombre de Usuario *",
            //------------------noticias-----------//
            Legem: "Legem",
            //-------------control roles-------//            
            Permisos: "Permisos",
            //---------------crear anotacion ----------------------//
            SeleccionarDocumentoAnota:"Seleccionar documento que anota",
            NoEncontroNingunDocumentoConIdentificacion: "No se encontro ningun documento con esa identificacion",
            SeleccioneDocumentoAnotara:"Seleccione el documento al cual se anotará",
            CompleteDatosCrearDocumento:"Complete los datos para crear el documento",
            NoEcontroNingunDocumentoIdentificacionDeseaCrear:"No se encontro ningun documento con esa identificacion, desea crear uno",
            NuevoDocumento:"Nuevo documento",
            TipoAnotacion: "Tipo de anotación",
            EscribaEntidadEmisora: "Escriba entidad emisora",
            DescripcionDeAnotacion:"Descripcion de la Anotación",
            CrearAnotacion: "Crear anotación",
            SeHaCreadoAnotacion:"Se ha creado una Anotacion ",
            CompleteDatosCrearAnotacion:"Complete los datos para crear una anotación",
            SeEncontroN:"Se encontro",
            ResultadosBusqueda:"resultados de la busqueda",
            //------------Editar anotacion------//          
            VistaPreviaDocumento:"Vista previa del documento",
            GuardarCambios: "Guardar cambios",
            VistaPrevia: "Vista previa",
            SeGuardaronCambionExito:"Se guardaron los cambios con exito",
            ModificarAnotacionSeguro: "¿Se va a modificar esta anotación, esta seguro?",
            //--------------Eliminar anotacion----------//
            SeleccioneDocumentoEliminarAnotacione: "Seleccione el documento del que quiere eliminar anotaciones",
            EliminarAnotacion: "Eliminar anotacion",
            EliminarAnotacionSeguro: "¿Se va a eliminar esta anotación, esta seguro?",
            Confirmar: "Confirmar",
            EliminadoAnotacionesExito: "Se ha eliminado las anotaciones con exito",
             //------------anotacion mayusculas-----------------//
            CrearAnotacionM: "CREAR ANOTACION ",
            EliminarAnotacionM: "ELIMINAR ANOTACION",
            EditarAnotacionM:"EDITAR ANOTACION",
            DeseaAñadirAnotacionesDocumento: "¿Desea añadir anotaciones a este documento?",
            seleccioneDocumentoDeseaAnotacion: "Seleccione el documento al cual desea realizar la anotación",
            NumeroDocumento: "Número de documento",
            Si: "Si",
            No: "No",
            //----------anotacion-------//
            Confirmacion:"Confirmación",
            DeseaUtilizarAsistenteAnotaciones: "¿Desea utilizar el asistente de anotaciones?",
            ContinuarManualmente:"Continuar manualmente",
            //---------seleccionar anotacion-----//
            AnotacionesExistentes: "Anotaciones existentes",
            NoEncontroConcordanciasAnotaciones: "No se encontro concordancias de anotaciones",
            //----------------tipo anotacion-----------------//
            Nombre: "Nombre",
            RolActivoAnotacion: "Rol activo de la anotación",
            RolPasivoAnotacion: "Rol pasivo de la anotación",
            Anadir: "Añadir",
            Remover: "Remover",
            NombreTipoAnotacion: "Nombre del tipo Anotación",
            IngreseNombreTipoAnotacion: "Ingrese el nombre del Tipo de Anotacion",
            IngreseRaizTipoAnotacion: "Ingrese la raiz del tipo anotacion",
            RaizTipoAnotacion:"Raiz del tipo anotación",
            //--------------lista anotaciones -----------------//
            NAnotacionesEncontradas: "Anotaciones encontradas",
            Detalles: "Detalles",
            QuitarSeleccion: "Quitar seleccion",
            Descripcion:"Descripcion",            
            AnoExpedicion: "Año de expedición",            
            seleccioneDocumentoAnotar: "Seleccione el documento al cual desea anotar",
            CompleCamposRealizarAnotacion: "Complete los campos para realizar la anotación",           
            DescripcionAnotacion: "Descripcion anotación",
            //--------------crear anotacion----------//
            seleccionarDocumento: "Seleccionar documento",
            EntidadEmisora:"Entidad emisora",
            AnoPublicacion: "Año de publicacion",           
            //-------------- lista ano anotaciones----------//
            //---------------------pregunta anadir anotaciones---------------------//
            DeseaAnadirAnotacionesDocumento: "¿Desea añadir anotaciones a este documento?",           
            //------------------seleccionar anotacion -------------------------------//        
            ExistenPresenteDocumento: "Existen",
            ExistenPresenteDocumentocontinuacion:"posibles documentos las cuales anota el presente documento",
            Emitido:"Emitido por",
            Aceptar: "Aceptar",
            //------------------------footer--------------------//
            Contactenos: "Contactenos",
            UniversidadNarino: "Universidad de Nariño",
            Torobajo: "Torobajo - Calle 18 Carrera 50",
            PBX: "PBX: (2)-7311449 - 18000957071",
            Siguenos: "Siguenos",
            AcercaSitio: "Acerca del Sitio",
            DesarrolladoPor: "Desarrollado por:",
            Copyright: "Copyright © 2016 - Universidad de Nariño - San Juan de Pasto - Colombia",
            //---------------------resultado busqueda-----------//
            Descargar: "Descargar",
            Anotado: "Anotado",
            EscribaNumeroDocumento: "Escriba número de documento",
            EscribaAnoPublicacion: "Escriba año de publicación",
            Fecha: "Fecha",
            Relevancia: "Relevancia",
            //---filtro----//
            Filtro: "Filtro",
            //---------------wlwgem-news---------//
            Ninguna: "Ninguna",
            ActualidadDocumental: "Actualidad documental",
            //------header-------//
            Menu: "Menu",
            Componentes: "Componentes",
            ConfigurarCuenta: "Configurar cuenta",
            Salir: "Salir ",
            Contraste: "Contraste",
            Idioma: "Idioma",
            Espanol: "Español",
            Ingles: "Ingles",           
            Irarriba: "Ir arriba",
            //-----------------place----//
            NoEntontroDocumento: "No se encontro ningun documento con esa identificación",
            IngreseNombre: "Ingrese nombre",            
            //----- info anotaciones-----//
            Anotaciones: "Anotaciones",          
            EncuentrAnotado: "Se encuentra anotado por",
            del: "del",
            Deroga: "Derogá",
            //-------confirmacion-----//
            PermitirTodo: "Permitir todo",
            NoPermitido: "No permitido",
            //---------adminCrud-------//
            Nuevo: "Nuevo",
            Eliminar: "Eliminar",
            //-------------rolDirective--------//
            permisos: "Permisos",
            Modulo:"Modulo",
            Lectura:"lectura",
            Escritura:"Escritura",
            Edicion:"Edición",
            Eliminacion:"Eliminación",
            //crear anotacio
            //---------------subir documento------//
            SeleccioneOpcion: "Seleccione una opción",
            Notificar: "Notificar",

            //---------------------lista de entidades----------//
            ErrorCargarDatos: "Error al cargar los datos",
            //-------------------------procesando--------------//
            SeCreoAnotacionExito: "Se creo la anotación con exito",
            LamentablementeNoPudoRealizarOperacion: "Lamentablemente no se pudo realizar la operación",

            //------------------href title y alt------------------//
            Facebook: "Facebook",
            Twitter: "Twitter",
            FotografiaUsuario:"Fotografia de usuario",
            //---------------------lista usuarios-----------------//
            QuitarFiltro:"Quitar filtro",
          
            //-------------------principal------------//
            LogoAcreditacion:"Logo acreditación universidad de Nariño",
            LogoPlaneacion:"Logo planeacion universidad de nariño",
            EscudoAnos: "Escudo 111 años ",
            //---------------lista de anotaciones-------------//
            DetalleAnotacion: "Detalle Anotación",
            //---------------------------lista tipo de anotaciones---------//
            ListaTipoAnotacion: "Lista de tipo de anotación",
            //---------------admin-------------------------//
            EstaSeguroDeseaEliminar: "Esta seguro que desea eliminar",
            //--------------------asociar documento-----------//
            AsociarDocumento: "Asociar documento",
            //-----------------fotografia-------------------//
            CerrarCamara: "Cerrar camara",
            
            
            //-------------------------OJO

            arregloOpciones : [
            {
                nombre: "Gestión Documental",
                link: "gestion-documental.crear-documento.subir-archivo",
                icono: "ico-stack-overflow",
                condicion:"true"
            },
            {
                nombre: "Administración",
                link: "administracion.tipo-documento",
                icono: "ico-tasks",
                condicion:"true"
            },
            {
                nombre: "Usuarios",
                link: "usuarios.control-usuarios",
                icono: "ico-users",
                condicion:"true"
            },
            {
                nombre: "Anotaciones",
                link: "anotacion.crear-anotacion",
                icono: "ico-files-o",
                condicion: "true"
            },
            {
                nombre: "Auditoria",
                link: "auditoria.auditoria1",
                icono: "ico-files-o",
                condicion: "true"
            }
            ]


        
        }); 
})();
