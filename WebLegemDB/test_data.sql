/*
EXEC crear_tipo_entidad_pro( 'rectoria' );
EXEC crear_tipo_entidad_pro( 'facultad' );
EXEC crear_tipo_entidad_pro( 'departamento' );
EXEC crear_tipo_entidad_pro( 'secretaria de educación' );
EXEC crear_tipo_entidad_pro( 'ministerio de educación' );
*/

/*
INSERT INTO tipos_documento_tab VALUES( 1, 'Circular' );
INSERT INTO tipos_documento_tab VALUES( 2, 'Ley' );
INSERT INTO tipos_documento_tab VALUES( 3, 'Ordenanza' );
INSERT INTO tipos_documento_tab VALUES( 4, 'Acuerdo' );
INSERT INTO tipos_documento_tab VALUES( 5, 'Resolución' );

*/

/*
INSERT INTO tipos_entidad_tab VALUES( 1, 'Rectoria' );
INSERT INTO tipos_entidad_tab VALUES( 2, 'Facultad' );
INSERT INTO tipos_entidad_tab VALUES( 3, 'Departamento' );
INSERT INTO tipos_entidad_tab VALUES( 4, 'Secretaría de Educación' );
INSERT INTO tipos_entidad_tab VALUES( 5, 'Ministerio de Educación' );

INSERT INTO documentos_soportados_tab VALUES( 1, 5 );
INSERT INTO documentos_soportados_tab VALUES( 1, 1 );
INSERT INTO documentos_soportados_tab VALUES( 1, 4 );
INSERT INTO documentos_soportados_tab VALUES( 2, 1 );
INSERT INTO documentos_soportados_tab VALUES( 2, 4 );
INSERT INTO documentos_soportados_tab VALUES( 3, 4 );
INSERT INTO documentos_soportados_tab VALUES( 5, 2 );
INSERT INTO documentos_soportados_tab VALUES( 4, 3 );
*/

/*
EXEC crear_tipo_doc_pro( 'circular' );
EXEC crear_tipo_doc_pro( 'ley' );
EXEC crear_tipo_doc_pro( 'ordenanza' );
EXEC crear_tipo_doc_pro( 'acuerdo' );
EXEC crear_tipo_doc_pro( 'resolución' );
*/

/*
EXEC crear_entidad_pro( 'Rectoria', 1 );
EXEC crear_entidad_pro( 'Facultad de Ingeniería', 2 );
EXEC crear_entidad_pro( 'Departamento de Sistemas', 3 );
EXEC crear_entidad_pro( 'Departamento de Ingenieria Civil', 3 );
EXEC crear_entidad_pro( 'Departamento de Ingenieria Electronica', 3 );
EXEC crear_entidad_pro( 'Secretaría de Educación', 4 );
EXEC crear_entidad_pro( 'Ministerio de Educación', 5 );
*/

/* entidad, tipo_doc, numero, fecha (CHAR( 4 )), val OUT NUMBER */

/*
EXEC crear_documento_pro( 1, 1, '1025', '1998', :val );
EXEC crear_documento_pro( 2, 2, '2000', '1999', :val );
EXEC crear_documento_pro( 3, 3, '3000', '2000', :val );
EXEC crear_documento_pro( 4, 4, '4000', '2001', :val );
*/

/*
EXEC crear_contenido_pro( 1, 'Asunto 1', '1998/01/01', 'C:\pruebas\oracle\text\prueba3.txt', 'prueba3.txt' );
EXEC crear_contenido_pro( 2, 'Asunto 2', '1999/02/02', 'C:\pruebas\oracle\text\prueba4.txt', 'prueba4.txt' );
EXEC crear_contenido_pro( 3, 'Asunto 3', '2000/03/03', 'C:\pruebas\oracle\text\prueba5.txt', 'prueba5.txt' );
EXEC crear_contenido_pro( 3, 'Asunto 4', '2001/04/04', 'C:\pruebas\oracle\text\prueba6.txt', 'prueba6.txt' );
*/


/*
@@'User Defined Types/Objects/tipo_documento_typ.sql'
*/

/*
@@'Views/Object Views/tipos_documento_view.sql'
*/

