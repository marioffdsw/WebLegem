
DROP TRIGGER eliminar_rol_trig;

CREATE TRIGGER eliminar_rol_trig
    INSTEAD OF DELETE ON roles_view
    FOR EACH ROW
BEGIN    
    DELETE FROM permisos_asignados_tab pat
        where pat.rol = :OLD.rol.id;

    DELETE FROM roles_tab rt 
        WHERE rt.id = :OLD.rol.id;
END eliminar_rol_trig;
/