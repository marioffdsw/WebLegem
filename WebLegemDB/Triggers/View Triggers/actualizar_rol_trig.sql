
DROP TRIGGER actualizar_rol_trig;

CREATE TRIGGER actualizar_rol_trig
    INSTEAD OF UPDATE ON roles_view
    FOR EACH ROW
BEGIN
    UPDATE roles_tab rt
        SET nombre = :NEW.rol.nombre
        WHERE rt.id = :NEW.rol.id;

    FOR elem IN 1 .. :NEW.rol.permisos_asignados.COUNT LOOP
        DELETE FROM permisos_asignados_tab pat
            WHERE pat.rol = :OLD.rol.id AND
                pat.permiso = :OLD.rol.permisos_asignados(elem).id;
    END LOOP;
    
    FOR elem IN 1 .. :NEW.rol.permisos_asignados.COUNT LOOP
            INSERT INTO permisos_asignados_tab
                VALUES ( :NEW.rol.id, :NEW.rol.permisos_asignados(elem).id );
        END LOOP;
END actualizar_rol_trig;
/