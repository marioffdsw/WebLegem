CREATE OR REPLACE FUNCTION create_r
    ( new_r     IN  rol_typ )
RETURN rol_typ
IS
BEGIN
    INSERT INTO roles_tab ( id, nombre )
        VALUES ( rol_seq.NEXTVAL, new_r.nombre );

    FOR i IN 1 .. new_r.permisos_asignados.COUNT LOOP
        INSERT INTO permisos_tab
            ( rol, recurso )
            VALUES ( rol_seq.CURRVAL, new_r.permisos_asignados(i).id ); 
    END LOOP;

    RETURN get_r( rol_seq.CURRVAL );
END create_r;
/