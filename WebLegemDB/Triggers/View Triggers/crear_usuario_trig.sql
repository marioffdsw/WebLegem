
DROP TRIGGER crear_usuario_trig;

CREATE TRIGGER crear_usuario_trig
    INSTEAD OF INSERT ON usuarios_view
    FOR EACH ROW
BEGIN
    IF :NEW.usuario.id = 0
    THEN
        INSERT INTO usuarios_tab( id,
            nombre_usuario,
            nombre,
            apellido,
            contrasena,
            correo,
            foto,
            estado,
            rol )
        VALUES( 
            usuario_seq.NEXTVAL,
            :NEW.usuario.nombre_usuario,
            :NEW.usuario.nombre,
            :NEW.usuario.apellido,
            :NEW.usuario.contrasena,
            :NEW.usuario.correo,
            :NEW.usuario.foto,
            :NEW.usuario.estado,
            :NEW.usuario.rol.id );
    END IF;
END crear_usuario_trig;