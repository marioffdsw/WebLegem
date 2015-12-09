-- Drop the existing procedure (if any)

DROP PROCEDURE CREAR_DOCUMENTO_PRO;

-- Procedure definition

create or replace 
PROCEDURE CREAR_DOCUMENTO_PRO 
(entidad_i              NUMBER,
 tipo_doc_i             NUMBER,
 numero_i               VARCHAR2,
 fecha_publicacion_i    CHAR,
 val                    OUT NUMBER
 ) AS 

    numero NUMBER;
    contenedor doc_id_typ;
BEGIN    

      BEGIN  
        --buscar si existe un documento con el mismo id(4 campos)
        SELECT value(u) INTO contenedor FROM doc_id_sin_archivo_obj_tab u WHERE 
        u.entidad = entidad_i and u.tipo_doc = tipo_doc_i and
        u.numero = numero_i   and u.fecha_publicacion = fecha_publicacion_i;--copiado
        
        exception
            when others then
            contenedor := null;
            DBMS_OUTPUT.PUT_LINE(TO_CHAR(contenedor.numero)); 
      END;

    
    
    IF( contenedor is null) THEN
                          
          INSERT INTO doc_id_obj_tab VALUES(
            doc_id_typ_seq.NEXTVAL,
            entidad_i,
            tipo_doc_i,
            numero_i,
            fecha_publicacion_i); 
            val := doc_id_typ_seq.CURRVAL;-- tengo duda sobre este currval    

     ELSE
     
          INSERT INTO doc_id_obj_tab VALUES(contenedor);--pegado
          DELETE FROM doc_id_sin_archivo_obj_tab m WHERE m.id = contenedor.id;--eliminado
          val := contenedor.id;    
     
     END IF;
  
END CREAR_DOCUMENTO_PRO;
/