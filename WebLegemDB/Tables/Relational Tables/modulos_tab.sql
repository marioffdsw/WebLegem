DROP TABLE modulos_tab;

CREATE TABLE modulos_tab
(
    id                          NUMBER              NOT NULL,
    nombre                      VARCHAR2(50)        NOT NULL,

    CONSTRAINT modulos_PK
        PRIMARY KEY ( id ),

    CONSTRAINT mod_nombre_unique
        UNIQUE ( nombre )
);