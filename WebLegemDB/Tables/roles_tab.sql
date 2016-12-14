DROP TABLE roles_tab;

CREATE TABLE roles_tab
(
    id                          NUMBER              NOT NULL,
    nombre                      VARCHAR2(50)        NOT NULL,  
    ultima_modificacion         TIMESTAMP           DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT roles_PK
        PRIMARY KEY ( id ),

    CONSTRAINT rol_nombre_unique
        UNIQUE ( nombre )
     
);