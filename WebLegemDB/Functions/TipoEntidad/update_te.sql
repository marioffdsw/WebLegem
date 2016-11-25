CREATE OR REPLACE FUNCTION update_te
    ( new_te IN tipo_entidad_typ )
RETURN tipo_entidad_typ
IS
    update_failed EXCEPTION;
    old_te tipo_entidad_typ;
BEGIN
    old_te := get_te( new_te.id );

    IF old_te.ultima_modificacion = new_te.ultima_modificacion 
        AND new_te.id <> 0      
    THEN
        UPDATE tipos_entidad_tab SET
                nombre = new_te.nombre,
                ultima_modificacion = SYSDATE
            WHERE id = new_te.id;

        DELETE FROM documentos_soportados_tab ds
            WHERE ds.tipo_entidad = new_te.id;

        FOR i IN 1 .. new_te.documentos_soportados.COUNT LOOP
            INSERT INTO documentos_soportados_tab
                ( tipo_entidad, tipo_documento )
            VALUES
                ( new_te.id, new_te.documentos_soportados(i).id );
        END LOOP;

        RETURN new_te;
    ELSE
        RAISE update_failed;
    END IF;        
EXCEPTION
    WHEN update_failed THEN
        ROLLBACK;
    WHEN OTHERS THEN ROLLBACK;
END update_te;
/