CREATE TYPE tipo_entidad_typ AS OBJECT (
   id                           NUMBER,   
   nombre                       VARCHAR2(50),
   documentos_soportados        tipo_doc_ref_tab_typ
);