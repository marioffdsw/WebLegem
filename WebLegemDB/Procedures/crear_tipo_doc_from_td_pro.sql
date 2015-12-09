-- Drop the existing procedure (if any)

DROP PROCEDURE crear_tipo_doc_from_td_pro;

-- Procedure definition

create or replace 
PROCEDURE crear_tipo_doc_from_td_pro (
  tipo_doc IN OUT tipo_doc_typ ) AS  
BEGIN    
	tipo_doc.id := tipo_doc_seq.NEXTVAL;
	INSERT INTO tipo_doc_obj_tab VALUES( tipo_doc );
END;
/