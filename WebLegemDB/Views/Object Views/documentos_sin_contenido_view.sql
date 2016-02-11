CREATE OR REPLACE VIEW documentos_sin_contenido_view AS
SELECT documento_typ
    (
        ide.id,
        ( SELECT * FROM entidad_view ev WHERE ev.entidades.id = ide.entidad  ), -- TODO - cambiar el nombre de las vistas a plural
        ( SELECT * FROM tipos_documento_view tdv WHERE tdv.tipos_documento.id = ide.tipo_documento ),
        ide.numero,
        ide.año_publicacion
    ) AS documentos
    FROM  identificadores_documentos_tab ide
    WHERE ide.id NOT IN
        (
            SELECT dcv.documento_contenido.id_identificador
                FROM documentos_contenido_view dcv
                WHERE dcv.documento_contenido.id_identificador = ide.id
        );