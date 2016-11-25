CREATE OR REPLACE FUNCTION get_te
    ( id_ IN NUMBER )
RETURN tipo_entidad_typ
IS    
    tipo_entidad tipo_entidad_typ;
BEGIN
    SELECT tipo_entidad_typ(
            te.id, 
            te.nombre,
            CAST ( MULTISET (
                SELECT tipo_documento_typ(td.id, td.nombre, td.ultima_modificacion)
                    FROM tipos_documento_tab td JOIN
                        documentos_soportados_tab ds ON td.id = ds.tipo_documento JOIN
                        tipos_entidad_tab te_i ON te_i.id = ds.tipo_entidad
                    WHERE te_i.id = te.id )
                AS tipo_documento_tab_typ ),
            te.ultima_modificacion )
        INTO tipo_entidad
        FROM tipos_entidad_tab te
        WHERE te.id = id_;

    RETURN tipo_entidad;
END get_te;
/