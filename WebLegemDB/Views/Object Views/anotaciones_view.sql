CREATE OR REPLACE VIEW anotaciones_view AS
SELECT anotacion_typ
    (
        ant.id,
        (
            SELECT dcv.documento_con_contenido AS documento_typ FROM documentos_contenido_view dcv 
                WHERE dcv.documento_con_contenido.id = ant.documento_anotante 
        ),
        ( SELECT * FROM documentos_sin_contenido_view scv WHERE scv.documento_sin_contenido.id = ant.documento_anotado ),
        ( SELECT * FROM tipos_anotacion_view tav WHERE tav.tipo_anotacion.id = ant.id ),
        ant.descripcion,
        ant.fecha
    ) AS anotacion
    FROM anotaciones_tab ant;               