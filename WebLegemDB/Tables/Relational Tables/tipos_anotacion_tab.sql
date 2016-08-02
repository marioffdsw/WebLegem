DROP TABLE tipos_anotacion_tab;

CREATE TABLE tipos_anotacion_tab
(
    id                          NUMBER              NOT NULL,
    nombre                      VARCHAR2( 100 )     NOT NULL,
    raiz                        VARCHAR2( 50 )      NOT NULL,

    CONSTRAINT tipo_anotacion_PK
        PRIMARY KEY ( id ),

    CONSTRAINT ta_nombre_unique
        UNIQUE ( nombre ),

    CONSTRAINT ta_raiz_unique
        UNIQUE ( raiz )
);