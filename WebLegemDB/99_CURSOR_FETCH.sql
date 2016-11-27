DECLARE
  res SYS_REFCURSOR;
  td tipo_documento_typ;
BEGIN
  res := get_all_td();  
  
  dbms_output.put_line( res%ROWCOUNT );
  
  LOOP FETCH res INTO td;  
  EXIT WHEN res%NOTFOUND;
    dbms_output.put_line( td.nombre );
  END LOOP;
END;
/