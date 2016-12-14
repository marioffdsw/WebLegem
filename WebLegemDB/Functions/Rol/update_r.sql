CREATE OR REPLACE FUNCTION update_r
    ( new_r  IN     rol_typ )
RETURN rol_typ
IS
    update_failed EXCEPTION;
    old_r rol_typ;
BEGIN
    old_r := get_r( new_r.id );

    IF old_r.ultima_modificacion = new_r.ultima_modificacion
        AND new_r.id <> 0
    THEN
        UPDATE roles_tab SET
                nombre = new_r.nombre,
                ultima_modificacion = SYSDATE
            WHERE id = new_r.id;

        DELETE FROM permisos_tab pt
            WHERE pt.rol = new_r.id;

        FOR i IN 1 .. new_r.permisos_asignados.COUNT LOOP
            INSERT INTO permisos_tab
                    ( rol, recurso )
                VALUES( new_r.id, new_r.permisos_asignados(i).id );
        END LOOP;

        RETURN new_r;
    ELSE
        RAISE update_failed;
    END IF;
EXCEPTION
    WHEN update_failed THEN
        ROLLBACK;
    WHEN OTHERS THEN ROLLBACK;
END update_r;
/