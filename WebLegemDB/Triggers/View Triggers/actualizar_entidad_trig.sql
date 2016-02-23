
DROP TRIGGER actualizar_entidad_trig;

CREATE TRIGGER actualizar_entidad_trig
   INSTEAD OF UPDATE ON entidades_view
   FOR EACH ROW
BEGIN
    UPDATE entidades_tab e
        SET nombre = :NEW.entidad.nombre,
            tipo_entidad = :NEW.entidad.tipo_entidad.id
        WHERE e.id = :NEW.entidad.id;    
END actualizar_entidad_trig;
/