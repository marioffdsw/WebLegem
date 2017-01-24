CREATE OR REPLACE FUNCTION update_a
    ( new_a     IN  anotacion_typ )
RETURN anotacion_typ
IS
    update_failed   EXCEPTION;
    old_a           anotacion_typ;
BEGIN
    old_a := get_a( new_a.id );

    IF old_a.ultima_modificacion = new_a.ultima_modificacion
        AND new_a.id <> 0
    THEN
        UPDATE anotaciones_tab SET
                descripcion = new_a.descripcion
            WHERE id = old_a.id;
        
        RETURN new_a;
    ELSE
        RAISE update_failed;
    END IF;
EXCEPTION
    WHEN update_failed THEN ROLLBACK;
    WHEN OTHERS THEN ROLLBACK;
END update_a;
/