DROP TABLE archivos_tab;

CREATE TABLE archivos_tab
(
    id                          NUMBER              NOT NULL,    
    ruta                        VARCHAR2( 255 )     NOT NULL,
    ultima_modificacion         TIMESTAMP           DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT archivo_PK
        PRIMARY KEY ( id ),    

    CONSTRAINT a_ruta_unique
        UNIQUE ( ruta )
);
