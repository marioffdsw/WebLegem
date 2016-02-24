-- evitar problemas al correr scrips
set sqlbl on
/

-- Creacion y configuración de la Base de Datos
@usuario_tablespace_permisos.sql

/*
-- Tipo Documento (definición de tipo y tablas asociadas)
@'Sequences/tipo_doc_seq.sql'
@'User Defined Types\Objects\tipo_doc_typ.sql'
@'User Defined Types\Nested Tables\tipo_doc_ref_tab_typ.sql'
@'Tables\Object Tables\tipo_doc_obj_tab.sql'
@'Procedures\crear_tipo_doc_pro.sql'
@'Procedures\crear_tipo_doc_from_td_pro.sql'


-- Tipo Entidad (definición de tipo y tablas asociadas)
@'Sequences/tipo_entidad_seq.sql'
@'User Defined Types\Objects\tipo_entidad_typ.sql'
@'Tables\Object Tables\tipo_entidad_obj_tab.sql'
@'Procedures\crear_tipo_entidad_pro.sql'
@'Procedures\asociar_doc_a_tipo_entidad_pro.sql'


-- Entidad (definición de tipo de tablas asociadas)
@'Sequences/entidad_seq.sql'
@'User Defined Types\Objects\entidad_typ.sql'
@'Tables\Object Tables\entidad_obj_tab.sql'
@'Procedures\crear_entidad_pro.sql'

-- Identificador de Documento (definición de tipo y tablas asociadas)
@'User Defined Types\Objects\doc_id_typ.sql'
@'Sequences/doc_id_typ_seq.sql'
@'Tables\Object Tables\doc_id_obj_tab.sql' -- tabla para los identificadores de documentos, cuyo archivo ya ha sido
										   -- subido al sistema



@'Tables\Object Tables\doc_id_sin_archivo_obj_tab.sql' -- tabla para identificadores de documentos
													   -- sin archivo (pendientes por subir).


-- Documento (definicion de tipo y tablas asociadas)
@'User Defined Types\Objects\doc_typ.sql'
@'Tables\Object Tables\doc_contenido_obj_tab.sql'
@'Procedures\crear_doc_ret_doc_id_pro'
@'Procedures\crear_documento_pro.sql'
@'Procedures\crear_contenido_pro.sql'

-- Tipos de Anotación (definicion de tipo y tablas asociadas)
--@'User Defined Types\Objects\tipo_anotacion_typ.sql'
--@'Tables\Object Tables\tipo_anotacion_obj_tab.sql'

-- Anotación (definicion de tipo y tablas asociadas)
--@'User Defined Types\Objects\anotacion_typ.sql'
--@'Tables\Object Tables\anotacion_obj_tab.sql'

@'Indexes\bfile_idx.sql'*/

@@'Tables/Relational Tables/tipos_documento_tab.sql'
@@'Tables/Relational Tables/tipos_entidad_tab.sql'
@@'Tables/Relational Tables/documentos_soportados_tab.sql'
@@'Tables/Relational Tables/entidades_tab.sql'
@@'Tables/Relational Tables/identificadores_documentos_tab.sql'
@@'Tables/Relational Tables/archivos_tab.sql'
@@'Tables/Relational Tables/contenidos_archivos_tab.sql'

@@'Indexes/contenido_text_idx.sql'

@@'User Defined Types/Objects/tipo_documento_typ.sql'
@@'Views/Object Views/tipos_documento_view.sql'
@@'User Defined Types/Nested Tables/tipo_documento_tab_typ.sql'
@@'User Defined Types/Objects/tipo_entidad_typ.sql'
@@'Views/Object Views/tipos_entidad_view.sql'
@@'User Defined Types/Nested Tables/tipo_doc_ref_tab_typ.sql' 
@@'User Defined Types/Objects/entidad_typ.sql'
@@'Views/Object Views/entidades_view.sql'
@@'User Defined Types/Objects/documento_typ.sql'
@@'User Defined Types/Objects/documento_contenido_typ.sql'
@@'Views/Object Views/documentos_contenido_view.sql'
@@'Views/Object Views/documentos_sin_contenido_view.sql'


@@'Sequences/tipos_documento_seq.sql'
@@'Sequences/tipo_entidad_seq.sql'
@@'Sequences/entidad_seq.sql'

@@'Triggers/View Triggers/crear_tipo_documento_trig.sql'
@@'Triggers/View Triggers/actualizar_tipo_doc_trig.sql'
@@'Triggers/View Triggers/eliminar_tipo_doc_trig.sql'*/

@@'Triggers/View Triggers/crear_tipo_entidad_trig.sql'
@@'Triggers/View Triggers/eliminar_tipo_entidad_trig.sql'
@@'Triggers/View Triggers/actualizar_tipo_entidad_trig.sql'

@@'Triggers/View Triggers/crear_entidad_trig.sql'
@@'Triggers/View Triggers/actualizar_entidad_trig.sql'
@@'Triggers/View Triggers/eliminar_entidad_trig.sql'