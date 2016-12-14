CREATE OR REPLACE FUNCTION get_u
    ( id_   IN NUMBER )
RETURN usuario_typ
IS
    res usuario_typ;
BEGIN
    SELECT usuario_typ(
        ut.id,
        ut.nombre_usuario,
        ut.nombre,
        ut.apellido,
        ut.contrasena,
        ut.correo,
        ut.foto,
        ut.estado,
        get_r( ut.rol ),
        ut.ultima_modificacion )
    INTO res
    FROM usuarios_tab ut
    WHERE ut.id = id_;

    RETURN res;
END get_u;
/