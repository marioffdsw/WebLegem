CREATE OR REPLACE FUNCTION create_a
    ( new_a     IN  anotacion_typ )
RETURN anotacion_typ
IS
BEGIN
    INSERT INTO anotaciones_tab ( 
        id,
        documento_anotante, 
        documento_anotado, 
        tipo_anotacion, 
        descripcion )
        VALUES (
            anotacion_seq.NEXTVAL,
            new_a.doc_anotante.id,
            new_a.doc_anotado.id,
            new_a.tipo_anotacion.id,
            new_a.descripcion
        );

    RETURN get_a( anotacion_seq.CURRVAL );
END create_a;
/