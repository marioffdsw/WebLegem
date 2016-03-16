CREATE OR REPLACE VIEW documentos_sin_contenido_view AS
SELECT documento_typ
    (
        ide.id,
        ( SELECT * FROM entidades_view ev WHERE ev.entidad.id = ide.entidad  ), -- TODO - cambiar el nombre de las vistas a plural
        ( SELECT * FROM tipos_documento_view tdv WHERE tdv.tipo_documento.id = ide.tipo_documento ),
        ide.numero,
        ide.fecha_publicacion
    ) AS documento_sin_contenido
    FROM  identificadores_documentos_tab ide
    WHERE ide.id NOT IN
        (
            SELECT dcv.documento_con_contenido.id
                FROM documentos_contenido_view dcv
                WHERE dcv.documento_con_contenido.id = ide.id
        );