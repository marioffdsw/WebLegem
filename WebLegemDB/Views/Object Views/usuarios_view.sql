CREATE OR REPLACE VIEW usuarios_view AS
SELECT usuario_typ(
            u.id,
            u.nombre_usuario,
            u.nombre,
            u.apellido,
            u.contrasena,
            u.correo,
            u.foto,
            u.estado,
            (
                SELECT * 
                    FROM roles_view rv WHERE u.rol = rv.rol.id
            )
        ) AS usuario
    FROM usuarios_tab u;