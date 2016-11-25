CREATE OR REPLACE FUNCTION update_e
    (new_e          IN      entidad_typ)
RETURN entidad_typ
IS
    update_failed           EXCEPTION;
    old_e                   entidad_typ;
BEGIN
    old_e := get_e( new_e.id );

    IF old_e.ultima_modificacion = new_e.ultima_modificacion
        AND new_e.id <> 0
    THEN
        UPDATE entidades_tab e SET
                nombre = new_e.nombre,
                tipo_entidad = new_e.tipo_entidad.id,
                ultima_modificacion = SYSDATE
            WHERE e.id = new_e.id;
        
        RETURN get_e( new_e.id );        
    ELSE
        RAISE update_failed;
    END IF;
    
EXCEPTION
    WHEN update_failed THEN
        ROLLBACK;
    WHEN OTHERS THEN ROLLBACK;
END update_e;
/