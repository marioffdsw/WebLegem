CREATE OR REPLACE FUNCTION update_ta
    (new_ta             IN      tipo_anotacion_typ )
RETURN tipo_anotacion_typ
IS
    update_failed               EXCEPTION;
    old_ta                      tipo_anotacion_typ;
BEGIN

    old_ta := get_ta( new_ta.id );

    IF old_ta.ultima_modificacion = new_ta.ultima_modificacion
        AND new_ta.id <> 0
    THEN
        UPDATE tipos_anotacion_tab SET
                nombre = new_ta.nombre,
                raiz = new_ta.raiz,
                ultima_modificacion = SYSDATE
            WHERE id = new_ta.id;

        RETURN new_ta;
    ELSE
        RAISE update_failed;
    END IF;

EXCEPTION
    WHEN update_failed THEN ROLLBACK;
    WHEN OTHERS THEN ROLLBACK;
END;
/