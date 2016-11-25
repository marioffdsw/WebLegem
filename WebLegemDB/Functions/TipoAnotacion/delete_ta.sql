CREATE OR REPLACE PROCEDURE delete_ta
    (id_ IN NUMBER)
IS
BEGIN
    DELETE FROM tipos_anotacion_tab ta
        WHERE ta.id = id_;
END delete_ta;
/