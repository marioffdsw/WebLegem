
DROP TRIGGER actualizar_tipo_anotacion_trig;

CREATE TRIGGER actualizar_tipo_anotacion_trig
    INSTEAD OF UPDATE ON tipos_anotacion_view
    FOR EACH ROW
BEGIN
    UPDATE tipos_anotacion_tab tat
        SET nombre = :NEW.tipo_anotacion.nombre,
            raiz = :NEW.tipo_anotacion.raiz
        WHERE tat.id = :NEW.tipo_anotacion.id;
END actualizar_tipo_anotacion_trig;
/