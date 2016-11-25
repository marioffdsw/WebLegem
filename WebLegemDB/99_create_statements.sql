DECLARE
 tipo_documento tipo_documento_typ;
BEGIN
  tipo_documento := create_td( tipo_documento_typ( null, 'Circular', null ) );
  --tipo_documento := update_td( tipo_documento_typ( 1, 'Circular', TO_TIMESTAMP('03-NOV-16 10.55.09.000000 PM','DD-MON-RR HH12:MI:SS.FF PM') ));
  COMMIT;
END;