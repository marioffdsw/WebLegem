CREATE OR REPLACE FUNCTION get_a_from_id
    ( id_   IN  NUMBER )
RETURN SYS_REFCURSOR
IS
    res SYS_REFCURSOR;
BEGIN
    OPEN res FOR
        SELECT get_a( ant.id )        
        FROM anotaciones_tab ant
        WHERE ant.documento_anotado = id_;

    RETURN res;
END get_a_from_id;
/