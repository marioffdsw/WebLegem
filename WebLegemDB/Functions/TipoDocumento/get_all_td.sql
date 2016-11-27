CREATE OR REPLACE FUNCTION get_all_td
    RETURN SYS_REFCURSOR
IS
    res SYS_REFCURSOR;
BEGIN
    OPEN res FOR 
        SELECT tipo_documento_typ( td.id, td.nombre, td.ultima_modificacion ) AS tipo_documento
        FROM tipos_documento_tab td;

    RETURN res;
END get_all_td;
/