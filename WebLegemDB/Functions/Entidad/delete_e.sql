CREATE OR REPLACE PROCEDURE delete_e
    ( id_ IN NUMBER )
IS
BEGIN
    DELETE FROM entidades_tab e
        WHERE e.id = id_;
END delete_e;
/