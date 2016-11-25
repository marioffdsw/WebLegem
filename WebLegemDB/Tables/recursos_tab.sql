DROP TABLE recursos_tab;

CREATE TABLE recursos_tab
(
    id                          NUMBER              NOT NULL,
    nombre                      VARCHAR2(50)        NOT NULL,
    modulo                      NUMBER              NOT NULL,
    ultima_modificacion         TIMESTAMP           NOT NULL,

    CONSTRAINT recursos_PK
        PRIMARY KEY ( id ),

    CONSTRAINT rec_nombre_unique
        UNIQUE ( nombre ),

     CONSTRAINT rec_modulo_FK
        FOREIGN KEY ( modulo ) REFERENCES modulos_tab( id ) 
);