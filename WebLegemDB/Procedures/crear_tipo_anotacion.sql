-- Drop the existing procedure (if any)

DROP PROCEDURE crear_tipo_anotacion_pro;

-- Procedure definition

CREATE OR REPLACE PROCEDURE CREAR_TIPO_ANOTACION_PRO 
(
  DESCRIPCION IN VARCHAR2  
, DICCIONARIO IN VARCHAR2  
) AS 
BEGIN

  INSERT INTO tipo_anotacion_obj_tab  VALUES(
  tipo_anotacion_seq.NEXTVAL,
  descripcion,
  diccionario
  );

END CREAR_TIPO_ANOTACION_PRO;
/