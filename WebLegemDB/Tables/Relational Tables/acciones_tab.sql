DROP TABLE acciones_tab;

CREATE TABLE acciones_tab
(
    id                          NUMBER              NOT NULL,
    nombre                      VARCHAR2( 50 )      NOT NULL,

    CONSTRAINT acciones_PK
        PRIMARY KEY ( id ),

    CONSTRAINT acc_nombre_unique
        UNIQUE ( nombre )
);