
DROP FUNCTION crear_bfile_fun;

CREATE FUNCTION crear_bfile_fun ( file_name VARCHAR2 ) RETURN BFILE IS
BEGIN
    RETURN BFILENAME( 'CONTENIDOS_DIR', file_name );
END crear_bfile_fun;
/
