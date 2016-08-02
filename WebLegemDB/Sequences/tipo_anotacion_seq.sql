-- Drop the existig sequence (if any)

DROP SEQUENCE tipo_anotacion_seq;

-- Create new sequence

CREATE SEQUENCE tipo_anotacion_seq
  MINVALUE 0
  MAXVALUE 99999999999999999999999
  START WITH 1 
  INCREMENT BY 1 
  NOCACHE;
  /