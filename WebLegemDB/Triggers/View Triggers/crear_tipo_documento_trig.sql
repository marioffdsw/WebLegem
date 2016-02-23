
DROP TRIGGER crear_tipo_documento_trig;

CREATE TRIGGER crear_tipo_documento_trig
   INSTEAD OF INSERT ON tipos_documento_view
   FOR EACH ROW
BEGIN
    IF :NEW.tipo_documento.id = 0
    THEN
        INSERT INTO tipos_documento_tab( id, nombre ) VALUES ( tipo_doc_seq.NEXTVAL, :NEW.tipo_documento.nombre );         
    END IF;
END crear_tipo_documento_trig;
/