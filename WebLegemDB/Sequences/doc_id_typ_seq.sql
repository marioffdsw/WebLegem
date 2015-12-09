
-- Drop the existig sequence (if any)

DROP SEQUENCE doc_id_typ_seq;

-- Create new sequence
CREATE SEQUENCE doc_id_typ_seq
  MINVALUE 0
  MAXVALUE 99999999999999999999999
  START WITH 1 
  INCREMENT BY 1 
  NOCACHE;