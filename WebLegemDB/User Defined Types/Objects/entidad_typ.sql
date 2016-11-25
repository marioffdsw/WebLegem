CREATE TYPE entidad_typ AS OBJECT (
    id                      NUMBER,
    tipo_entidad            tipo_entidad_typ,
    nombre                  VARCHAR2( 50 ),
    ultima_modificacion       TIMESTAMP
);
/