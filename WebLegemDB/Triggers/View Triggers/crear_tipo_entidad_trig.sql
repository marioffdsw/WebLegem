
DROP TRIGGER crear_tipo_entidad_trig;

CREATE TRIGGER crear_tipo_entidad_trig
   INSTEAD OF INSERT ON tipos_entidad_view
   FOR EACH ROW
BEGIN
    IF :NEW.tipo_entidad.id = 0
    THEN
        INSERT INTO tipos_entidad_tab( id, nombre ) VALUES ( tipo_entidad_seq.NEXTVAL, :NEW.tipo_entidad.nombre );         
        FOR elem IN 1 .. :NEW.tipo_entidad.documentos_soportados.COUNT LOOP
            INSERT INTO documentos_soportados_tab( tipo_entidad, tipo_documento )
                VALUES( tipo_entidad_seq.CURRVAL, :NEW.tipo_entidad.documentos_soportados( elem ).id );
        END LOOP;
    END IF;
END crear_tipo_entidad_trig;
/