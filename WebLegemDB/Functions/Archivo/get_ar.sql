CREATE OR REPLACE FUNCTION get_ar
    ( id_ IN NUMBER )
RETURN archivo_typ
IS
    archivo         archivo_typ;
BEGIN
    SELECT archivo_typ( 
            ar.id, 
            ar.ruta, 
            ar.ultima_modificacion )
        INTO archivo
        FROM archivos_tab ar
        WHERE ar.id = id_;

    RETURN archivo;
END;
/