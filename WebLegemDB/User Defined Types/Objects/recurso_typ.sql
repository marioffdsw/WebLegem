CREATE OR REPLACE TYPE recurso_typ AS OBJECT (
    id                        NUMBER,
    nombre                    VARCHAR2(50),
    modulo                    modulo_typ
);
/