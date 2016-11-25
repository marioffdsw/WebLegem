CREATE OR REPLACE FUNCTION update_td
    ( new_td IN tipo_documento_typ )
RETURN tipo_documento_typ
IS
    update_failed EXCEPTION;
    old_td tipo_documento_typ;
BEGIN
    old_td := get_td( new_td.id );

    IF old_td.ultima_modificacion = new_td.ultima_modificacion
        AND new_td.id <> 0
    THEN
        UPDATE tipos_documento_tab td SET 
            nombre = new_td.nombre,
            ultima_modificacion = SYSDATE          
        WHERE td.id = new_td.id; 
    ELSE
        RAISE update_failed;
    END IF;
    
    RETURN new_td;
EXCEPTION
    WHEN update_failed THEN 
        ROLLBACK;
    WHEN OTHERS THEN ROLLBACK;
END;
/