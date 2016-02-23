CREATE OR REPLACE VIEW entidades_view AS
SELECT entidad_typ(
            e.id,
            ( 
                SELECT * 
                    FROM tipos_entidad_view tev WHERE e.tipo_entidad = tev.tipo_entidad.id
            ),
            e.nombre                        
        ) AS entidad
    FROM entidades_tab e;