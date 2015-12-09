-- drop everything as system
connect system/1234

drop tablespace tb_web_legem including contents;

drop user web_legem cascade;