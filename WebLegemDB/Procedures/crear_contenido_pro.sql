-- Drop the existing procedure (if any)

DROP PROCEDURE crear_contenido_pro;

-- Procedure definition

CREATE OR REPLACE PROCEDURE CREAR_CONTENIDO_PRO
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