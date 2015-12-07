-- Drop the existing procedure (if any)

DROP PROCEDURE asociar_doc_a_tipo_entidad;

-- Procedure definition

create or replace 
PROCEDURE ASOCIAR_DOC_A_TIPO_ENTIDAD 

(nombre_ingresado VARCHAR2,id_ingresado NUMBER) AS 
  num number;
  referencia REF tipo_doc_typ;

BEGIN

  select t.id into num from tipo_entidad_obj_tab t where t.nombre = nombre_ingresado;
  
  SELECT REF(d) into referencia FROM TIPO_DOC_obj_TAB d WHERE d.id =id_ingresado;
  
  INSERT INTO THE
  (SELECT g.documentos_soportados FROM tipo_entidad_obj_tab g WHERE g.id=num)
  VALUES (referencia);
  

END ASOCIAR_DOC_A_TIPO_ENTIDAD;
/