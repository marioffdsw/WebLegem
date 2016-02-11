DROP TABLE archivos_tab;

CREATE TABLE archivos_tab
(
    id                          NUMBER              NOT NULL,    
    ruta_al_archivo             VARCHAR2( 255 )     NOT NULL,

    CONSTRAINT archivo_PK
        PRIMARY KEY ( id ),    

    CONSTRAINT a_ruta_al_archivo_unique
        UNIQUE ( ruta_al_archivo )
);
