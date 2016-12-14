CREATE OR REPLACE FUNCTION get_all_r
RETURN SYS_REFCURSOR
IS
    res SYS_REFCURSOR;
BEGIN
    OPEN res FOR
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
        FROM roles_tab rt;
        
    RETURN res;      
END get_all_r;
/