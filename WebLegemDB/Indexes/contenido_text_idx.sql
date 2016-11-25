DROP INDEX contenido_archivo_idx;

CREATE INDEX contenido_archivo_idx
    ON contenidos_archivos_tab( contenido ) 
    INDEXTYPE IS CTXSYS.CONTEXT;

-- Modifica los parametros de configuración del indice para que se actualice automaticamente
-- tras cada commit en la tabla
ALTER INDEX contenido_archivo_idx 
    REBUILD PARAMETERS( 'replace metadata sync (on commit)' );

-- Select value(d) from doc_contenido_obj_tab d where CONTAINS( d.contenido_documento, 'PALABRA A BUCAR', 1) > 0