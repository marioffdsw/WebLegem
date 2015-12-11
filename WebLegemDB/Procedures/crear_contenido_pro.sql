-- Drop the existing procedure (if any)

DROP PROCEDURE crear_contenido_pro;

-- Procedure definition

CREATE OR REPLACE PROCEDURE crear_contenido_pro
(
id_referencia   number,
asunto          varchar2,
fecha           varchar2,
ruta            varchar2,
nombre          varchar2
)AS 

BEGIN
  
  INSERT INTO doc_contenido_obj_tab  VALUES(
  (SELECT REF(d) FROM doc_id_obj_tab d WHERE d.id = id_referencia),
  asunto,
  (TO_DATE(fecha, 'yyyy/mm/dd')),
  ruta,
  (BFILENAME('BFILE_DIR',nombre))
  );
  
END CREAR_CONTENIDO_PRO;
/

--INSERT INTO doc_contenido_obj_tab  VALUES(
--  (SELECT REF(d) FROM doc_id_obj_tab d WHERE d.id = 26),
--  'Asunto Doc 1',
--  (TO_DATE('1991/04/24', 'yyyy/mm/dd')),
--  'C:/oraData/web_legem/1.txt',
--  (BFILENAME('BFILE_DIR','1.txt'))
--);
  