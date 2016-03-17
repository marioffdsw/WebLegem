
DROP TRIGGER eliminar_tipo_entidad_trig;

CREATE TRIGGER eliminar_tipo_entidad_trig
    INSTEAD OF DELETE ON tipos_entidad_view
    FOR EACH ROW
BEGIN    
    FOR docSoportado in 1 .. :OLD.tipo_entidad.documentos_soportados.COUNT LOOP
        DELETE FROM documentos_soportados_tab ds WHERE ds.tipo_entidad = :OLD.tipo_entidad.id;
    END LOOP;

    DELETE FROM tipos_entidad_tab te WHERE te.id = :OLD.tipo_entidad.id;
END eliminar_tipo_entidad_trig;
/