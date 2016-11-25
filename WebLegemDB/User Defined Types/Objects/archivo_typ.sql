CREATE OR REPLACE TYPE archivo_typ AS OBJECT (
    id                        NUMBER,
    ruta                      VARCHAR( 255 ),
    ultima_modificacion       TIMESTAMP
);
/