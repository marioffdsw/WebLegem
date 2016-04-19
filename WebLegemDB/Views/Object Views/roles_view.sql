CREATE OR REPLACE VIEW roles_view AS
SELECT
    rol_typ
    (
        rt.id,
        rt.nombre,

        CAST(
            MULTISET
            (
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
                FROM permisos_tab pt JOIN permisos_asignados_tab pat ON pat.permiso = pt.id
                        JOIN roles_tab rti ON pat.rol = rti.id
                WHERE rti.id = rt.id                
            ) AS permiso_tab_typ
        )
    ) AS rol
    FROM roles_tab rt;