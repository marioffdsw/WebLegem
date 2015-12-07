CREATE TABLE tipo_entidad_obj_tab OF tipo_entidad_typ
    ( id primary key, nombre UNIQUE)
    NESTED TABLE documentos_soportados STORE AS documentos_soportados_nt;
