CREATE OR REPLACE PROCEDURE delete_r
    ( id_   IN NUMBER )
IS
BEGIN
    DELETE FROM permisos_tab pt
        WHERE id_ = pt.rol;

    DELETE FROM roles_tab rt
        WHERE id_ = rt.id;    
END delete_r;
/