/*
@@'User Defined Types/Nested Tables/tipo_documento_tab_typ.sql' 

@@'User Defined Types/Objects/tipo_entidad_typ.sql'
*/

/* @@'User Defined Types/Nested Tables/tipo_doc_ref_tab_typ.sql' */

/*
@@'Views/Object Views/tipos_entidad_view.sql'
*/

/*
@@'User Defined Types/Objects/entidad_typ.sql' 
*/

/*
INSERT INTO entidades_tab VALUES( 1, 1, 'Rectoria' );
INSERT INTO entidades_tab VALUES( 2, 2, 'Facultad de Ingeniería' );
INSERT INTO entidades_tab VALUES( 3, 3, 'Departamento de Sistemas' );
INSERT INTO entidades_tab VALUES( 4, 3, 'Departamento de Ingeniería Civil' );
INSERT INTO entidades_tab VALUES( 5, 3, 'Departamento de Ingeniería Electronica' );
INSERT INTO entidades_tab VALUES( 6, 4, 'Secretaría de Educación' );
INSERT INTO entidades_tab VALUES( 7, 5, 'Ministerio de Educación' );
*/

/*
@@'Views/Object Views/entidades_view.sql'
*/
/*
INSERT INTO identificadores_documentos_tab VALUES( 1, 1, 5, '2122', '2015' );
INSERT INTO identificadores_documentos_tab VALUES( 2, 2, 1, '034', '2014' );
*/

/*
@@'Tables/Relational Tables/archivos_tab.sql'
@@'Tables/Relational Tables/contenidos_archivos_tab.sql'
*/


--INSERT INTO archivos_tab VALUES( 1, 'C:\oradata\web_legem\prueba3.pdf' );
--INSERT INTO archivos_tab VALUES( 2, 'c:\oradata\web_legem\prueba4.pdf' );

--INSERT INTO contenidos_archivos_tab VALUES( 1, 1, 1, 'Por medio de la cual se delega la ordenación del gasto para convocatorias de menor cuant/a y contrataciOn directa, en el marco de aplicaciOn del nuevo Estatuto de Contratación de la Universidad de Nariño y se derogan otras disposiciones.', BFILENAME( 'CONTENIDOS_DIR', 'prueba3.txt' ), 'A' );
--INSERT INTO contenidos_archivos_tab VALUES( 2, 2, 2, 'RESTRICCIÓN EN EL MANEJO DE LA INFORMACIÓN DE LAS HOJAS', BFILENAME( 'CONTENIDOS_DIR', 'prueba4.txt' ), 'A' );

--DELETE FROM contenidos_archivos_tab ca WHERE ca.id = 2;

--INSERT INTO identificadores_documentos_tab VALUES( 3, 3, 1, '027', '2013' );
--INSERT INTO contenidos_archivos_tab VALUES( 3, 3, 3, 'CUENTA DE COBRO O FACTURA', BFILENAME( 'CONTENIDOS_DIR', 'prueba5.txt' ), 'A' );


--@@'User Defined Types/Objects/documento_typ.sql'
--@@'User Defined Types/Objects/documento_contenido_typ.sql'

/*
INSERT INTO identificadores_documentos_tab VALUES( 4, 4, 1, '027', '2012' );
*/

--@@'Views/Object Views/documentos_sin_contenido_view.sql'
--@@'Views/Object Views/documentos_contenido_view.sql'

--@@'Sequences/tipos_documento_seq.sql'

--@@'Triggers/View Triggers/crear_tipo_documento_trig.sql'
--INSERT INTO tipos_documento_view VALUES( tipo_documento_typ( 0, 'Prueba Tipo Documento' ) );
--@@'Triggers/View Triggers/actualizar_tipo_doc_trig.sql'
--UPDATE tipos_documento_view tdv SET tipos_documento = tipo_documento_typ( 6, 'Prueba Actualizada' ) WHERE tdv.tipos_documento.id = 6;
--@@'Triggers/View Triggers/eliminar_tipo_doc_trig.sql'
--DELETE FROM tipos_documento_view tdv WHERE tdv.tipos_documento.id = 6;

