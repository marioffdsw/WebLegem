
CREATE OR REPLACE VIEW documentos_view AS
SELECT
    documento_typ
    (
        ide.id,
        ( SELECT * FROM entidades_view ev WHERE ev.entidad.id = ide.entidad  ),
        ( SELECT * FROM tipos_documento_view tdv WHERE tdv.tipo_documento.id = ide.tipo_documento ),
        ide.numero,
        ide.fecha_publicacion
    ) AS documento
    FROM identificadores_documentos_tab ide;