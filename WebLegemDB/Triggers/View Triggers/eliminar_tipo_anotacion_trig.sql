
DROP TRIGGER eliminar_tipo_anotacion_trig;

CREATE TRIGGER eliminar_tipo_anotacion_trig
    INSTEAD OF DELETE ON tipos_anotacion_view
    FOR EACH ROW
BEGIN
    DELETE FROM tipos_anotacion_tab tat WHERE tat.id = :OLD.tipo_anotacion.id;
END eliminar_tipo_anotacion_trig;
/