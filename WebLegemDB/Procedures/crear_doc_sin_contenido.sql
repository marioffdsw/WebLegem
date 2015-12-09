-- Drop the existing procedure (if any)

DROP PROCEDURE crear_doc_sin_contenido;

-- Procedure definition

CREATE OR REPLACE PROCEDURE CREAR_DOC_SIN_CONTENIDO_PRO(
   entidad_i              NUMBER,
   tipo_doc_i             NUMBER,
   numero_i               VARCHAR2,
   fecha_publicacion_i    CHAR
) 

AS 
BEGIN
  
  INSERT INTO doc_id_sin_archivo_obj_tab VALUES(         
            doc_id_typ_seq.NEXTVAL,
            entidad_i,
            tipo_doc_i,
            numero_i,
            fecha_publicacion_i); 
        
END CREAR_DOC_SIN_CONTENIDO_PRO;
/
