CREATE OR REPLACE FUNCTION get_a
    ( id_       IN  NUMBER )
RETURN anotacion_typ
IS
    res anotacion_typ;
BEGIN
    SELECT anotacion_typ(
            ant.id,
            get_i_d( ant.documento_anotante ),
            get_i_d( ant.documento_anotado ),
            get_ta( ant.tipo_anotacion ),
            ant.descripcion,
            ant.ultima_modificacion )
        INTO res
        FROM anotaciones_tab ant
        WHERE ant.id = id_;

    RETURN res;
END get_a;
/