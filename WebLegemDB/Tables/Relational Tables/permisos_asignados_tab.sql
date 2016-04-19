DROP TABLE permisos_asignados_tab;

CREATE TABLE permisos_asignados_tab
(        
    rol                         NUMBER              NOT NULL,
    permiso                     NUMBER              NOT NULL,

    CONSTRAINT permisos_asignados_PK
        PRIMARY KEY ( rol, permiso ),

     CONSTRAINT pa_rol_FK
        FOREIGN KEY ( rol ) REFERENCES roles_tab( id ),

    CONSTRAINT pa_permiso_FK
        FOREIGN KEY ( permiso ) REFERENCES permisos_tab( id )
);