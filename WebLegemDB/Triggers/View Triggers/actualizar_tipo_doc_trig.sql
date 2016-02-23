
DROP TRIGGER actualizar_tipo_doc_trig;

CREATE TRIGGER actualizar_tipo_doc_trig
   INSTEAD OF UPDATE ON tipos_documento_view
   FOR EACH ROW
BEGIN
    UPDATE tipos_documento_tab td
        SET nombre = :NEW.tipo_documento.nombre
        WHERE td.id = :NEW.tipo_documento.id;    
END actualizar_tipo_doc_trig;
/