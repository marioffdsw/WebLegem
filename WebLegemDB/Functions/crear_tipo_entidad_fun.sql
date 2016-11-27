CREATE OR REPLACE FUNCTION crear_tipo_entidad_fun 
    ( tipo_entidad IN OUT tipo_entidad_typ  )   
    RETURN tipo_entidad_typ
IS
BEGIN
    /* crea el tipo entidad */
    INSERT INTO tipos_entidad_tab (id, nombre) 
    VALUES( tipo_entidad_seq.NEXTVAL, tipo_entidad.nombre );          
     
    /* asigna los documentos soportados por ese tipo de entidad */
    FOR i IN 1 .. tipo_entidad.documentos_soportados.COUNT LOOP
        INSERT INTO documentos_soportados_tab            
        VALUES ( tipo_entidad_seq.CURRVAL,
            tipo_entidad.documentos_soportados(i).id );
    END LOOP;
            
    tipo_entidad.id := tipo_entidad_seq.CURRVAL;  
    
    RETURN tipo_entidad;
END;
/