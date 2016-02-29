
DROP TRIGGER crear_doc_contenido_trig;

CREATE TRIGGER crear_doc_contenido_trig
   INSTEAD OF INSERT ON documentos_contenido_view
   FOR EACH ROW
BEGIN
    IF :NEW.documento_con_contenido.id = 0
    THEN
        
        INSERT INTO identificadores_documentos_tab(id, entidad, tipo_documento, numero, anio_publicacion) 
            VALUES ( identificadores_documentos_seq.NEXTVAL, 
                :NEW.documento_con_contenido.entidad.id,
                :NEW.documento_con_contenido.tipo_documento.id,
                :NEW.documento_con_contenido.numero,
                :NEW.documento_con_contenido.anio_publicacion );
        
        INSERT INTO contenidos_archivos_tab( id, archivo, identificador_documento, asunto, contenido, estado )
            VALUES ( :NEW.documento_con_contenido.archivo,
                :NEW.documento_con_contenido.archivo,
                identificadores_documentos_seq.CURRVAL,
                :NEW.documento_con_contenido.asunto,
                :NEW.documento_con_contenido.contenido,
                'A' );         
    END IF;
END crear_tipo_documento_trig;
/