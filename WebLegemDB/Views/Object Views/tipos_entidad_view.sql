CREATE OR REPLACE VIEW tipos_entidad_view AS
SELECT tipo_entidad_typ(
            te_extern.id,
            te_extern.nombre,

            -- este CAST y MULTISET transformaN el SELECT en una tabla anidada de tipo tipo_docuemento_tab_typ
            CAST( MULTISET (                
                    SELECT tipo_documento_typ( td.id, td.nombre )
                        FROM tipos_documento_tab td JOIN documentos_soportados_tab ds ON td.id = ds.tipo_documento
                            JOIN tipos_entidad_tab te ON te.id = ds.tipo_entidad 
                        WHERE te.id = te_extern.id                
            ) AS tipo_documento_tab_typ ) 

        ) AS tipo_entidad
    FROM tipos_entidad_tab te_extern;