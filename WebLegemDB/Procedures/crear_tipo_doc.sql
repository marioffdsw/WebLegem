-- Drop the existing procedure (if any)

DROP PROCEDURE crear_tipo_doc;

-- Procedure definition

CREATE PROCEDURE crear_tipo_doc (
  nombre VARCHAR2) AS  
BEGIN    
	INSERT INTO tipo_doc_obj_tab VALUES( tipo_doc_typ( nombre ) );
END crear_tipo_doc;
/