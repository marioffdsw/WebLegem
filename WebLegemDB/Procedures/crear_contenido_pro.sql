-- Drop the existing procedure (if any)
DROP PROCEDURE crear_contenido_pro;

-- Procedure definition
CREATE OR REPLACE PROCEDURE crear_contenido_pro(
    id_referencia   NUMBER,
    asunto          VARCHAR2,
    fecha           VARCHAR2,
    ruta            VARCHAR2,
    nombre          VARCHAR2 )
AS 
BEGIN
    DBMS_OUTPUT.PUT_LINE( 'hello' );
  
    INSERT INTO doc_contenido_obj_tab VALUES(
        (
            SELECT REF(d) 
                FROM doc_id_obj_tab d 
                WHERE d.id = id_referencia
        ),
        asunto,
        TO_DATE( fecha, 'yyyy/mm/dd' ),
        ruta,
        BFILENAME( 'BFILE_DIR', nombre ) );  

EXCEPTION
    WHEN OTHERS THEN        
        DBMS_OUTPUT.PUT_LINE( 'PROBLEMAS AL EJECUTAR LA INSERSION' ); 
END crear_contenido_pro;
/

--INSERT INTO doc_contenido_obj_tab  VALUES(
--  (SELECT REF(d) FROM doc_id_obj_tab d WHERE d.id = 26),
--  'Asunto Doc 1',
--  (TO_DATE('1991/04/24', 'yyyy/mm/dd')),
--  'C:/oraData/web_legem/1.txt',
--  (BFILENAME('BFILE_DIR','1.txt'))
--);
  