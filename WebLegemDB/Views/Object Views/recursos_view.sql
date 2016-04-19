CREATE OR REPLACE VIEW recursos_view AS
SELECT recurso_typ( 
    rect.id,
    rect.nombre, 
    (
        SELECT *
            FROM modulos_view mv 
            WHERE mv.modulo.id = rect.modulo
    ) ) AS recurso
    FROM recursos_tab rect;