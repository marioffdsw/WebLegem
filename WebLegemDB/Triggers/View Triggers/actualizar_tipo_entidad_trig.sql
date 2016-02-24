
DROP TRIGGER actualizar_tipo_entidad_trig;

CREATE TRIGGER actualizar_tipo_entidad_trig
   INSTEAD OF UPDATE ON tipos_entidad_view
   FOR EACH ROW
BEGIN
    UPDATE tipos_entidad_tab te
        SET nombre = :NEW.tipo_entidad.nombre
        WHERE te.id = :NEW.tipo_entidad.id;    
END actualizar_tipo_entidad_trig;
/