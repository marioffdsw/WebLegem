CREATE OR REPLACE TYPE anotacion_typ AS OBJECT (
    id                          NUMBER,
	doc_anotante				documento_typ,
	doc_anotado					documento_typ,
	tipo_anotacion				tipo_anotacion_typ,
	descripcion					VARCHAR2( 1000 ),
    fecha                       DATE
);
/