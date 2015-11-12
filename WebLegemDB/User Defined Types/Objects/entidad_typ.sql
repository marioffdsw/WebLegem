CREATE OR REPLACE TYPE entidad_typ AS OBJECT (
    id                      NUMBER,
    tipo_entidad            REF tipo_entidad_typ,
    nombre                  VARCHAR2( 50 )
);