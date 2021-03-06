
CREATE USER web_legem IDENTIFIED BY web_legem;

CREATE TABLESPACE tb_web_legem
DATAFILE 'C:\oradata\dat_web_legem.dbf'
SIZE 10M AUTOEXTEND ON;

GRANT RESOURCE, CONNECT, CTXAPP, DBA TO web_legem;

GRANT EXECUTE ON CTXSYS.CTX_CLS TO web_legem;
GRANT EXECUTE ON CTXSYS.CTX_DDL TO web_legem;
GRANT EXECUTE ON CTXSYS.CTX_DOC TO web_legem;
GRANT EXECUTE ON CTXSYS.CTX_OUTPUT TO web_legem;
GRANT EXECUTE ON CTXSYS.CTX_QUERY TO web_legem;
GRANT EXECUTE ON CTXSYS.CTX_REPORT TO web_legem;
GRANT EXECUTE ON CTXSYS.CTX_THES TO web_legem;
GRANT EXECUTE ON CTXSYS.CTX_ULEXER TO web_legem;

GRANT CREATE ANY DIRECTORY TO web_legem;

ALTER USER web_legem DEFAULT TABLESPACE tb_web_legem;

CONNECT web_legem/web_legem;

CREATE OR REPLACE DIRECTORY contenidos_dir AS 'C:/oradata/web_legem/text';