DROP TABLE identificadores_documentos_tab;

CREATE TABLE identificadores_documentos_tab
(
    id                          NUMBER              NOT NULL,
    entidad                     NUMBER              NOT NULL,
    tipo_documento              NUMBER              NOT NULL,
    numero                      VARCHAR2(20)        NOT NULL,
    fecha_publicacion           DATE                NOT NULL,

    CONSTRAINT identificador_documento_PK
        PRIMARY KEY ( id ),

    CONSTRAINT id_entidad_FK
        FOREIGN KEY ( entidad ) REFERENCES entidades_tab( id ),

    CONSTRAINT id_td_FK
        FOREIGN KEY ( tipo_documento ) REFERENCES tipos_documento_tab( id ),

    CONSTRAINT id_identificador_doc_unique
        UNIQUE ( entidad, tipo_documento, numero, fecha_publicacion )
);

-- TODO revisar si se puede usar la ñ en un identifiador