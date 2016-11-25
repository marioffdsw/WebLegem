DROP TABLE usuarios_tab;

CREATE TABLE usuarios_tab
(
    id                          NUMBER              NOT NULL,
    nombre_usuario              VARCHAR2(50)        NOT NULL,
    nombre                      VARCHAR2(100)       NOT NULL,
    apellido                    VARCHAR2(100)       NOT NULL,
    contrasena                  VARCHAR2(20)        NOT NULL,
    correo                      VARCHAR2(100)       NOT NULL,
    foto                        VARCHAR2(255)       NOT NULL,
    estado                      CHAR(1)             NOT NULL,
    rol                         NUMBER              NOT NULL,
    ultima_modificacion         TIMESTAMP           NOT NULL,
        
    CONSTRAINT usuarios_PK
        PRIMARY KEY ( id ),

    CONSTRAINT usu_correo_unique
        UNIQUE ( correo ),

    CONSTRAINT usu_foto_unique
        UNIQUE ( foto ),

    CONSTRAINT usu_estado_check
        CHECK ( estado IN ( 'A', 'I' ) ),           -- estado A = Activo, I = Inactivo
        
    CONSTRAINT usu_rol_FK
        FOREIGN KEY ( rol ) REFERENCES roles_tab( id )
);