CREATE OR REPLACE TYPE documento_contenido_typ 
    UNDER documento_typ 
(
    id_contenido                    NUMBER,
    archivo                         NUMBER,
    asunto                          VARCHAR2( 10000 ),
    contenido                       BFILE    
);
/