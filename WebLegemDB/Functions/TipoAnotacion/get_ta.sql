CREATE OR REPLACE FUNCTION get_ta
    ( id_ IN NUMBER )
RETURN tipo_anotacion_typ
IS
    tipo_anotacion      tipo_anotacion_typ;
BEGIN
    SELECT tipo_anotacion_typ(
        ta.id,
        ta.nombre,
        ta.raiz,
        ta.ultima_modificacion )
        INTO tipo_anotacion
        FROM tipos_anotacion_tab ta
        WHERE ta.id = id_;

    RETURN tipo_anotacion;
END get_ta;
/