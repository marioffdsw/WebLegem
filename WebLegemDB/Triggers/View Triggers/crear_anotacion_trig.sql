
DROP TRIGGER crear_anotacion_trig;

CREATE TRIGGER crear_anotacion_trig
    INSTEAD OF INSERT ON anotaciones_view
    FOR EACH ROW
BEGIN
    IF :NEW.anotacion.id = 0
    THEN 
        INSERT INTO anotaciones_tab( id, documento_anotante,
            documento_anotado, tipo_anotacion, descripcion )
            VALUES (
                anotacion_seq.NEXTVAL,
                :NEW.anotacion.doc_anotante.id,
                :NEW.anotacion.doc_anotado.id,
                :NEW.anotacion.tipo_anotacion.id,
                :NEW.anotacion.descripcion
            );
    END IF;
END crear_anotacion_trig;
/