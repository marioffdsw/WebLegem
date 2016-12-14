CREATE OR REPLACE FUNCTION get_all_re
RETURN SYS_REFCURSOR
IS
    res     SYS_REFCURSOR;
BEGIN
    OPEN res FOR
        SELECT recurso_typ(
            ret.id,
            ret.nombre,
            ret.descripcion )
        FROM recursos_tab ret;

    RETURN res;
END get_all_re;
/