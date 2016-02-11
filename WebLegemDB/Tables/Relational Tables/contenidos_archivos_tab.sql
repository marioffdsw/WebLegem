DROP TABLE contenidos_archivos_tab;

CREATE TABLE contenidos_archivos_tab
(
    id                          NUMBER              NOT NULL,        
    archivo                     NUMBER              NOT NULL,
    identificador_documento     NUMBER              NOT NULL,
    asunto                      VARCHAR2( 1000 )    NOT NULL,
    contenido                   BFILE               NOT NULL,
    estado                      CHAR( 1 )           DEFAULT 'A' NOT NULL,

    CONSTRAINT conteindo_archivo_PK
        PRIMARY KEY ( id ),

    CONSTRAINT ca_archivo_FK
        FOREIGN KEY ( archivo ) 
        REFERENCES archivos_tab( id ),

    CONSTRAINT ca_identificador_doc_FK
        FOREIGN KEY ( identificador_documento )
        REFERENCES identificadores_documentos_tab ( id ),

    CONSTRAINT ca_archivo_unique
        UNIQUE ( archivo ),

    CONSTRAINT ca_estado_chk
        CHECK ( estado IN ( 'A', 'I' ) ) -- A = activo
                                         -- I = inactivo
);