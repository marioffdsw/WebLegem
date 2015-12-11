CREATE TABLE doc_id_obj_tab OF doc_id_typ 
(
    tipo_doc REFERENCES tipo_doc_obj_tab( id ),
        
    entidad REFERENCES entidad_obj_tab( id ),
        
    PRIMARY KEY ( numero, tipo_doc, fecha_publicacion, entidad  )
);