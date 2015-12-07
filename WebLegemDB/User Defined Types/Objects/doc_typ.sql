CREATE OR REPLACE TYPE doc_typ AS OBJECT (	
	id							NUMBER,
	asunto                      VARCHAR2(2000),
    fecha_expedicion            DATE,
    ruta_al_archivo             VARCHAR2(255),
    contenido_documento         BFILE
);
/