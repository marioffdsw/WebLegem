-- evitar problemas al correr scrips
set sqlbl on
/

-- Creacion y configuración de la Base de Datos
@usuario_tablespace_permisos.sql

-- Tipo Documento (definición de tipo y tablas asociadas)
@'Sequences/tipo_doc_seq.sql'
@'User Defined Types\Objects\tipo_doc_typ.sql'
@'User Defined Types\Nested Tables\tipo_doc_ref_tab_typ.sql'
@'Tables\Object Tables\tipo_doc_obj_tab.sql'
@'Procedures\crear_tipo_doc_pro.sql'


-- Tipo Entidad (definición de tipo y tablas asociadas)
@'Sequences/tipo_entidad_seq.sql'
@'User Defined Types\Objects\tipo_entidad_typ.sql'
@'Tables\Object Tables\tipo_entidad_obj_tab.sql'
@'Procedures\crear_tipo_entidad_pro.sql'
@'Procedures\asociar_doc_a_tipo_entidad_pro.sql'


-- Entidad (definición de tipo de tablas asociadas)
--@'Sequences/entidad_seq.sql'
--@'User Defined Types\Objects\entidad_typ.sql'
--@'Tables\Object Tables\entidad_obj_tab.sql'
--@'Procedures\crear_entidad_pro.sql'

-- Identificador de Documento (definición de tipo y tablas asociadas)
--@'User Defined Types\Objects\doc_id_typ.sql'
--@'Sequences/doc_id_typ_seq.sql'
--@'Tables\Object Tables\doc_id_obj_tab.sql' -- tabla para los identificadores de documentos, cuyo archivo ya ha sido
										   -- subido al sistema

--@'Tables\Object Tables\doc_id_sin_archivo_obj_tab.sql' -- tabla para identificadores de documentos
													   -- sin archivo (pendientes por subir).

--@'Tables\Object Tables\doc_typ.sql'
--@'Tables\Object Tables\doc_contenido_obj_tab.sql'

-- Tipos de Anotación (definicion de tipo y tablas asociadas)
--@'User Defined Types\Objects\tipo_anotacion_typ.sql'
--@'Tables\Object Tables\tipo_anotacion_obj_tab.sql'

-- Anotación (definicion de tipo y tablas asociadas)
--@'User Defined Types\Objects\anotacion_typ.sql'
--@'Tables\Object Tables\anotacion_obj_tab.sql'