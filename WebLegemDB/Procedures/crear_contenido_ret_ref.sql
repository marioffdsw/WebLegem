-- Drop the existing procedure (if any)

DROP PROCEDURE crear_contenido_ret_ref_pro;

-- Procedure definition

CREATE OR REPLACE PROCEDURE CREAR_CONTENIDO_RET_REF_PRO
(
	id_referencia   number,
	documento		IN OUT doc_typ
)AS 
	docIdRef		REF doc_id_typ;
BEGIN
  
  SELECT REF(d) INTO docIdRef FROM doc_id_obj_tab d WHERE d.id = id_referencia;
  documento.ref_id_documento := docIdRef;

  INSERT INTO doc_contenido_obj_tab VALUES( documento );
  
END CREAR_CONTENIDO_RET_REF_PRO;
/