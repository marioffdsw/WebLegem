CREATE OR REPLACE VIEW modulos_view AS
SELECT modulo_typ( modt.id, modt.nombre ) AS modulo
    FROM modulos_tab modt;