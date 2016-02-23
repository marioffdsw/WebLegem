
DROP TRIGGER eliminar_entidad_trig;

CREATE TRIGGER eliminar_entidad_trig
    INSTEAD OF DELETE ON entidades_view
    FOR EACH ROW
BEGIN    
    DELETE FROM entidades_tab e WHERE e.id = :OLD.entidad.id;
END eliminar_entidad_trig;
/