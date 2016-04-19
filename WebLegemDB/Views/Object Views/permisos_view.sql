CREATE OR REPLACE VIEW permisos_view AS
SELECT permiso_typ(
            pt.id,

            ( 
                SELECT * 
                    FROM recursos_view rv WHERE pt.recurso = rv.recurso.id
            ),
            (
                SELECT *
                    FROM acciones_view av WHERE av.accion.id = pt.accion
            )            
        ) AS permiso
    FROM permisos_tab pt;