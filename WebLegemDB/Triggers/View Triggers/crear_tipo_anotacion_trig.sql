
DROP TRIGGER crear_tipo_anotacion_trig;

CREATE TRIGGER crear_tipo_anotacion_trig
    INSTEAD OF INSERT ON tipos_anotacion_view
    FOR EACH ROW
BEGIN
    IF :NEW.tipo_anotacion.id = 0
    THEN
        INSERT INTO tipos_anotacion_tab( id, nombre, raiz ) 
            VALUES ( tipo_anotacion_seq.NEXTVAL, :NEW.tipo_anotacion.nombre, :NEW.tipo_anotacion.raiz );
    END IF;
END crear_tipo_anotacion_trig;
/
