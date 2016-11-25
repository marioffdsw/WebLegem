CREATE OR REPLACE FUNCTION get_c
    ( id    IN      NUMBER )
RETURN contenido_typ
IS
    contenido       contenido_typ;
BEGIN
    SELECT contenido_typ(
            ca.id,
            get_ar( ca.archivo ),
            get_i_d( ca.identificador_documento ),            
            ca.asunto,
            ca.contenido
        ) 
        INTO contenido
        FROM contenidos_archivos_tab ca
        WHERE ca.id = id;

    RETURN contenido;
END get_c;
/