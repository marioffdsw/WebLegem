-- Drop the existing procedure (if any)

DROP PROCEDURE crear_entidad_pro;

-- Procedure definition

create or replace 
PROCEDURE CREAR_ENTIDAD_PRO 
(NOMBRE IN VARCHAR2 ,ID_TIPO_ENTIDAD IN NUMBER ) AS 

BEGIN

  INSERT INTO entidad_obj_tab VALUES (
   entidad_seq.NEXTVAL,
   (SELECT REF(d) FROM tipo_entidad_obj_tab d WHERE d.id = id_tipo_entidad),
   nombre
  );
  
END CREAR_ENTIDAD_PRO;
/