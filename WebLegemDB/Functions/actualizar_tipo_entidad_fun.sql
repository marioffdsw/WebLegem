CREATE OR REPLACE FUNCTION actualizar_tipo_entidad_fun 
    ( tipo_entidad IN OUT tipo_entidad_typ  )   
    RETURN tipo_entidad_typ
IS
BEGIN
    /* crea el tipo entidad */
    UPDATE tipos_entidad_tab
    SET nombre = tipo_entidad.nombre
    WHERE id = tipo_entidad.id;          

    /* elimina los anteriores documentos soportados */
    DELETE FROM documentos_soportados_tab dst 
    WHERE dst.tipo_entidad = tipo_entidad.id;
     
    /* asigna los documentos soportados por ese tipo de entidad */
    FOR i IN 1 .. tipo_entidad.documentos_soportados.COUNT LOOP
        INSERT INTO documentos_soportados_tab            
        VALUES ( tipo_entidad.id,
            tipo_entidad.documentos_soportados(i).id );
    END LOOP;              
    
    RETURN tipo_entidad;
END;
/