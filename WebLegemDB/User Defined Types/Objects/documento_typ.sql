CREATE OR REPLACE TYPE documento_typ AS OBJECT 
(    
	id                  			NUMBER,   
    entidad							entidad_typ,
    tipo_documento				    tipo_documento_typ,
    numero							VARCHAR2(10),
    fecha_publicacion				TIMESTAMP,    
    ultima_modificacion             TIMESTAMP
);
/