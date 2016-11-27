DROP TABLE anotaciones_tab;

CREATE TABLE anotaciones_tab
(
    id                          NUMBER              NOT NULL,
    documento_anotante          NUMBER              NOT NULL,
    documento_anotado           NUMBER              NOT NULL,
    tipo_anotacion              NUMBER              NOT NULL,        
    descripcion                 VARCHAR( 1000 ),
    ultima_modificacion         TIMESTAMP           DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT anotaciones_PK
        PRIMARY KEY( id ),

    CONSTRAINT an_doc_anotante_FK
        FOREIGN KEY( documento_anotante ) 
        REFERENCES identificadores_documentos_tab( id ),

    CONSTRAINT an_doc_anotado_FK
        FOREIGN KEY( documento_anotado )
         REFERENCES identificadores_documentos_tab( id ),

    CONSTRAINT an_anotacion_unique
        UNIQUE( documento_anotante, documento_anotado, tipo_anotacion )
      
);