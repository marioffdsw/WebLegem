CREATE OR REPLACE FUNCTION get_i_d
    ( id_ IN NUMBER )
RETURN documento_typ
IS
    id_doc          documento_typ;
BEGIN
    SELECT documento_typ(
            idt.id,
            get_e( idt.entidad ),
            get_td( idt.tipo_documento ),
            idt.numero,
            idt.fecha_publicacion,
            idt.ultima_modificacion )
        INTO id_doc
        FROM identificadores_documentos_tab idt
        WHERE idt.id = id_;

    RETURN id_doc;
END get_i_d;
/