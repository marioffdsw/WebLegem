-- Drop the existing procedure (if any)

DROP PROCEDURE crear_tipo_doc_pro;

-- Procedure definition

create or replace 
PROCEDURE crear_tipo_doc_pro (
  nombre VARCHAR2) AS  
BEGIN    
	INSERT INTO tipo_doc_obj_tab VALUES(tipo_doc_seq.NEXTVAL, nombre);
END crear_tipo_doc_pro;
/