CREATE OR REPLACE FUNCTION create_td
    ( tipo_documento IN tipo_documento_typ )
RETURN tipo_documento_typ
IS
BEGIN    
    INSERT INTO tipos_documento_tab ( id, nombre )
       VALUES ( tipos_documento_seq.NEXTVAL, tipo_documento.nombre );
    
    COMMIT;

    RETURN get_td( tipos_documento_seq.CURRVAL );
END create_td;
/