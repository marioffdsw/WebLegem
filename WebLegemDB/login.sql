--
-- Copyright (c) 1988, 2005, Oracle.  All Rights Reserved.
--
-- NAME
--   glogin.sql
--
-- DESCRIPTION
--   SQL*Plus global login "site profile" file
--
--   Add any SQL*Plus commands here that are to be executed when a
--   user starts SQL*Plus, or uses the SQL*Plus CONNECT command.
--
-- USAGE
--   This script is automatically run
--
REM Number of lines of SELECT statement output before reprinting headers
SET PAGESIZE 999

REM Width of displayed page, expressed in characters
SET LINESIZE 168

REM Enable display of DBMS_OUTPUT messages. Use 1000000 rather than
REM "UNLIMITED" for databases earlier than Oracle Database 10g Release 2
SET SERVEROUTPUT ON SIZE UNLIMITED FORMAT WRAPPED

REM Change default to "vi improved" editor
DEFINE _EDITOR = C:\Users\mario\AppData\Local\atom\app-1.4.1\atom.exe

REM Change file edit name
SET EDITFILE edit.pls

REM Format misc columns commonly retrieved from data dictionary
COLUMN segment_name FORMAT A30 WORD_WRAP
COLUMN object_name FORMAT A30 WORD_WRAP

REM Set the prompt (works in SQL*Plus
REM in Oracle9i Database or later)
SET SQLPROMPT "_USER'@'_CONNECT_IDENTIFIER > "


REM Display data
SET TRIMSPOOL ON
SET TRIMOUT ON
SET WRAP OFF
SET TERMOUT OFF
