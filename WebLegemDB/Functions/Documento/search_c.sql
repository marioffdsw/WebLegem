CREATE OR REPLACE FUNCTION search_c
    ( palabras_a_buscar IN VARCHAR2 )
RETURN SYS_REFCURSOR
IS
    res SYS_REFCURSOR;
BEGIN
    
    OPEN res FOR
    SELECT contenido_typ(
            ca.id,
            get_ar(ca.archivo),
            get_i_d( ca.identificador_documento ),
            ca.asunto,
            ca.contenido )
        FROM contenidos_archivos_tab ca 
        WHERE CONTAINS( ca.contenido, palabras_a_buscar, 1 ) > 0
        ORDER BY SCORE(1);

    RETURN res;
END search_c;
/