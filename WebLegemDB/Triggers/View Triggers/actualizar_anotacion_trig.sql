
DROP TRIGGER actualizar_anotacion_trig;

CREATE TRIGGER actualizar_anotacion_trig
    INSTEAD OF UPDATE ON anotaciones_view
    FOR EACH ROW
BEGIN
    UPDATE anotaciones_tab ant
        SET descripcion = :NEW.anotacion.descripcion
        WHERE ant.id = :NEW.anotacion.id;
END actualizar_anotacion_trig;
/