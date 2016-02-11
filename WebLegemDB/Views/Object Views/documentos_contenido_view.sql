CREATE OR REPLACE VIEW documentos_contenido_view AS
SELECT 
    documento_contenido_typ
    (
        ide.id,
        ( SELECT * FROM entidad_view ev WHERE ev.entidades.id = ide.entidad  ), -- TODO - cambiar el nombre de las vistas a plural
        ( SELECT * FROM tipos_documento_view tdv WHERE tdv.tipos_documento.id = ide.tipo_documento ),
        ide.numero,
        ide.año_publicacion,
        ca.id,
        ca.archivo,
        ca.asunto,
        ca.contenido
    ) AS documento_contenido
    FROM identificadores_documentos_tab ide JOIN
        contenidos_archivos_tab ca ON ide.id = ca.identificador_documento
    WHERE ca.estado LIKE '%A%';