CREATE OR REPLACE FUNCTION create_ta
    ( tipo_anotacion IN tipo_anotacion_typ )
RETURN tipo_anotacion_typ
IS
BEGIN
    INSERT INTO tipos_anotacion_tab ta 
        ( id, nombre, raiz )
        VALUES ( 
            tipo_anotacion_seq.NEXTVAL,
            tipo_anotacion.nombre,
            tipo_anotacion.raiz );

    RETURN get_ta( tipo_anotacion_seq.CURRVAL );
END create_ta;
/