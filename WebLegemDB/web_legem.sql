-- Creacion y configuración de la Base de Datos
@usuario_tablespace_permisos.sql
/

-- Tipo Documento (definición de tipo y tablas asociadas)
@'User Defined Types\Objects\tipo_doc_typ.sql'
/
@'User Defined Types\Nested Tables\tipo_doc_ref_tab_typ.sql'
/
@'AQ\tipo_doc_obj_tab.sql'

-- Tipo Entidad (definición de tipo y tablas asociadas)
@'User Defined Types\Objects\tipo_entidad_typ.sql'
/
@'AQ\tipo_entidad_obj_tab.sql'


-- Entidad (definición de tipo de tablas asociadas)
@'User Defined Types\Objects\entidad_typ.sql'
/
@'AQ\entidad_obj_tab.sql'


-- Identificador de Documento (definición de tipo y tablas asociadas)
@'User Defined Types\Objects\doc_id_typ.sql'
/
@'AQ\doc_id_obj_tab.sql' -- tabla para los identificadores de documentos, cuyo archivo ya ha sido
					   -- subido al sistema

@'AQ\doc_id_sin_archivo_obj_tab.sql' -- tabla para identificadores de documentos
								   -- sin archivo (pendientes por subir).


-- Tipos de Anotación (definicion de tipo y tablas asociadas)
@'User Defined Types\Objects\tipo_anotacion_typ.sql'
/
@'AQ\tipo_anotacion_obj_tab.sql'

-- Anotación (definicion de tipo y tablas asociadas)
@'User Defined Types\Objects\anotacion_typ.sql'
/
@'AQ\anotacion_obj_tab.sql'