CREATE OR REPLACE FUNCTION create_e
    (entidad IN entidad_typ)
RETURN entidad_typ
IS   
BEGIN
    INSERT INTO entidades_tab (id, nombre, tipo_entidad )
        VALUES (
            entidad_seq.NEXTVAL,
            entidad.nombre,
            entidad.tipo_entidad.id );

    RETURN get_e( entidad_seq.CURRVAL );
END create_e;
/