
DROP FUNCTION obtener_archivo_seq_fun;

CREATE FUNCTION obtener_archivo_seq_fun () RETURN NUMBER IS
BEGIN
    RETURN archivo_seq.NEXTVAL;
END obtener_archivo_seq_fun;
/
