CREATE OR REPLACE FUNCTION delete_a
    (id_    IN  NUMBER )
RETURN anotacion_typ
IS
BEGIN
    DELETE FROM anotaciones_tab
        WHERE id = id_;
END delete_a;
/