
DROP TRIGGER crear_rol_trig;

CREATE TRIGGER crear_rol_trig
    INSTEAD OF INSERT ON roles_view
    FOR EACH ROW
BEGIN
    IF :NEW.rol.id = 0
    THEN
        INSERT INTO roles_tab( id, nombre )
            VALUES( rol_seq.NEXTVAL, :NEW.rol.nombre );

        FOR elem IN 1 .. :NEW.rol.permisos_asignados.COUNT LOOP
            INSERT INTO permisos_asignados_tab
                VALUES ( rol_seq.CURRVAL, :NEW.rol.permisos_asignados(elem).id );
        END LOOP;
    END IF;
END crear_rol_trig; 
/