
DROP TRIGGER crear_tipo_entidad_trig;

CREATE TRIGGER crear_tipo_entidad_trig
   INSTEAD OF INSERT ON tipos_entidad_view
   FOR EACH ROW
BEGIN
    IF :NEW.tipo_entidad.id = 0
    THEN
        INSERT INTO tipos_entidad_tab( id, nombre ) VALUES ( tipo_entidad_seq.NEXTVAL, :NEW.tipo_entidad.nombre );         
    END IF;
END crear_tipo_entidad_trig;
/