CREATE OR REPLACE FUNCTION get_r
    ( id_   IN  NUMBER)
RETURN rol_typ
IS
    rol             rol_typ;
BEGIN
    SELECT rol_typ
        (
            rt.id,
            rt.nombre,
            CAST( MULTISET(
                SELECT recurso_typ( ret.id, ret.nombre, ret.descripcion )
                    FROM recursos_tab ret
                        JOIN permisos_tab pt ON pt.recurso = ret.id
                        JOIN roles_tab rt_i ON pt.rol = rt_i.id
                    WHERE rt.id = rt_i.id )
                AS permiso_tab_typ ),
            rt.ultima_modificacion )
        INTO rol
        FROM roles_tab rt
        WHERE rt.id = id_;

    RETURN rol;
END get_r;
/