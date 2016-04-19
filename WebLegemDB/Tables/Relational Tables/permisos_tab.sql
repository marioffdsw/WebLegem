DROP TABLE permisos_tab;

CREATE TABLE permisos_tab
(
    id                          NUMBER              NOT NULL,
    recurso                     NUMBER              NOT NULL,
    accion                      NUMBER              NOT NULL,
            
    CONSTRAINT permisos_PK
        PRIMARY KEY ( id ),

    CONSTRAINT per_recurso_FK
        FOREIGN KEY ( recurso ) REFERENCES recursos_tab( id ),

    CONSTRAINT per_accion_FK
        FOREIGN KEY ( accion ) REFERENCES acciones_tab( id ),

    CONSTRAINT permiso_unique
        UNIQUE ( recurso, accion )
);