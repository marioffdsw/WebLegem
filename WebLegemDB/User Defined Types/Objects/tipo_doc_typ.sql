CREATE OR REPLACE TYPE tipo_doc_typ AS OBJECT (
    id                        NUMBER,
    nombre                    VARCHAR2(50),	
	CONSTRUCTOR FUNCTION tipo_doc_typ (SELF IN OUT NOCOPY tipo_doc_typ,
		nombre VARCHAR2 ) RETURN SELF AS RESULT
);
/

CREATE TYPE BODY tipo_doc_typ AS

	CONSTRUCTOR FUNCTION tipo_doc_typ( SELF IN OUT NOCOPY tipo_doc_typ,
		nombre VARCHAR2 ) RETURN SELF AS RESULT IS	
		id_seq NUMBER;
	BEGIN
		SELECT typ_doc_seq.NEXTVAL INTO id_seq FROM DUAL;
		SELF.nombre := nombre;
		SELF.id := id_seq;
		RETURN;		
	END; -- constructor

END;
/