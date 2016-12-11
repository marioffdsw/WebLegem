CREATE OR REPLACE FUNCTION get_id_match
    ( new_d documento_typ )
RETURN documento_typ
IS
    search documento_typ;
BEGIN
    SELECT documento_typ(
            idt.id,
            get_e( idt.entidad ),
            get_td( idt.tipo_documento ),
            idt.numero,
            idt.fecha_publicacion,
            idt.ultima_modificacion )            
        INTO search
        FROM identificadores_documentos_tab idt
        WHERE idt.entidad = new_d.entidad.id
            AND idt.tipo_documento = new_d.tipo_documento.id
            AND idt.numero = new_d.numero
            AND idt.fecha_publicacion = new_d.fecha_publicacion;

    RETURN search;
END get_id_match;
/