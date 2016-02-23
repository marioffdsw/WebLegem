
DROP TRIGGER crear_entidad_trig;

CREATE TRIGGER crear_entidad_trig
   INSTEAD OF INSERT ON entidades_view
   FOR EACH ROW
BEGIN
    IF :NEW.entidad.id = 0
    THEN
        INSERT INTO entidades_tab( id, tipo_entidad, nombre ) VALUES ( entidad_seq.NEXTVAL, :NEW.entidad.tipo_entidad.id, :NEW.entidad.nombre);         
    END IF;
END crear_tipo_documento_trig;
/