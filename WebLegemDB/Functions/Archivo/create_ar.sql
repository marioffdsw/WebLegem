CREATE OR REPLACE FUNCTION create_ar
    ( archivo IN archivo_typ )
RETURN archivo_typ
IS
BEGIN
    INSERT INTO archivos_tab (id, ruta)
        VALUES(
            archivo_seq.NEXTVAL,
            archivo.ruta );

    RETURN get_ar( archivo_seq.CURRVAL );
END create_ar;
/