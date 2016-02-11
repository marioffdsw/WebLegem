DROP TABLE entidades_tab;

CREATE TABLE entidades_tab
(
    id                          NUMBER              NOT NULL,
    tipo_entidad                NUMBER              NOT NULL,
    nombre                      VARCHAR2( 100 )     NOT NULL,

    CONSTRAINT entidad_PK
        PRIMARY KEY ( id ),

    CONSTRAINT e_tipo_entidad_FK
        FOREIGN KEY ( tipo_entidad ) REFERENCES tipos_entidad_tab( id ),

    CONSTRAINT e_nombre_unique
        UNIQUE ( nombre )
);
