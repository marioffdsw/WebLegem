set sqlblanklines on

INSERT INTO recursos_tab (id, nombre, descripcion)
    VALUES
    ( 
    1,
    'Administración', 'Acceder al modulo de administrador, permite configurar tipos de entidad, entidades, tipos anotacion, tipos documento y los tipos de anotaciones que procesará el sistema'
    );

INSERT INTO recursos_tab( id, nombre, descripcion )
    VALUES
    (
     2,
     'Gestion Documental',
     'Permite la carga de archivos y configuracion de documentos, ademas de la configuracion de anotaciones'
    );

INSERT INTO recursos_tab(id,nombre,descripcion)
    VALUES
    (
     3,
     'Usuarios',
     'Habilita la configuración de usuarios, los roles y lo permisos que se asignen a estos'
    );

COMMIT;