CREATE OR REPLACE FUNCTION get_td
    (id_ IN NUMBER)
RETURN tipo_documento_typ
IS
    tipo_documento      tipo_documento_typ;
BEGIN
    SELECT tipo_documento_typ
        ( td.id, td.nombre, td.ultima_modificacion ) INTO tipo_documento
    FROM tipos_documento_tab td WHERE td.id = id_;

    RETURN tipo_documento;
END get_td;
/