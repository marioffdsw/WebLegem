CREATE OR REPLACE TYPE tipo_entidad_typ AS OBJECT (
   id                           NUMBER,   
   nombre                       VARCHAR2(50),
   documentos_soportados        tipo_documento_ref_tab_typ
);