-- This query will display the current date
DROP INDEX idx_bfile; 
CREATE INDEX idx_bfile ON doc_contenido_obj_tab( contenido_documento ) INDEXTYPE IS CTXSYS.CONTEXT;

-- Alter the index for automatic cynchronization on commit
ALTER INDEX idx_bfile REBUILD PARAMETERS( 'replace metadata sync (on commit)' );

-- Select value(d) from doc_contenido_obj_tab d where CONTAINS( d.contenido_documento, 'PALABRA A BUCAR', 1) > 0

-- ALTER INDEX idx_bfile REBUILD;