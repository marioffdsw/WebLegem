CREATE TABLE doc_id_obj_tab OF documento_typ 
(
    CONSTRAINT FK_doc_tip_doc FOREIGN KEY ( tipo_documento )
        REFERENCES tipo_documento_obj_tab( id ),
        
    CONSTRAINT FK_doc_ent FOREIGN KEY ( entidad ) 
        REFERENCES entidad_obj_tab( codigo ),
        
    CONSTRAINT PK_documento PRIMARY KEY ( numero, tipo_documento, año_publicacion, entidad  )
) OBJECT IDENTIFIER IS PRIMARY KEY;