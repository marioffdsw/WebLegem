
DROP TRIGGER eliminar_anotacion_trig;

CREATE TRIGGER eliminar_anotacion_trig
    INSTEAD OF DELETE ON anotaciones_view
    FOR EACH ROW
BEGIN
    DELETE FROM anotaciones_tab ant 
        WHERE ant.id = :OLD.anotacion.id;
END eliminar_anotacion_trig;
/