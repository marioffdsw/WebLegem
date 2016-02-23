
DROP TRIGGER eliminar_tipo_entidad_trig;

CREATE TRIGGER eliminar_tipo_entidad_trig
    INSTEAD OF DELETE ON tipos_entidad_view
    FOR EACH ROW
BEGIN    
    DELETE FROM tipos_entidad_tab te WHERE te.id = :OLD.tipo_entidad.id;
END eliminar_tipo_entidad_trig;
/