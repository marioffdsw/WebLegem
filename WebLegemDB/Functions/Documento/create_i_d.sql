CREATE OR REPLACE FUNCTION create_i_d
    ( id_doc IN documento_typ )
RETURN documento_typ
IS
BEGIN
    INSERT INTO identificadores_documentos_tab
            ( id, entidad, tipo_documento, numero, fecha_publicacion )
        VALUES (
            identificador_documento_seq.NEXTVAL,
            id_doc.entidad.id,
            id_doc.tipo_documento.id,
            id_doc.numero,
            id_doc.fecha_publicacion );

    RETURN get_i_d( identificador_documento_seq.CURRVAL );
END create_i_d;
/