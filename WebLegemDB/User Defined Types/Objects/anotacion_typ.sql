CREATE TYPE anotacion_typ AS OBJECT (
	doc_origen					REF doc_id_typ,
	doc_destino					REF doc_id_typ,
	tipo_anotacion				REF tipo_anotacion_typ,
	descripcion					VARCHAR2( 255 )
);
/