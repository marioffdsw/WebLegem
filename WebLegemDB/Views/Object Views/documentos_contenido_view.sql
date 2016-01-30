CREATE OR REPLACE VIEW documentos_contenido_view AS
SELECT 
    documento_contenido_typ
    (
        ide.id,
        ( SELECT * FROM entidades_view ev WHERE ev.entidad.id = ide.entidad  ),
        ( SELECT * FROM tipos_documento_view tdv WHERE tdv.tipo_documento.id = ide.tipo_documento ),
        ide.numero,
        ide.fecha_publicacion,
        ca.id,
        ca.archivo,
        ca.asunto,
        ca.contenido
    ) AS documento_con_contenido
    FROM identificadores_documentos_tab ide JOIN
        contenidos_archivos_tab ca ON ide.id = ca.identificador_documento
    WHERE ca.estado LIKE '%A%';