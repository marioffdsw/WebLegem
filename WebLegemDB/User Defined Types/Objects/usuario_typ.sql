CREATE OR REPLACE TYPE usuario_typ AS OBJECT (
    id                        NUMBER,
    nombre_usuario            VARCHAR(50),
    nombre                    VARCHAR2(100),
    apellido                  VARCHAR2(100),
    contrasena                VARCHAR2(20),
    correo                    VARCHAR2(100),
    foto                      VARCHAR2( 255 ),
    estado                    CHAR( 1  ),
    rol                       rol_typ,
    ultima_modificacion       TIMESTAMP
);
/