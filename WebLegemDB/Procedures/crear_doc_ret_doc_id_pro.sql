-- Drop the existing procedure (if any)
DROP PROCEDURE crear_doc_ret_doc_id_pro;


-- Procedure definition
CREATE OR REPLACE PROCEDURE crear_doc_ret_doc_id_pro(
    entidad_i              NUMBER,
    tipo_doc_i             NUMBER,
    numero_i               VARCHAR2,
    fecha_publicacion_i    CHAR,
    val                    OUT REF doc_id_typ )
AS 
    numero NUMBER;
    contenedor doc_id_typ;
BEGIN    

    
    BEGIN
        --buscar si existe un documento con el mismo id(4 campos)
        SELECT VALUE( u ) INTO contenedor 
            FROM doc_id_sin_archivo_obj_tab u 
            WHERE u.entidad = entidad_i AND
                u.tipo_doc = tipo_doc_i AND
                u.numero = numero_i AND
                u.fecha_publicacion = fecha_publicacion_i; --copiado
        
        EXCEPTION
            WHEN OTHERS THEN
                contenedor := null;
                DBMS_OUTPUT.PUT_LINE(TO_CHAR(contenedor.numero)); 
    END;    	 
      
      
    IF( contenedor is null) THEN
                          
        contenedor := doc_id_typ( doc_id_typ_seq.NEXTVAL, entidad_i,
            tipo_doc_i, numero_i, fecha_publicacion_i ); 
   
        INSERT INTO doc_id_obj_tab VALUES( contenedor );             

		SELECT REF(di) INTO val FROM doc_id_obj_tab di WHERE contenedor.id = di.id;
    ELSE     
        INSERT INTO doc_id_obj_tab VALUES( contenedor ); -- pegado 

		DELETE FROM doc_id_sin_archivo_obj_tab m 
            WHERE m.id = contenedor.id;--eliminado          

		SELECT REF(di) INTO val 
            FROM doc_id_obj_tab di 
            WHERE contenedor.id = di.id;                
    END IF;
  
END crear_doc_ret_doc_id_pro;
/