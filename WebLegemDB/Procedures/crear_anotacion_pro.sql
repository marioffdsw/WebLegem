-- Drop the existing procedure (if any)

DROP PROCEDURE crear_anotacion_pro;

-- Procedure definition

CREATE OR REPLACE PROCEDURE CREAR_ANOTACION_PRO 
(
  DOC_ORIGEN_I IN NUMBER  
, DOC_DESTINO_I IN NUMBER  
, TIPO_ANOTACION_I IN NUMBER  
, DESCRIPCION IN VARCHAR2  
) AS 

aux number;
BEGIN

    BEGIN    
        SELECT u.id into aux FROM doc_id_obj_tab u WHERE 
        u.id = doc_destino_i;    
        
        exception
          when others then
  
          INSERT INTO anotacion_obj_tab VALUES(
            (SELECT REF(d) FROM doc_id_obj_tab d WHERE d.id = doc_origen_i),
            (SELECT REF(d) FROM doc_id_sin_archivo_obj_tab d WHERE d.id = doc_destino_i),
            (SELECT REF(d) FROM tipo_anotacion_obj_tab d WHERE d.id = tipo_anotacion_i),
            descripcion);    
    END;
    
    INSERT INTO anotacion_obj_tab VALUES(
      (SELECT REF(d) FROM doc_id_obj_tab d WHERE d.id = doc_origen_i),
      (SELECT REF(d) FROM doc_id_obj_tab d WHERE d.id = doc_destino_i),
      (SELECT REF(d) FROM tipo_anotacion_obj_tab d WHERE d.id = tipo_anotacion_i),
      descripcion);    

END CREAR_ANOTACION_PRO;
/