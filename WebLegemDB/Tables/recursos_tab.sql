DROP TABLE recursos_tab;

CREATE TABLE recursos_tab
(
    id                          NUMBER              NOT NULL,
    nombre                      VARCHAR2(50)        NOT NULL,
    descripcion                 VARCHAR2(500)       NOT NULL,

    CONSTRAINT recursos_PK
        PRIMARY KEY ( id ),
        
    CONSTRAINT rec_nombre_UQ
        UNIQUE ( nombre )                    
);