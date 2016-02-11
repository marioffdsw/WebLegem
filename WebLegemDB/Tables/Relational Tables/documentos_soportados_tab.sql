DROP TABLE documentos_soportados_tab;

CREATE TABLE documentos_soportados_tab
(
    tipo_entidad                NUMBER              NOT NULL,
    tipo_documento              NUMBER              NOT NULL,

    CONSTRAINT doc_soportados_PK
        PRIMARY KEY ( tipo_entidad, tipo_documento ),

    CONSTRAINT ds_tipo_entidad_FK
        FOREIGN KEY ( tipo_entidad ) 
        REFERENCES tipos_entidad_tab ( id ),

    CONSTRAINT ds_tipo_documento_FK
        FOREIGN KEY ( tipo_documento )
        REFERENCES tipos_documento_tab ( id )
);
