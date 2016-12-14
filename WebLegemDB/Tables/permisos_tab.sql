DROP TABLE permisos_tab;

CREATE TABLE permisos_tab
(    
    recurso                     NUMBER              NOT NULL,
    rol                         NUMBER              NOT NULL,    
            
    CONSTRAINT permisos_PK
        PRIMARY KEY ( recurso, rol ),

    CONSTRAINT per_recurso_FK
        FOREIGN KEY ( recurso ) REFERENCES recursos_tab( id ),

    CONSTRAINT per_rol_FK
        FOREIGN KEY ( rol ) REFERENCES roles_tab( id )   
);