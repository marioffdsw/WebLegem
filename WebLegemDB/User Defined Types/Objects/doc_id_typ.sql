CREATE OR REPLACE TYPE doc_id_typ AS OBJECT (   
    entidad							NUMBER,
    tipo_doc						NUMBER,
    numero							VARCHAR2(10),
    fecha_publicacion				CHAR(4)    
);
/