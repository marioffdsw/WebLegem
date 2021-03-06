DROP TABLE tipos_entidad_tab;

CREATE TABLE tipos_entidad_tab
(
    id                          NUMBER              NOT NULL,
    nombre                      VARCHAR2( 100 )     NOT NULL,
    ultima_modificacion         TIMESTAMP           DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT tipo_entidad_PK
        PRIMARY KEY ( id ),

    CONSTRAINT te_nombre_ent_unique
        UNIQUE ( nombre )
);