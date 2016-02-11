CREATE OR REPLACE VIEW entidad_view AS
SELECT entidad_typ(
            e.id,
            ( 
                SELECT * 
                    FROM tipos_entidad_view tev WHERE e.tipo_entidad = tev.tipos_entidad.id
            ),
            e.nombre                        
        ) AS entidades
    FROM entidades_tab e;