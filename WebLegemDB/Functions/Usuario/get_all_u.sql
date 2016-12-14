CREATE OR REPLACE FUNCTION get_all_u
RETURN SYS_REFCURSOR
IS
    res SYS_REFCURSOR;
BEGIN
    OPEN res FOR
        SELECT get_u( ut.id )
        FROM usuarios_tab ut;

    RETURN res;
END get_all_u;
/