DROP INDEX contenido_text_idx; 

CREATE INDEX contenido_text_idx 
    ON contenidos_archivos_tab( contenido ) 
    INDEXTYPE IS CTXSYS.CONTEXT;

-- Modifica los parametros de configuración del indice para que se actualice automaticamente
-- tras cada commit en la tabla
ALTER INDEX contenido_text_idx 
    REBUILD PARAMETERS( 'replace metadata sync (on commit)' );