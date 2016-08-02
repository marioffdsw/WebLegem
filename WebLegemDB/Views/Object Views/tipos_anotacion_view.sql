CREATE OR REPLACE VIEW tipos_anotacion_view AS
SELECT tipo_anotacion_typ
    (
        tat.id,
        tat.nombre,
        tat.raiz
    ) AS tipo_anotacion
    FROM tipos_anotacion_tab tat;