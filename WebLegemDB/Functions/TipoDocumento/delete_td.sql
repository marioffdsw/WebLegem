CREATE OR REPLACE PROCEDURE delete_td
    (id_ IN NUMBER)
IS
BEGIN
    DELETE FROM tipos_documento_tab td
    WHERE td.id = id_;
END delete_td;
/