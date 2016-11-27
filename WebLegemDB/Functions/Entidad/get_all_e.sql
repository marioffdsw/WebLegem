CREATE OR REPLACE FUNCTION get_all_e
RETURN SYS_REFCURSOR
IS
    res SYS_REFCURSOR;
BEGIN
    OPEN res FOR
        SELECT entidad_typ(
            e.id,
            get_te( e.tipo_entidad ),
            e.nombre,            
            e.ultima_modificacion )
        FROM entidades_tab e;

    RETURN res;
END get_all_e;
/