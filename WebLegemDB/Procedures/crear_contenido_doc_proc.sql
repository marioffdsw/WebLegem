
DROP PROCEDURE crear_documento_cont_proc;

CREATE PROCEDURE crear_documento_cont_proc ( doc IN OUT documento_contenido_typ, archivo VARCHAR2 ) AS
BEGIN
    
    doc.contenido := BFILENAME ( 'CONTENIDOS_DIR', archivo );

    INSERT INTO documentos_contenido_view VALUES( doc );
END crear_documento_cont_proc;
/
