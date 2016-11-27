CREATE OR REPLACE FUNCTION create_te
    (tipo_entidad IN tipo_entidad_typ)
RETURN tipo_entidad_typ
IS
BEGIN
    INSERT INTO tipos_entidad_tab ( id, nombre )
        VALUES ( tipo_entidad_seq.NEXTVAL, tipo_entidad.nombre );

    FOR i IN 1 .. tipo_entidad.documentos_soportados.COUNT LOOP
        INSERT INTO documentos_soportados_tab 
            ( tipo_entidad, tipo_documento )
            VALUES ( tipo_entidad_seq.CURRVAL,
                tipo_entidad.documentos_soportados(i).id );
    END LOOP;    

    RETURN get_te( tipo_entidad_seq.CURRVAL );
END create_te;
/