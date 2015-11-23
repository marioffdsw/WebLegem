-- Drop the existig sequence (if any)

DROP SEQUENCE typ_doc_seq;

-- Create new sequence

CREATE SEQUENCE typ_doc_seq
  START WITH 1 INCREMENT BY 1 MINVALUE 0 ORDER NOCACHE;