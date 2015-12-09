CREATE OR REPLACE TYPE doc_typ AS OBJECT (	
	ref_id_documento            REF doc_id_typ,
	asunto                      VARCHAR2(2000),
    fecha_expedicion            DATE,
    ruta_al_archivo             VARCHAR2(255),
    contenido_documento         BFILE
);
/