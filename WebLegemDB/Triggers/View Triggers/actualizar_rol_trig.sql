
DROP TRIGGER actualizar_rol_trig;

CREATE TRIGGER actualizar_rol_trig
    INSTEAD OF UPDATE ON roles_view
    FOR EACH ROW
BEGIN
    UPDATE roles_tab rt
        SET nombre = :NEW.rol.nombre
        WHERE rt.id = :NEW.rol.id;
END actualizar_rol_trig;
/