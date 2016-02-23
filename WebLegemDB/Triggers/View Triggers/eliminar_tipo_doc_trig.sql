
DROP TRIGGER eliminar_tipo_documento_trig;

CREATE TRIGGER eliminar_tipo_documento_trig
    INSTEAD OF DELETE ON tipos_documento_view
    FOR EACH ROW
BEGIN    
    DELETE FROM tipos_documento_tab td WHERE td.id = :OLD.tipo_documento.id;
END eliminar_tipo_documento_trig;
/