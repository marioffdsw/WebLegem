CREATE OR REPLACE VIEW acciones_view AS
SELECT accion_typ( acct.id, acct.nombre ) AS accion
    FROM acciones_tab acct;