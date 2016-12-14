CREATE OR REPLACE FUNCTION create_u
    ( new_u     IN  usuario_typ )
RETURN usuario_typ
IS
BEGIN
    INSERT INTO usuarios_tab 
        (id, nombre_usuario, nombre, apellido, contrasena, correo, foto, estado, rol )
        VALUES
        (
            usuario_seq.NEXTVAL,
            new_u.nombre_usuario,
            new_u.nombre,
            new_u.apellido,
            new_u.contrasena,
            new_u.correo,
            new_u.foto,
            new_u.estado,
            new_u.rol.id
        );

    RETURN get_u( usuario_seq.CURRVAL );
END create_u;
/