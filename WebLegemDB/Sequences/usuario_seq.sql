
DROP SEQUENCE usuario_seq;

CREATE SEQUENCE usuario_seq
  MINVALUE 0
  MAXVALUE 99999999999999999999999
  START WITH 1 
  INCREMENT BY 1 
  NOCACHE;