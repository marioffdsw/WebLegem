CREATE OR REPLACE PROCEDURE delete_te
    ( id_ IN NUMBER )
IS
BEGIN    
    DELETE FROM documentos_soportados_tab ds
        WHERE id_ = ds.tipo_entidad;

    DELETE FROM tipos_entidad_tab te
        WHERE te.id = id_;
END delete_te;
/