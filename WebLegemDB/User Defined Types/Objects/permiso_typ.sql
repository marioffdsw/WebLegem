CREATE OR REPLACE TYPE permiso_typ AS OBJECT (
    id                        NUMBER,
    recurso                   recurso_typ,
    accion                    accion_typ
);
/