CREATE OR REPLACE FUNCTION create_c
    ( id_doc        IN      documento_typ,
      archivo       IN      archivo_typ,
      asunto        IN      VARCHAR2,
      contenido     IN      BFILE )
RETURN contenido_typ
IS
    identificador       documento_typ;
    arch                archivo_typ;   
BEGIN      
    identificador := create_i_d( id_doc);
    arch := create_ar( archivo );

    INSERT INTO contenidos_archivos_tab
        ( id, archivo, identificador_documento, asunto, contenido  )
        VALUES
            (
                contenido_seq.CURRVAL,
                arch.id,
                identificador.id,
                asunto,
                contenido
            );
        
    RETURN get_c( contenido_seq.CURRVAL );
END create_c;
/   