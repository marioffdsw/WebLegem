-- Drop the existing procedure (if any)

DROP PROCEDURE crear_tipo_entidad_pro;

-- Procedure definition

create or replace 
PROCEDURE crear_tipo_entidad_pro ( nombre VARCHAR2 ) 
AS 
BEGIN

    INSERT INTO tipo_entidad_obj_tab VALUES(
        tipo_entidad_seq.NEXTVAL, nombre, tipo_doc_ref_tab_typ() );

END crear_tipo_entidad_pro;
/