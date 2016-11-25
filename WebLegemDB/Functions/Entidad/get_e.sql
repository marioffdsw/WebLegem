CREATE OR REPLACE FUNCTION get_e
    ( id_ IN NUMBER )
RETURN entidad_typ
IS
    entidad entidad_typ;
BEGIN
    SELECT entidad_typ(
            e.id,
            get_te( e.tipo_entidad ),
            e.nombre,
            e.ultima_modificacion)
        INTO entidad
        FROM entidades_tab e
        WHERE e.id = id_;

    RETURN entidad;
END get_e;
/