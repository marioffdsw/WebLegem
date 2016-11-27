CREATE OR REPLACE FUNCTION get_all_ta
RETURN SYS_REFCURSOR
IS
    res         SYS_REFCURSOR;
BEGIN
    OPEN res FOR
        SELECT tipo_anotacion_typ (
                ta.id,
                ta.nombre,
                ta.raiz,
                ta.ultima_modificacion )
            FROM tipos_anotacion_tab ta;

        RETURN res;
END get_all_ta;
/