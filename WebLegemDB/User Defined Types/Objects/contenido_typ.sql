CREATE OR REPLACE TYPE contenido_typ AS OBJECT 
(
    id                              NUMBER,
    archivo                         archivo_typ,
    documento                       documento_typ,    
    asunto                          VARCHAR2( 10000 ),
    contenido                       BFILE      
);
/