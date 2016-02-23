CREATE OR REPLACE VIEW tipos_documento_view AS
SELECT tipo_documento_typ( td.id, td.nombre ) AS tipo_documento
    FROM tipos_documento_tab td;