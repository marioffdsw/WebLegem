CREATE OR REPLACE FUNCTION update_u
    ( new_u     IN  usuario_typ )
RETURN usuario_typ
IS
    update_failed EXCEPTION;
    old_u   usuario_typ;
BEGIN
    old_u := get_u( new_u.id );

    IF old_u.ultima_modificacion = new_u.ultima_modificacion
        AND new_u.id <> 0
    THEN
        UPDATE usuarios_tab SET            
                nombre_usuario = new_u.nombre_usuario,
                nombre = new_u.nombre,
                apellido = new_u.apellido,
                contrasena = new_u.contrasena,
                correo = new_u.correo,
                foto = new_u.foto,
                estado = new_u.estado,
                rol = new_u.rol.id,
                ultima_modificacion = SYSDATE
            WHERE id = new_u.id;

        RETURN new_u;
    ELSE
        RAISE update_failed;
    END IF;
EXCEPTION
    WHEN update_failed THEN ROLLBACK;
    WHEN OTHERS THEN ROLLBACK;
END update_u;
/