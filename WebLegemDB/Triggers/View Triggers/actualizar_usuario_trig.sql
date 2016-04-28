
DROP TRIGGER actualizar_usuario_trig;

CREATE TRIGGER actualizar_usuario_trig
    INSTEAD OF UPDATE on usuarios_view
    FOR EACH ROW
BEGIN
    UPDATE usuarios_tab ut
        SET nombre = :NEW.usuario.nombre,
        apellido = :NEW.usuario.apellido,
        correo = :NEW.usuario.correo
        WHERE ut.id = :NEW.usuario.id;
        

END actualizar_usuario_trig;