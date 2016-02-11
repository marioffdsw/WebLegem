-- Drop the existing procedure (if any)
DROP PROCEDURE crear_entidad_pro;

-- Procedure definition

create or replace 
PROCEDURE crear_entidad_pro(
    nombre IN VARCHAR2, 
    id_tipo_entidad IN NUMBER ) 
AS 
BEGIN
    INSERT INTO entidad_obj_tab VALUES (
        entidad_seq.NEXTVAL,
        ( 
            SELECT REF(d) 
                FROM tipo_entidad_obj_tab d 
                WHERE d.id = id_tipo_entidad 
        ),
        nombre );  
END crear_entidad_pro;
/