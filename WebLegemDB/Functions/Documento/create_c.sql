CREATE OR REPLACE FUNCTION create_c
    ( new_c contenido_typ, file_name VARCHAR2 )
RETURN contenido_typ
IS
    identificador       documento_typ;
    arch                archivo_typ;   
BEGIN      
    identificador := create_i_d( new_c.documento );
    arch := create_ar( new_c.archivo );

    INSERT INTO contenidos_archivos_tab
        ( id, archivo, identificador_documento, asunto, contenido  )
        VALUES
            (
                contenido_seq.NEXTVAL,
                arch.id,
                identificador.id,
                new_c.asunto,
                BFILENAME( 'CONTENIDOS_DIR', file_name )
            );
        
    RETURN get_c( contenido_seq.CURRVAL );
END create_c;
/