DROP TABLE tipos_documento_tab;

CREATE TABLE tipos_documento_tab
(
    id                          NUMBER              NOT NULL,
    nombre                      VARCHAR2(50)        NOT NULL,
    ultima_modificacion         TIMESTAMP           DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT tipos_documento_PK
        PRIMARY KEY ( id ),

    CONSTRAINT td_nombre_unique
        UNIQUE ( nombre )
);