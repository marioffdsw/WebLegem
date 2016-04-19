CREATE OR REPLACE TYPE rol_typ AS OBJECT (
    id                        NUMBER,
    nombre                    VARCHAR2(50),
    permisos_asignados        permiso_tab_typ
);
/